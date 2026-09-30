import { useState } from "react";
import { View } from "react-native";
import { Ads, adUnitId, useAdsReady } from "../ads/ads";

/**
 * Anchored adaptive banner. Renders nothing in Expo Go, before consent/init,
 * when no ad unit is configured, or if no ad fills — so layouts never show a gap.
 */
export default function AdBanner() {
  const ready = useAdsReady();
  const [failed, setFailed] = useState(false);
  const unitId = adUnitId("banner");

  if (!Ads || !ready || !unitId || failed) return null;

  const { BannerAd, BannerAdSize } = Ads;

  return (
    <View className="items-center border-t border-border bg-background">
      <BannerAd
        unitId={unitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        onAdFailedToLoad={() => setFailed(true)}
      />
    </View>
  );
}
