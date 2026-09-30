import { AppState, type AppStateStatus } from "react-native";
import { Ads, adUnitId, fullScreenAd } from "./ads";
import {
  APP_OPEN_EXPIRY_MS,
  APP_OPEN_LAUNCH_TIMEOUT_MS,
  APP_OPEN_MIN_AWAY_MS,
} from "./config";

type AppOpen = ReturnType<
  NonNullable<typeof Ads>["AppOpenAd"]["createForAdRequest"]
>;

let ad: AppOpen | null = null;
let loadedAt = 0;
let isLoading = false;
let wentToBackgroundAt = 0;
let launchDeadline = 0;

const isFresh = () =>
  loadedAt > 0 && Date.now() - loadedAt < APP_OPEN_EXPIRY_MS;

function load() {
  if (!ad || isLoading) return;
  isLoading = true;
  loadedAt = 0;
  ad.load();
}

function show() {
  if (!ad || !isFresh() || fullScreenAd.isShowing) return;
  loadedAt = 0; // an ad can only be shown once
  fullScreenAd.isShowing = true; // set before show(), see interstitial.ts
  ad.show().catch(() => {
    fullScreenAd.isShowing = false;
  });
}

function onAppStateChange(state: AppStateStatus) {
  if (state === "background") {
    // Ignore backgrounding caused by a full-screen ad opening.
    if (!fullScreenAd.isShowing) wentToBackgroundAt = Date.now();
    return;
  }

  if (state === "active" && wentToBackgroundAt > 0) {
    const awayFor = Date.now() - wentToBackgroundAt;
    wentToBackgroundAt = 0;
    if (awayFor < APP_OPEN_MIN_AWAY_MS) return;

    if (isFresh()) show();
    else load(); // stale or missing — have one ready next time
  }
}

/**
 * Sets up the app open ad: shows it on launch if it loads quickly,
 * and again when the user returns after being away. Call once, after `initAds()`.
 */
export function startAppOpenAds() {
  if (!Ads || ad) return;
  const unitId = adUnitId("appOpen");
  if (!unitId) return;

  const { AdEventType } = Ads;
  ad = Ads.AppOpenAd.createForAdRequest(unitId);
  launchDeadline = Date.now() + APP_OPEN_LAUNCH_TIMEOUT_MS;

  ad.addAdEventListener(AdEventType.LOADED, () => {
    isLoading = false;
    loadedAt = Date.now();
    // Cold start: only if it arrived quickly, while the splash is still up.
    if (launchDeadline && Date.now() <= launchDeadline) show();
    launchDeadline = 0;
  });
  ad.addAdEventListener(AdEventType.ERROR, () => {
    isLoading = false;
    launchDeadline = 0;
  });
  ad.addAdEventListener(AdEventType.OPENED, () => {
    fullScreenAd.isShowing = true;
  });
  ad.addAdEventListener(AdEventType.CLOSED, () => {
    fullScreenAd.isShowing = false;
    load(); // get the next one ready
  });

  AppState.addEventListener("change", onAppStateChange);
  load();
}
