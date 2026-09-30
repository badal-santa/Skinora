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
  /** Open on every Nth click (1 = every click). */
  custom_tab_every_clicks: 1,
  /** Never open more often than this (0 = no limit). */
  custom_tab_min_gap_seconds: 0,
};

export type CustomTabConfig = {
  enabled: boolean;
  url: string;
  everyClicks: number;
  minGapMs: number;
};

type Key = keyof typeof DEFAULTS;
type Getter = (key: Key) => ReturnType<typeof getValue> | undefined;

/** Reads the active values, falling back to `DEFAULTS` per key. */
function read(get: Getter): CustomTabConfig {
  const url = (
    get("custom_tab_url")?.asString() ?? DEFAULTS.custom_tab_url
  ).trim();
  const everyClicks =
    get("custom_tab_every_clicks")?.asNumber() ??
    DEFAULTS.custom_tab_every_clicks;
  const minGapSeconds =
    get("custom_tab_min_gap_seconds")?.asNumber() ??
    DEFAULTS.custom_tab_min_gap_seconds;

  return {
    enabled:
      get("custom_tab_enabled")?.asBoolean() ?? DEFAULTS.custom_tab_enabled,
    url: /^https?:\/\//i.test(url) ? url : "",
    everyClicks: Math.max(1, Math.round(everyClicks) || 1),
    minGapMs: Math.max(0, minGapSeconds || 0) * 1000,
  };
}

let config = read(() => undefined);
const listeners = new Set<(config: CustomTabConfig) => void>();

function refresh() {
  const remoteConfig = getRemoteConfig();
  config = read((key) => getValue(remoteConfig, key));
  listeners.forEach((listener) => listener(config));
}

export const getCustomTabConfig = () => config;

/** Called with the new config whenever Remote Config values change. */
export function onCustomTabConfig(listener: (config: CustomTabConfig) => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

let started = false;

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
  }
}
