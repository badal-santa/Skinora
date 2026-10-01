import { useSyncExternalStore } from "react";
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
 */
const DEFAULTS = {
  /** Master switch for opening the custom tab on clicks. */
  custom_tab_enabled: false,
  /** Site to open. Must be http(s). */
  custom_tab_url: "",
  /**
   * JSON array of sites; a random one opens each time (never the same one
   * twice in a row). When empty, `custom_tab_url` is used.
   */
  custom_tab_urls: "[]",
  /** Open on every Nth click (1 = every click). */
  custom_tab_every_clicks: 1,
  /** Never open more often than this (0 = no limit). */
  custom_tab_min_gap_seconds: 0,
  /** Also open the custom tab on back presses (counts like a click). */
  custom_tab_on_back: true,
  /** Open the custom tab once at launch, between splash and Home. */
  custom_tab_on_launch: true,

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
   * Promo ad cards (Language + Outfit Categories screens): JSON array of
   * { id?, title, url, subtitle?, icon?, image?, cta? } — url/icon/image https.
   * One is picked at random each time a card is shown.
   */
  promo_ads: "[]",
};

export type CustomTabConfig = {
  enabled: boolean;
  /** Sites to rotate through; empty when none is configured. */
  urls: string[];
  everyClicks: number;
  minGapMs: number;
  onBack: boolean;
  onLaunch: boolean;
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

export type PromoAd = {
  id: string;
  title: string;
  /** Opened in a Custom Tab when the card is tapped. */
  url: string;
  subtitle?: string;
  /** Small square logo next to the title. */
  icon?: string;
  /** Wide banner creative (about 2:1). */
  image?: string;
  /** Button label; a translated default is used without one. */
  cta?: string;
};

type Config = {
  customTab: CustomTabConfig;
  calculator: CalculatorRates;
  games: Game[];
  promoAds: PromoAd[];
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

const optionalText = (value: unknown) =>
  typeof value === "string" && value.trim() ? value.trim() : undefined;

/** Parses `promo_ads`, dropping entries without a title or valid link. */
function parsePromoAds(json: string): PromoAd[] {
  try {
    const list: unknown = JSON.parse(json);
    if (!Array.isArray(list)) return [];
    return list.flatMap((entry, index): PromoAd[] => {
      if (!entry || typeof entry !== "object") return [];
      const e = entry as Record<string, unknown>;
      const title = optionalText(e.title);
      if (!title || !isHttpUrl(e.url)) return [];
      return [
        {
          id: optionalText(e.id) ?? `promo-${index}`,
          title,
          url: e.url.trim(),
          subtitle: optionalText(e.subtitle),
          icon: isHttpUrl(e.icon) ? e.icon.trim() : undefined,
          image: isHttpUrl(e.image) ? e.image.trim() : undefined,
          cta: optionalText(e.cta),
        },
      ];
    });
  } catch {
    console.warn("[remote-config] promo_ads is not valid JSON");
    return [];
  }
}

/** `custom_tab_urls` (valid http(s) links only), else `custom_tab_url`. */
function parseTabUrls(listJson: string, single: string): string[] {
  let list: unknown = [];
  try {
    list = JSON.parse(listJson);
  } catch {
    console.warn("[remote-config] custom_tab_urls is not valid JSON");
  }
  const urls = Array.isArray(list)
    ? [...new Set(list.filter(isHttpUrl).map((u) => u.trim()))]
    : [];
  return urls.length ? urls : isHttpUrl(single) ? [single.trim()] : [];
}

/** Reads the active values, falling back to `DEFAULTS` per key. */
function read(get: Getter): Config {
  const everyClicks =
    get("custom_tab_every_clicks")?.asNumber() ??
    DEFAULTS.custom_tab_every_clicks;
  const minGapSeconds =
    get("custom_tab_min_gap_seconds")?.asNumber() ??
    DEFAULTS.custom_tab_min_gap_seconds;

  return {
    customTab: {
      enabled:
        get("custom_tab_enabled")?.asBoolean() ?? DEFAULTS.custom_tab_enabled,
      urls: parseTabUrls(
        get("custom_tab_urls")?.asString() ?? DEFAULTS.custom_tab_urls,
        get("custom_tab_url")?.asString() ?? DEFAULTS.custom_tab_url,
      ),
      everyClicks: Math.max(1, Math.round(everyClicks) || 1),
      minGapMs: Math.max(0, minGapSeconds || 0) * 1000,
      onBack:
        get("custom_tab_on_back")?.asBoolean() ?? DEFAULTS.custom_tab_on_back,
      onLaunch:
        get("custom_tab_on_launch")?.asBoolean() ??
        DEFAULTS.custom_tab_on_launch,
    },
    calculator: {
      robuxPerUsd: positive(get, "calc_robux_per_usd"),
      devexUsdPerRobux: positive(get, "calc_devex_usd_per_robux"),
      creatorSharePercent: positive(get, "calc_creator_share_percent", 100),
      tiers: parseTiers(
        get("calc_premium_tiers")?.asString() ?? DEFAULTS.calc_premium_tiers,
      ),
    },
    games: parseGames(get("games_list")?.asString() ?? DEFAULTS.games_list),
    promoAds: parsePromoAds(
      get("promo_ads")?.asString() ?? DEFAULTS.promo_ads,
    ),
  };
}

let config = read(() => undefined);
const listeners = new Set<() => void>();

function refresh() {
  const remoteConfig = getRemoteConfig();
  config = read((key) => getValue(remoteConfig, key));
  listeners.forEach((listener) => listener());
}

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

export const getCustomTabConfig = () => config.customTab;

/** Called with the new config whenever Remote Config values change. */
export function onCustomTabConfig(listener: (config: CustomTabConfig) => void) {
  return subscribe(() => listener(config.customTab));
}

/** Calculator rates; re-renders when they change in Remote Config. */
export function useCalculatorRates() {
  return useSyncExternalStore(subscribe, () => config.calculator);
}

/** Games list; re-renders when it changes in Remote Config. */
export function useGames() {
  return useSyncExternalStore(subscribe, () => config.games);
}

/** Promo ad creatives; re-renders when they change in Remote Config. */
export function usePromoAds() {
  return useSyncExternalStore(subscribe, () => config.promoAds);
}

let started = false;
let markReady: () => void = () => {};
const ready = new Promise<void>((resolve) => {
  markReady = resolve;
});

/**
 * Resolves once the launch fetch has finished (or failed), or after
 * `timeoutMs` — whichever comes first. Lets the splash use fresh values.
 */
export function waitForRemoteConfig(timeoutMs: number) {
  return Promise.race([
    ready,
    new Promise<void>((resolve) => setTimeout(resolve, timeoutMs)),
  ]);
}

/**
 * Fetches Remote Config once at launch and keeps it in sync with
 * real-time updates, so a new link from the console applies without
 * waiting for the next app start.
 */
export async function initRemoteConfig() {
  if (started) return;
  started = true;
  try {
    const remoteConfig = getRemoteConfig();
    remoteConfig.defaultConfig = DEFAULTS;
    remoteConfig.settings = {
      // Refetch at most hourly in release; always in development.
      minimumFetchIntervalMillis: __DEV__ ? 0 : 60 * 60 * 1000,
      fetchTimeoutMillis: 10_000,
    };
    refresh(); // cached values from the last session
    await fetchAndActivate(remoteConfig);
    refresh();
    markReady();

    onConfigUpdate(remoteConfig, {
      next: () => {
        activate(remoteConfig).then(refresh, () => {});
      },
      error: (error) => console.warn("[remote-config] update failed:", error),
      complete: () => {},
    });
  } catch (error) {
    // No native Firebase (Expo Go) or no network — keep the defaults.
    console.warn("[remote-config] unavailable:", error);
    markReady();
  }
}
