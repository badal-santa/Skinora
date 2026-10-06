import { useSyncExternalStore } from "react";
import { AppState } from "react-native";
import {
  activate,
  fetchAndActivate,
  getRemoteConfig,
  getValue,
  onConfigUpdate,
} from "@react-native-firebase/remote-config";

/**
 * Firebase Remote Config keys (create these in the Firebase console →
 * Remote Config). The defaults below apply until the first fetch succeeds,
 * or when Firebase isn't available (e.g. Expo Go).
 *
 * Ads and the Custom Tab's timing are managed in the admin dashboard
 * (see src/ads/ads.ts); the Custom Tab's links come from `web_url` here.
 */
const DEFAULTS = {
  /** Calculator: Robux bought per 1 USD (standard packs ≈ 80). */
  calc_robux_per_usd: 80,
  /** Calculator: USD a creator gets per Robux when cashing out (DevEx). */
  calc_devex_usd_per_robux: 0.0038,
  /** Calculator: share of a marketplace sale the creator keeps, in %. */
  calc_creator_share_percent: 70,
  /** Calculator hub: Robux per month and USD price of each Premium plan. */
  calc_premium_tiers: JSON.stringify({
    basic: { robux: 450, usd: 4.99 },
    pro: { robux: 1000, usd: 9.99 },
    elite: { robux: 2200, usd: 19.99 },
  }),

  /**
   * Games screen: JSON array of
   * { id, title, url, image?, category?, featured? } (url/image: https).
   */
  games_list: "[]",

  /**
   * Custom Tab: the https site(s) it opens; set in the Firebase console.
   * Several links may be separated by commas, spaces or new lines; the tab
   * rotates through them. Empty = the Custom Tab never opens. Same key as
   * the team's other apps, so it can be targeted by app version / country.
   */
  web_url: "",

  /**
   * Master switch for all ad cards and header ad icons. false = no ads
   * anywhere (e.g. during Play Store review); can also be set per country
   * or app version with conditions. The ads themselves (creatives,
   * screens, positions) come from the admin dashboard.
   */
  ads_enabled: true,

  /**
   * Update sheet: the newest released version, e.g. "1.2.0". Users on an
   * older version see "Update available" (they can tap Later). Empty = off.
   */
  latest_version: "",
  /**
   * Oldest version still allowed, e.g. "1.1.0". Users below it get an
   * update sheet they can't close. Empty = no forced update.
   */
  min_version: "",
};

export type TierId = "basic" | "pro" | "elite";
export type PremiumTier = { robux: number; usd: number };

export type CalculatorRates = {
  robuxPerUsd: number;
  devexUsdPerRobux: number;
  creatorSharePercent: number;
  tiers: Record<TierId, PremiumTier>;
};

export type Game = {
  id: string;
  title: string;
  /** Opened in a Custom Tab. */
  url: string;
  /** Cover art URL; a gradient placeholder is shown without one. */
  image?: string;
  category?: string;
  /** Shown as the big card at the top. */
  featured?: boolean;
};

type Config = {
  calculator: CalculatorRates;
  games: Game[];
  /** From `web_url`; empty = Custom Tab off. */
  customTabUrls: string[];
  /** From `latest_version` / `min_version` ("" = not set). */
  update: { latest: string; min: string };
  /** From `ads_enabled`; false hides every ad. */
  adsEnabled: boolean;
};
type Key = keyof typeof DEFAULTS;
type Getter = (key: Key) => ReturnType<typeof getValue> | undefined;

/** A positive number from Remote Config, or the default if it's invalid. */
function positive(get: Getter, key: Key, max = Infinity) {
  const value = get(key)?.asNumber();
  return value && value > 0 && value <= max ? value : (DEFAULTS[key] as number);
}

const isHttpUrl = (value: unknown): value is string =>
  typeof value === "string" && /^https?:\/\//i.test(value.trim());

/** Parses `web_url`: one or more https links (separated by commas/spaces). */
function parseUrls(value: string): string[] {
  const links = value
    .split(/[\s,]+/)
    .map((link) => link.trim())
    .filter((link) => /^https:\/\/\S+\.\S+/i.test(link));
  return [...new Set(links)];
}

/** Parses `games_list`, dropping entries without a title or valid link. */
function parseGames(json: string): Game[] {
  try {
    const list: unknown = JSON.parse(json);
    if (!Array.isArray(list)) return [];
    return list.flatMap((entry, index): Game[] => {
      if (!entry || typeof entry !== "object") return [];
      const { id, title, url, image, category, featured } = entry as Record<
        string,
        unknown
      >;
      if (typeof title !== "string" || !title.trim() || !isHttpUrl(url)) {
        return [];
      }
      return [
        {
          id: typeof id === "string" && id ? id : `game-${index}`,
          title: title.trim(),
          url: url.trim(),
          image: isHttpUrl(image) ? image.trim() : undefined,
          category:
            typeof category === "string" && category.trim()
              ? category.trim()
              : undefined,
          featured: featured === true,
        },
      ];
    });
  } catch {
    console.warn("[remote-config] games_list is not valid JSON");
    return [];
  }
}

