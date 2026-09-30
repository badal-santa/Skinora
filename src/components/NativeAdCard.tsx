import { Image, View, type StyleProp, type ViewStyle } from "react-native";
import { Text } from "./Text";
import { LinearGradient } from "expo-linear-gradient";
import { Ads } from "../ads/ads";
import type { LoadedNativeAd } from "../ads/native";
import { colors, withAlpha } from "../theme/colors";

type Props = {
  ad: LoadedNativeAd;
  /** Card height, to line up with neighbouring cards in the grid. */
  height?: number;
  style?: StyleProp<ViewStyle>;
};

/**
 * Native advanced ad styled as a grid card. Keeps the required "Ad" label,
 * headline and call to action; AdChoices is added by the SDK.
 */
export default function NativeAdCard({ ad, height = 262, style }: Props) {
  if (!Ads) return null;
  const { NativeAdView, NativeAsset, NativeAssetType, NativeMediaView } = Ads;
  const accent = colors.primary;

  return (
    // The native ad view doesn't clip to rounded corners on Android, so the
    // card shape lives on this wrapper.
    <View
      style={[
        {
          width: "48.2%",
          height,
          borderRadius: 24,
          overflow: "hidden",
          backgroundColor: colors.card,
          borderWidth: 1,
          borderColor: withAlpha(accent, 0.28),
        },
        style,
      ]}
    >
      <NativeAdView nativeAd={ad} style={{ flex: 1 }}>
        {/* Media */}
        <View style={{ height: 132 }}>
          <NativeMediaView
            resizeMode="cover"
            style={{ width: "100%", height: "100%" }}
          />
          <LinearGradient
            colors={["transparent", colors.card]}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: 36,
            }}
            pointerEvents="none"
          />
          <View
            className="absolute left-2.5 top-2.5 rounded-full px-2 py-1"
            style={{ backgroundColor: colors.neon.gold }}
          >
            <Text className="text-[9px] font-extrabold tracking-[1px] text-background">
              AD
            </Text>
          </View>
        </View>

        {/* Details */}
        <View className="flex-1 justify-between px-3 pb-3 pt-2">
          <View>
            <View className="flex-row items-center">
              {ad.icon && (
                <NativeAsset assetType={NativeAssetType.ICON}>
                  <Image
                    source={{ uri: ad.icon.url }}
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: 7,
                      marginRight: 8,
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
                {ad.advertiser && (
                  <NativeAsset assetType={NativeAssetType.ADVERTISER}>
                    <Text className="text-[10px] text-muted" numberOfLines={1}>
                      {ad.advertiser}
                    </Text>
                  </NativeAsset>
                )}
              </View>
            </View>

            {ad.body ? (
              <NativeAsset assetType={NativeAssetType.BODY}>
                <Text
                  className="mt-1.5 text-[10px] leading-[14px] text-muted"
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
                className="overflow-hidden rounded-xl py-2 text-center text-[11px] font-extrabold text-background"
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
