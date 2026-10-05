import { useSyncExternalStore } from "react";
import { AppState } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Ads and the Custom Tab settings come from skinora-backend (Cloudflare
 * Worker), managed in the skinora-admin dashboard. Override the URL with EXPO_PUBLIC_ADS_API_URL
 * (e.g. http://localhost:8787 for local testing).
 *
 * Dashboard changes apply instantly: while the app is in the foreground it
 * keeps a WebSocket to /api/ads/live and refetches when the backend sends
 * "changed". A slow poll covers the times that socket is down.
 */
const ADS_API_URL = (
  process.env.EXPO_PUBLIC_ADS_API_URL ||
  "https://skinora-ads.fitpilot-api.workers.dev"
).replace(/\/+$/, "");

const CACHE_KEY = "ads.config.v1";
/** Fallback refetch while the app is open, in case the live socket is down. */
const POLL_MS = 5 * 60_000;
/** Keep-alive on the live socket (Cloudflare drops sockets idle for ~100 s). */
const PING_MS = 30_000;
/** Reconnect delay after the live socket drops: doubles up to the max. */
const RECONNECT_MIN_MS = 1_000;
const RECONNECT_MAX_MS = 30_000;
const FETCH_TIMEOUT_MS = 8_000;

export type PromoAd = {
  id: string;
  title: string;
  /** Opened in a Custom Tab when tapped. */
  url: string;
  subtitle?: string;
  /** Square logo. */
  icon?: string;
  /** Wide banner (about 2:1). */
  image?: string;
  /** Button label; a translated default is used without one. */
  cta?: string;
};

/** The site opened in a Chrome Custom Tab between screens. */
export type CustomTabConfig = {
  enabled: boolean;
  /** Sites to rotate through (https). */
  urls: string[];
  onTap: boolean;
  everyClicks: number;
  minGapMs: number;
  onBack: boolean;
  onLaunch: boolean;
};

/** Until the dashboard's settings arrive (or if never), the tab stays off. */
const CUSTOM_TAB_OFF: CustomTabConfig = {
  enabled: false,
  urls: [],
  onTap: false,
  everyClicks: 1,
  minGapMs: 0,
  onBack: false,
  onLaunch: false,
};

type AdsConfig = {
  adsEnabled: boolean;
  customTab: CustomTabConfig;
  creatives: PromoAd[];
  /**
   * creativeIds null = all creatives. positions: the spots on the screen
   * the dashboard chose (each matches a PromoAdCard `at`); undefined = the
   * app's default spot.
   */
  placements: Record<
    string,
    { enabled: boolean; creativeIds: string[] | null; positions?: string[] }
  >;
};

/** Ad slot kinds; with the screen's route name they form the placement id. */
export type AdSlot = "header" | "card" | "banner" | "side";

let config: AdsConfig | null = null;
/** Only the newest request may publish (a live "changed" can overtake one). */
let latestRequest = 0;
const listeners = new Set<() => void>();

const isHttps = (v: unknown): v is string =>
  typeof v === "string" && /^https:\/\//i.test(v);

/** Validates the server response; drops anything malformed. */
function parse(raw: unknown): AdsConfig | null {
  if (!raw || typeof raw !== "object") return null;
  const r = raw as Record<string, unknown>;
  const creatives = Array.isArray(r.creatives)
    ? r.creatives.flatMap((c): PromoAd[] => {
        const e = c as Record<string, unknown>;
        if (typeof e?.id !== "string" || typeof e.title !== "string" || !isHttps(e.url)) {
          return [];
        }
        return [
          {
            id: e.id,
            title: e.title,
            url: e.url,
            subtitle: typeof e.subtitle === "string" ? e.subtitle : undefined,
            cta: typeof e.cta === "string" ? e.cta : undefined,
            icon: isHttps(e.icon) ? e.icon : undefined,
            image: isHttps(e.image) ? e.image : undefined,
          },
        ];
      })
    : [];
  const placements: AdsConfig["placements"] = {};
  if (r.placements && typeof r.placements === "object") {
    for (const [id, p] of Object.entries(r.placements as Record<string, unknown>)) {
      const v = p as Record<string, unknown>;
      placements[id] = {
        enabled: v?.enabled !== false,
        creativeIds: Array.isArray(v?.creativeIds)
          ? v.creativeIds.filter((x): x is string => typeof x === "string")
          : null,
        positions: Array.isArray(v?.positions)
          ? v.positions.filter((x): x is string => typeof x === "string")
          : undefined,
      };
    }
  }
  return {
    adsEnabled: r.adsEnabled !== false,
    customTab: parseCustomTab(r.customTab),
    creatives,
    placements,
  };
}

function parseCustomTab(raw: unknown): CustomTabConfig {
  if (!raw || typeof raw !== "object") return CUSTOM_TAB_OFF;
  const t = raw as Record<string, unknown>;
  const num = (v: unknown, fallback: number) =>
    typeof v === "number" && Number.isFinite(v) ? v : fallback;
  const urls = Array.isArray(t.urls) ? [...new Set(t.urls.filter(isHttps))] : [];
  return {
    enabled: t.enabled === true && urls.length > 0,
    urls,
    // Older configs had no switch: taps always counted.
    onTap: t.onTap !== false,
    everyClicks: Math.max(1, Math.round(num(t.everyClicks, 1))),
    minGapMs: Math.max(0, num(t.minGapSeconds, 0)) * 1000,
    onBack: t.onBack === true,
    onLaunch: t.onLaunch === true,
  };
}

function publish(next: AdsConfig) {
  config = next;
  listeners.forEach((l) => l());
}

async function refresh() {
  const request = ++latestRequest;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const response = await fetch(`${ADS_API_URL}/api/ads`, {
      signal: controller.signal,
      // Always ask the backend, never a stale HTTP cache.
      cache: "no-store",
      headers: { "Cache-Control": "no-cache" },
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const json: unknown = await response.json();
    if (request !== latestRequest) return; // a newer refresh is on its way
    const next = parse(json);
    if (!next) throw new Error("Invalid ads config");
    publish(next);
    AsyncStorage.setItem(CACHE_KEY, JSON.stringify(json)).catch(() => {});
  } catch (error) {
    // Offline or backend down — keep showing the cached config.
    console.warn("[ads] refresh failed:", error);
  } finally {
    clearTimeout(timer);
  }
}

let started = false;
let markReady: () => void = () => {};
const ready = new Promise<void>((resolve) => {
  markReady = resolve;
});

/**
 * Resolves once the launch fetch has finished (or failed), or after
 * `timeoutMs`, whichever is first. Lets the splash use fresh settings.
 */
export function waitForAds(timeoutMs: number) {
  return Promise.race([
    ready,
    new Promise<void>((resolve) => setTimeout(resolve, timeoutMs)),
  ]);
}

/** Load the cached config, fetch a fresh one, and refresh on foreground. */
export async function initAds() {
  if (started) return;
  started = true;
  try {
    const cached = await AsyncStorage.getItem(CACHE_KEY);
    const parsed = cached ? parse(JSON.parse(cached)) : null;
    if (parsed && !config) publish(parsed);
  } catch {
    // Ignore a corrupt cache.
  }
  refresh().finally(markReady);

  // Live updates and a slow fallback poll while in the foreground; refetch
  // on every return to it (changes may have happened while away).
  let poll: ReturnType<typeof setInterval> | null = null;
  const resume = () => {
    poll ??= setInterval(refresh, POLL_MS);
    live.open();
  };
  const pause = () => {
    if (poll) clearInterval(poll);
    poll = null;
    live.close();
  };
  resume();
  AppState.addEventListener("change", (state) => {
    if (state === "active") {
      refresh();
      resume();
    } else {
      pause();
    }
  });
}

/** WebSocket to /api/ads/live; refetches on "changed", reconnects on drops. */
const live = (() => {
  const url = `${ADS_API_URL.replace(/^http/, "ws")}/api/ads/live`;
  let socket: WebSocket | null = null;
  let wanted = false;
  let delay = RECONNECT_MIN_MS;
  let ping: ReturnType<typeof setInterval> | null = null;
  let retry: ReturnType<typeof setTimeout> | null = null;

  const stopTimers = () => {
    if (ping) clearInterval(ping);
    if (retry) clearTimeout(retry);
    ping = retry = null;
  };

  const connect = (reconnecting: boolean) => {
    const ws = new WebSocket(url);
    socket = ws;
    ws.onopen = () => {
      delay = RECONNECT_MIN_MS;
      ping = setInterval(() => {
        if (ws.readyState === WebSocket.OPEN) ws.send("ping");
      }, PING_MS);
      // Catch up on anything saved while the socket was down.
      if (reconnecting) refresh();
    };
    ws.onmessage = (event) => {
      if (event.data === "changed") refresh();
    };
    ws.onclose = () => {
      if (socket !== ws) return; // replaced or closed on purpose
      socket = null;
      stopTimers();
      if (!wanted) return;
      retry = setTimeout(() => connect(true), delay);
      delay = Math.min(delay * 2, RECONNECT_MAX_MS);
    };
    // Errors are followed by onclose, which handles the retry.
    ws.onerror = () => {};
  };

  return {
    open() {
      wanted = true;
      if (!socket && !retry) connect(false);
    },
    close() {
      wanted = false;
      stopTimers();
      const ws = socket;
      socket = null;
      ws?.close();
    },
  };
})();

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

/** Creatives to rotate in one slot; empty when the slot is off. */
function creativesFor(c: AdsConfig | null, placementId: string): PromoAd[] {
  if (!c || !c.adsEnabled) return [];
  // Slots the backend doesn't know yet default to on with all creatives.
  const placement = c.placements[placementId];
  if (placement && !placement.enabled) return [];
  const ids = placement?.creativeIds;
  return ids ? c.creatives.filter((ad) => ids.includes(ad.id)) : c.creatives;
}

/**
 * Ads for a placement ("<RouteName>.<slot>"); re-renders when the
 * dashboard changes something and the app refreshes.
 */
export function usePlacementAds(placementId: string) {
  const current = useSyncExternalStore(subscribe, () => config);
  return creativesFor(current, placementId);
}

/** Spots on the screen the dashboard chose for a slot; undefined = app default. */
export function usePlacementPositions(placementId: string) {
  return useSyncExternalStore(subscribe, () => config?.placements[placementId]?.positions);
}

/** Current Custom Tab settings (off until the dashboard's arrive). */
export const getCustomTabConfig = () => config?.customTab ?? CUSTOM_TAB_OFF;

/** Called with the new settings whenever a fresh config arrives. */
export function onCustomTabConfig(listener: (config: CustomTabConfig) => void) {
  return subscribe(() => listener(getCustomTabConfig()));
}
