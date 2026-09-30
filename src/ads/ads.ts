import { useEffect, useState } from "react";
import Constants, { ExecutionEnvironment } from "expo-constants";
import {
  ADS_TEST_MODE,
  TEST_DEVICE_IDS,
  productionUnitId,
  type AdKind,
} from "./config";

type AdsModule = typeof import("react-native-google-mobile-ads");

/** Expo Go doesn't include the AdMob native module. */
export const isExpoGo =
  Constants.executionEnvironment === ExecutionEnvironment.StoreClient;

/**
 * Loaded lazily so the app still runs without ads in Expo Go, or in an
 * outdated dev build that doesn't include the AdMob native module yet.
 */
function loadAdsModule(): AdsModule | null {
  if (isExpoGo) return null;
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    return require("react-native-google-mobile-ads");
  } catch (error) {
    if (__DEV__) {
      console.warn(
        "[ads] AdMob native module missing — rebuild the app (npx expo run:android / run:ios).",
        error,
      );
    }
    return null;
  }
}

export const Ads = loadAdsModule();

/** Test ads in development, your real IDs in release, `null` if not configured. */
export function adUnitId(kind: AdKind): string | null {
  if (!Ads) return null;
  if (ADS_TEST_MODE) {
    const testIds = {
      banner: Ads.TestIds.ADAPTIVE_BANNER,
      interstitial: Ads.TestIds.INTERSTITIAL,
      appOpen: Ads.TestIds.APP_OPEN,
      native: Ads.TestIds.NATIVE,
      rewarded: Ads.TestIds.REWARDED,
    };
    return testIds[kind];
  }
  return productionUnitId(kind) || null;
}

/**
 * True while any full-screen ad is on screen. Closing one brings the app
 * back to the foreground, which must not trigger an app open ad.
 */
export const fullScreenAd = { isShowing: false };

let ready = false;
let initPromise: Promise<boolean> | null = null;
const listeners = new Set<(ready: boolean) => void>();

/**
 * Gathers consent (shows Google's form where required, e.g. EEA/UK),
 * then initializes the Mobile Ads SDK. Safe to call more than once.
 */
export function initAds(): Promise<boolean> {
  if (!Ads) return Promise.resolve(false);

  initPromise ??= (async () => {
    let canRequestAds = true;
    try {
      const info = await Ads.AdsConsent.gatherConsent();
      canRequestAds = info.canRequestAds;
    } catch (error) {
      // No consent message configured in AdMob, or offline — fall back to the SDK default.
      if (__DEV__) console.warn("[ads] consent:", error);
    }

    if (!canRequestAds) return false;

    await Ads.default().setRequestConfiguration({
      testDeviceIdentifiers: TEST_DEVICE_IDS,
    });
    await Ads.default().initialize();
    ready = true;
    listeners.forEach((notify) => notify(true));
    return true;
  })().catch((error) => {
    if (__DEV__) console.warn("[ads] init failed:", error);
    return false;
  });

  return initPromise;
}

/** `true` once the SDK is initialized and ads may be requested. */
export function useAdsReady() {
  const [isReady, setIsReady] = useState(ready);

  useEffect(() => {
    if (ready) return;
    listeners.add(setIsReady);
    return () => {
      listeners.delete(setIsReady);
    };
  }, []);

  return isReady;
}

/**
 * Whether the user must be offered a way to change their ad consent
 * (true in regions like the EEA/UK once consent was gathered).
 */
export async function isAdPrivacyOptionsRequired(): Promise<boolean> {
  if (!Ads) return false;
  try {
    const info = await Ads.AdsConsent.getConsentInfo();
    return (
      info.privacyOptionsRequirementStatus ===
      Ads.AdsConsentPrivacyOptionsRequirementStatus.REQUIRED
    );
  } catch {
    return false;
  }
}

/** Re-opens Google's consent form so the user can change their ad choices. */
export async function showAdPrivacyOptions() {
  if (!Ads) return;
  await Ads.AdsConsent.showPrivacyOptionsForm();
}
