import { Ads, adUnitId, fullScreenAd } from "./ads";
import { INTERSTITIAL_EVERY, INTERSTITIAL_MIN_GAP_MS } from "./config";

type Interstitial = ReturnType<
  NonNullable<typeof Ads>["InterstitialAd"]["createForAdRequest"]
>;

let ad: Interstitial | null = null;
let isLoaded = false;
let screenChanges = 0;
let lastShownAt = 0;
/** Runs once the currently showing ad is dismissed (or fails to show). */
let afterClose: (() => void) | null = null;

function runAfterClose() {
  const next = afterClose;
  afterClose = null;
  next?.();
}

function show(onDone?: () => void) {
  if (!ad) return;
  lastShownAt = Date.now();
  isLoaded = false;
  afterClose = onDone ?? null;
  // Set before show(): the app backgrounds before OPENED fires.
  fullScreenAd.isShowing = true;
  ad.show().catch(() => {
    fullScreenAd.isShowing = false;
    runAfterClose();
  });
}

/** Creates the interstitial and starts loading it in the background. */
export function preloadInterstitial() {
  if (!Ads || ad) return;
  const unitId = adUnitId("interstitial");
  if (!unitId) return;

  const { AdEventType } = Ads;
  const next = Ads.InterstitialAd.createForAdRequest(unitId);

  next.addAdEventListener(AdEventType.LOADED, () => {
    isLoaded = true;
  });
  next.addAdEventListener(AdEventType.OPENED, () => {
    fullScreenAd.isShowing = true;
  });
  next.addAdEventListener(AdEventType.CLOSED, () => {
    fullScreenAd.isShowing = false;
    isLoaded = false;
    runAfterClose();
    next.load(); // get the next one ready
  });
  next.addAdEventListener(AdEventType.ERROR, () => {
    isLoaded = false;
    runAfterClose();
    setTimeout(() => next.load(), 30_000);
  });

  ad = next;
  next.load();
}

/**
 * Call on every screen change. Shows an ad on every Nth change, never more
 * than once per `INTERSTITIAL_MIN_GAP_MS`, and only if one is already loaded.
 */
export function maybeShowInterstitial() {
  screenChanges += 1;
  if (!ad || !isLoaded || fullScreenAd.isShowing) return;
  if (screenChanges % INTERSTITIAL_EVERY !== 0) return;
  if (Date.now() - lastShownAt < INTERSTITIAL_MIN_GAP_MS) return;
  show();
}

/**
 * Call when the user opens a section from Home (a natural break). Skips the
 * every-Nth counter but still respects `INTERSTITIAL_MIN_GAP_MS`, so quickly
 * hopping between sections doesn't show an ad each time.
 */
export function showInterstitialOnSectionOpen() {
  if (!ad || !isLoaded || fullScreenAd.isShowing) return;
  if (Date.now() - lastShownAt < INTERSTITIAL_MIN_GAP_MS) return;
  show();
}
