import { Image, View } from "react-native";
import { Text } from "./Text";
import { Ads } from "../ads/ads";
import type { LoadedNativeAd } from "../ads/native";
import { colors, withAlpha } from "../theme/colors";

type Props = {
  ad: LoadedNativeAd;
};

/** Media is kept at AdMob's 120×120dp minimum for native ads. */
const MEDIA_SIZE = 120;

/**
 * Full-width native advanced ad, for grids too narrow for `NativeAdCard`
 * (e.g. the 3-column emotes grid). Keeps the required "Ad" label,
 * headline and call to action; AdChoices is added by the SDK.
 */
export default function NativeAdRow({ ad }: Props) {
  if (!Ads) return null;
  const { NativeAdView, NativeAsset, NativeAssetType, NativeMediaView } = Ads;
  const accent = colors.primary;

  return (
    // The native ad view doesn't clip to rounded corners on Android, so the
    // card shape lives on this wrapper.
    <View
      style={{
        borderRadius: 22,
        overflow: "hidden",
        backgroundColor: colors.card,
        borderWidth: 1,
        borderColor: withAlpha(accent, 0.28),
      }}
    >
      <NativeAdView nativeAd={ad} style={{ flexDirection: "row", padding: 10 }}>
        {/* Media */}
        <View
          style={{
            width: MEDIA_SIZE,
            height: MEDIA_SIZE,
            borderRadius: 16,
            overflow: "hidden",
            backgroundColor: colors.elevated,
          }}
        >
          <NativeMediaView
            resizeMode="cover"
            style={{ width: "100%", height: "100%" }}
          />
          <View
            className="absolute left-2 top-2 rounded-full px-2 py-1"
            style={{ backgroundColor: colors.neon.gold }}
          >
            <Text className="text-[9px] font-extrabold tracking-[1px] text-background">
              AD
            </Text>
          </View>
        </View>

        {/* Details */}
        <View className="ml-3 flex-1 justify-between">
          <View>
            <View className="flex-row items-center">
              {ad.icon && (
                <NativeAsset assetType={NativeAssetType.ICON}>
                  <Image
                    source={{ uri: ad.icon.url }}
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 6,
                      marginRight: 6,
                    }}
                  />
                </NativeAsset>
              )}
              <View className="flex-1">
                <NativeAsset assetType={NativeAssetType.HEADLINE}>
                  <Text
                    className="text-[13px] font-bold text-foreground"
                    numberOfLines={1}
                  >
                    {ad.headline}
                  </Text>
                </NativeAsset>
              </View>
            </View>

            {ad.advertiser && (
              <NativeAsset assetType={NativeAssetType.ADVERTISER}>
                <Text
                  className="mt-0.5 text-[10px] text-muted"
                  numberOfLines={1}
                >
                  {ad.advertiser}
                </Text>
              </NativeAsset>
            )}

            {ad.body ? (
              <NativeAsset assetType={NativeAssetType.BODY}>
                <Text
                  className="mt-1 text-[11px] leading-[15px] text-muted"
                  numberOfLines={2}
                >
                  {ad.body}
                </Text>
              </NativeAsset>
            ) : null}
          </View>

          {ad.callToAction ? (
            <NativeAsset assetType={NativeAssetType.CALL_TO_ACTION}>
              <Text
                className="mt-2 overflow-hidden rounded-xl py-2 text-center text-[11px] font-extrabold text-background"
                style={{ backgroundColor: accent }}
                numberOfLines={1}
              >
                {ad.callToAction}
              </Text>
            </NativeAsset>
          ) : null}
        </View>
      </NativeAdView>
    </View>
  );
}
