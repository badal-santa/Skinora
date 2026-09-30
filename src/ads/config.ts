import { Platform } from "react-native";

/**
 * Real AdMob ad unit IDs — EMPTY while testing, so only Google's test ads run.
 *
 * Your real IDs, to paste back in when you publish (with ADS_TEST_MODE = __DEV__):
 *   banner:       ca-app-pub-6196441509915314/6049247993
 *   interstitial: ca-app-pub-6196441509915314/2848369582
 *   appOpen:      ca-app-pub-6196441509915314/8926607059
 *   native:       ca-app-pub-6196441509915314/5195245608
 *   rewarded:     ca-app-pub-6196441509915314/1499543175
 */
const PRODUCTION_UNITS = {
  banner: { android: "", ios: "" },
  interstitial: { android: "", ios: "" },
  appOpen: { android: "", ios: "" },
  native: { android: "", ios: "" },
  rewarded: { android: "", ios: "" },
};

export type AdKind = keyof typeof PRODUCTION_UNITS;

/** Show an interstitial on every Nth screen change… */
export const INTERSTITIAL_EVERY = 3;
/** …and never more than once per this many milliseconds. */
export const INTERSTITIAL_MIN_GAP_MS = 60_000;
/** How long "Watch Ad to Download" waits for a rewarded ad that is still loading. */
export const REWARDED_LOAD_TIMEOUT_MS = 6_000;

/** In grids, insert a native ad after every this many items. */
export const NATIVE_AD_EVERY = 6;
/** Max native ads loaded per screen. */
export const NATIVE_ADS_PER_SCREEN = 3;

/** On cold start, only show the app open ad if it loads within this time. */
export const APP_OPEN_LAUNCH_TIMEOUT_MS = 4_000;
/** Show on return to the app only after being away at least this long. */
export const APP_OPEN_MIN_AWAY_MS = 30_000;
/** Google discards app open ads older than 4 hours. */
export const APP_OPEN_EXPIRY_MS = 4 * 60 * 60 * 1000;

export const productionUnitId = (kind: AdKind) =>
  Platform.select({
    ios: PRODUCTION_UNITS[kind].ios,
    default: PRODUCTION_UNITS[kind].android,
  });

/**
 * Show Google's test ads on every device, in every build (including APKs).
 *
 * ⚠️ ON FOR TESTING. Before publishing to the Play Store, set this to
 * `__DEV__` so release builds use your real ad units — test ads earn nothing.
 */
export const ADS_TEST_MODE = true;

/**
 * Devices that always get test ads, even from your real ad units — so you
 * can tap ads while testing without risking your AdMob account. Find a
 * device's ID in its log: "Use RequestConfiguration...setTestDeviceIds(...)".
 */
export const TEST_DEVICE_IDS = [
  "72DD5AB6105E9556C435440785FAF769", // moto g96 5G (Badal)
];
