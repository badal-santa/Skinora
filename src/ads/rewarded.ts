import { Ads, adUnitId, fullScreenAd } from "./ads";
import { REWARDED_LOAD_TIMEOUT_MS } from "./config";

type Rewarded = ReturnType<
  NonNullable<typeof Ads>["RewardedAd"]["createForAdRequest"]
>;

/**
 * - `earned`: the user watched the ad and earned the reward
 * - `dismissed`: the user closed the ad before earning it
 * - `unavailable`: no ad could be shown (offline, no fill, Expo Go…)
 */
export type RewardedResult = "earned" | "dismissed" | "unavailable";

let ad: Rewarded | null = null;
let isLoaded = false;
let isLoading = false;
let loadWaiters: ((loaded: boolean) => void)[] = [];

function settleLoad(loaded: boolean) {
  isLoading = false;
  isLoaded = loaded;
  loadWaiters.forEach((resolve) => resolve(loaded));
  loadWaiters = [];
}

function load() {
  if (!ad || isLoading || isLoaded) return;
  isLoading = true;
  ad.load();
}

/** Creates the rewarded ad and starts loading it in the background. */
export function preloadRewarded() {
  if (!Ads || ad) return;
  const unitId = adUnitId("rewarded");
  if (!unitId) return;

  const { AdEventType, RewardedAdEventType } = Ads;
  ad = Ads.RewardedAd.createForAdRequest(unitId);

  ad.addAdEventListener(RewardedAdEventType.LOADED, () => settleLoad(true));
  ad.addAdEventListener(AdEventType.ERROR, () => settleLoad(false));
  load();
}

/** Resolves once an ad is loaded, or `false` after the timeout. */
function waitForLoad(): Promise<boolean> {
  if (isLoaded) return Promise.resolve(true);
  load();
  return new Promise((resolve) => {
    loadWaiters.push(resolve);
    setTimeout(() => resolve(false), REWARDED_LOAD_TIMEOUT_MS);
  });
}

/**
 * Shows a rewarded ad and resolves with the outcome. Waits briefly if the
 * ad is still loading. Always preloads the next one afterwards.
 */
export async function showRewardedAd(): Promise<RewardedResult> {
  if (!Ads) return "unavailable";
  preloadRewarded();
  if (!ad || fullScreenAd.isShowing) return "unavailable";
  if (!(await waitForLoad())) return "unavailable";

  const current = ad;
  const { AdEventType, RewardedAdEventType } = Ads;

  return new Promise<RewardedResult>((resolve) => {
    let earned = false;

    const unsubscribers = [
      current.addAdEventListener(RewardedAdEventType.EARNED_REWARD, () => {
        earned = true;
      }),
      current.addAdEventListener(AdEventType.OPENED, () => {
        fullScreenAd.isShowing = true;
      }),
      current.addAdEventListener(AdEventType.CLOSED, () =>
        finish(earned ? "earned" : "dismissed"),
      ),
    ];

    function finish(result: RewardedResult) {
      unsubscribers.forEach((unsubscribe) => unsubscribe());
      fullScreenAd.isShowing = false;
      isLoaded = false;
      load(); // get the next one ready
      resolve(result);
    }

    fullScreenAd.isShowing = true; // set before show(), see interstitial.ts
    current.show().catch(() => finish("unavailable"));
  });
}