const DEFAULT_TIERS: Record<TierId, PremiumTier> = JSON.parse(
  DEFAULTS.calc_premium_tiers,
);

/** Parses `calc_premium_tiers`, keeping defaults for missing/invalid plans. */
function parseTiers(json: string): Record<TierId, PremiumTier> {
  let raw: Record<string, Partial<PremiumTier>> = {};
  try {
    raw = JSON.parse(json) ?? {};
  } catch {
    console.warn("[remote-config] calc_premium_tiers is not valid JSON");
  }
  const tier = (id: TierId): PremiumTier => {
    const { robux, usd } = raw[id] ?? {};
    return {
      robux: typeof robux === "number" && robux > 0 ? robux : DEFAULT_TIERS[id].robux,
      usd: typeof usd === "number" && usd > 0 ? usd : DEFAULT_TIERS[id].usd,
    };
  };
  return { basic: tier("basic"), pro: tier("pro"), elite: tier("elite") };
}

/** Reads the active values, falling back to `DEFAULTS` per key. */
function read(get: Getter): Config {
  return {
    calculator: {
      robuxPerUsd: positive(get, "calc_robux_per_usd"),
      devexUsdPerRobux: positive(get, "calc_devex_usd_per_robux"),
      creatorSharePercent: positive(get, "calc_creator_share_percent", 100),
      tiers: parseTiers(
        get("calc_premium_tiers")?.asString() ?? DEFAULTS.calc_premium_tiers,
      ),
    },
    games: parseGames(get("games_list")?.asString() ?? DEFAULTS.games_list),
    customTabUrls: parseUrls(get("web_url")?.asString() ?? DEFAULTS.web_url),
    adsEnabled: get("ads_enabled")?.asBoolean() ?? DEFAULTS.ads_enabled,
    update: {
      latest: (get("latest_version")?.asString() ?? "").trim(),
      min: (get("min_version")?.asString() ?? "").trim(),
    },
  };
}

let config = read(() => undefined);
const listeners = new Set<() => void>();

function refresh() {
  const remoteConfig = getRemoteConfig();
  config = read((key) => getValue(remoteConfig, key));
  if (__DEV__) console.log("[remote-config] web_url links:", config.customTabUrls);
  listeners.forEach((listener) => listener());
}

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

/** Calculator rates; re-renders when they change in Remote Config. */
export function useCalculatorRates() {
  return useSyncExternalStore(subscribe, () => config.calculator);
}

/** Custom Tab links from `web_url` (empty = Custom Tab off). */
export const getCustomTabUrls = () => config.customTabUrls;

/** Calls `listener` whenever new Remote Config values are active. */
export const onRemoteConfigChange = subscribe;

/** Master ads switch from Firebase (`ads_enabled`). */
export function useRemoteAdsEnabled() {
  return useSyncExternalStore(subscribe, () => config.adsEnabled);
}

/** Latest / minimum app versions for the update sheet. */
export function useUpdateVersions() {
  return useSyncExternalStore(subscribe, () => config.update);
}

/** Games list; re-renders when it changes in Remote Config. */
export function useGames() {
  return useSyncExternalStore(subscribe, () => config.games);
}

let started = false;
let markReady: () => void = () => {};
const ready = new Promise<void>((resolve) => {
  markReady = resolve;
});

/**
 * Resolves once the launch fetch has finished (or failed), or after
 * `timeoutMs`, whichever is first. Lets the splash use fresh values.
 */
export function waitForRemoteConfig(timeoutMs: number) {
  return Promise.race([
    ready,
    new Promise<void>((resolve) => setTimeout(resolve, timeoutMs)),
  ]);
}

/**
 * Fetches Remote Config at launch (and again whenever the app returns to
 * the foreground) and keeps it in sync with real-time updates, so changes
 * in the console apply without waiting for the next app start. A failed
 * fetch (e.g. no network at launch) doesn't stop the later ones.
 */
export async function initRemoteConfig() {
  if (started) return;
  started = true;
  let remoteConfig: ReturnType<typeof getRemoteConfig>;
  try {
    remoteConfig = getRemoteConfig();
    remoteConfig.defaultConfig = DEFAULTS;
    remoteConfig.settings = {
      // Refetch at launch / return to the app at most once a minute in
      // release, so switches like ads_enabled apply on the next open even
      // if a real-time update is missed; always in development.
      minimumFetchIntervalMillis: __DEV__ ? 0 : 60 * 1000,
      fetchTimeoutMillis: 10_000,
    };
    refresh(); // cached values from the last session

    onConfigUpdate(remoteConfig, {
      next: () => {
        activate(remoteConfig).then(refresh, () => {});
      },
      error: (error) => console.warn("[remote-config] update failed:", error),
      complete: () => {},
    });
  } catch (error) {
    // No native Firebase (Expo Go) — keep the defaults.
    console.warn("[remote-config] unavailable:", error);
    markReady();
    return;
  }

  const fetchLatest = () =>
    fetchAndActivate(remoteConfig).then(refresh, (error) =>
      console.warn("[remote-config] fetch failed:", error),
    );
  await fetchLatest().finally(markReady);
  AppState.addEventListener("change", (state) => {
    if (state === "active") fetchLatest();
  });
}
