import { useEffect, useState } from "react";
import { Ads, adUnitId, useAdsReady } from "./ads";
import { NATIVE_AD_EVERY, NATIVE_ADS_PER_SCREEN } from "./config";

export type LoadedNativeAd = Awaited<
  ReturnType<NonNullable<typeof Ads>["NativeAd"]["createForAdRequest"]>
>;

/**
 * Loads up to `count` native ads for a screen, one at a time, and destroys
 * them when the screen unmounts. Returns only ads that loaded successfully.
 */
export function useNativeAds(count = NATIVE_ADS_PER_SCREEN) {
  const ready = useAdsReady();
  const [ads, setAds] = useState<LoadedNativeAd[]>([]);

  useEffect(() => {
    const unitId = adUnitId("native");
    if (!Ads || !ready || !unitId) return;

    let cancelled = false;
    const loaded: LoadedNativeAd[] = [];

    (async () => {
      for (let i = 0; i < count; i++) {
        try {
          const ad = await Ads.NativeAd.createForAdRequest(unitId);
          if (cancelled) {
            ad.destroy();
            return;
          }
          loaded.push(ad);
          setAds([...loaded]);
        } catch {
          return; // no fill — stop requesting for this screen
        }
      }
    })();

    return () => {
      cancelled = true;
      loaded.forEach((ad) => ad.destroy());
    };
  }, [ready, count]);

  return ads;
}

export type WithAds<T> =
  | { kind: "item"; key: string; item: T }
  | { kind: "ad"; key: string; ad: LoadedNativeAd };

/**
 * Inserts a loaded native ad after every `every` items. Slots without a
 * loaded ad are skipped, so the grid never shows an empty space.
 */
export function withNativeAds<T>(
  items: T[],
  ads: LoadedNativeAd[],
  getKey: (item: T) => string,
  every = NATIVE_AD_EVERY,
): WithAds<T>[] {
  const result: WithAds<T>[] = [];
  let adIndex = 0;

  items.forEach((item, i) => {
    result.push({ kind: "item", key: getKey(item), item });
    const isSlot = (i + 1) % every === 0 && i < items.length - 1;
    if (isSlot && adIndex < ads.length) {
      const ad = ads[adIndex++];
      result.push({ kind: "ad", key: `ad-${ad.responseId}`, ad });
    }
  });

  return result;
}
