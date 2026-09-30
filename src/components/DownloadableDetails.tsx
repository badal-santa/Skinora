import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Image,
  type ImageSourcePropType,
  Linking,
  Pressable,
  Share,
  StatusBar,
  View,
} from "react-native";
import { Text } from "./Text";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import * as MediaLibrary from "expo-media-library";
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { Check, ChevronLeft, Clapperboard, Share2 } from "lucide-react-native";
import { colors, withAlpha } from "../theme/colors";
import { showRewardedAd } from "../ads/rewarded";
import { getAssetFileUri } from "../utils/assetFile";

type Props = {
  name: string;
  image: ImageSourcePropType;
  accent: string;
  onBack: () => void;
};

const fill = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
} as const;

type DownloadState = "idle" | "ad" | "saving" | "saved";

/**
 * Full-screen item view: animated neon hero, share, and the
 * "Watch Ad to Download" rewarded flow. Shared by outfit and emote details.
 */
export default function DownloadableDetails({
  name,
  image,
  accent,
  onBack,
}: Props) {
  const insets = useSafeAreaInsets();
  const [download, setDownload] = useState<DownloadState>("idle");

  const enter = useSharedValue(0);
  const float = useSharedValue(0);
  const spin = useSharedValue(0);

  useEffect(() => {
    enter.set(
      withTiming(1, { duration: 650, easing: Easing.bezier(0.22, 1, 0.36, 1) }),
    );
    float.set(
      withRepeat(
        withTiming(1, { duration: 2400, easing: Easing.inOut(Easing.sin) }),
        -1,
        true,
      ),
    );
    spin.set(
      withRepeat(withTiming(1, { duration: 14000, easing: Easing.linear }), -1),
    );
  }, [enter, float, spin]);

  const itemStyle = useAnimatedStyle(() => ({
    opacity: enter.value,
    transform: [
      {
        translateY:
          interpolate(enter.value, [0, 1], [24, 0]) +
          interpolate(float.value, [0, 1], [-7, 7]),
      },
      { scale: interpolate(enter.value, [0, 1], [0.9, 1]) },
    ],
  }));

  const glowStyle = useAnimatedStyle(() => ({
    opacity: interpolate(float.value, [0, 1], [0.55, 0.95]) * enter.value,
    transform: [{ scale: interpolate(float.value, [0, 1], [0.94, 1.06]) }],
  }));

  // Shadow shrinks as the item floats up.
  const shadowStyle = useAnimatedStyle(() => ({
    opacity: interpolate(float.value, [0, 1], [0.9, 0.5]),
    transform: [{ scaleX: interpolate(float.value, [0, 1], [1, 0.8]) }],
  }));

  const outerRingStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${spin.value * 360}deg` }],
  }));

  const innerRingStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${-spin.value * 360 * 1.5}deg` }],
  }));

  const share = () => {
    Share.share({ message: `Check out ${name} on Skinora ✨` }).catch(() => {});
  };

  const saveToPhotos = async () => {
    if (download === "saving") return;
    setDownload("saving");
    try {
      const { granted, canAskAgain } =
        await MediaLibrary.requestPermissionsAsync(true, ["photo"]);
      if (!granted) {
        setDownload("idle");
        Alert.alert(
          "Photos access needed",
          "Allow Skinora to save images to your photo library.",
          canAskAgain
            ? [{ text: "OK" }]
            : [
                { text: "Cancel", style: "cancel" },
                {
                  text: "Open Settings",
                  onPress: () => Linking.openSettings(),
                },
              ],
        );
        return;
      }

      // Bundled images need a real file before they can be saved.
      const fileUri = await getAssetFileUri(image as number);
      await MediaLibrary.Asset.create(fileUri);
      setDownload("saved");
    } catch (error) {
      console.warn("[download] save failed:", error);
      setDownload("idle");
      Alert.alert(
        "Download failed",
        "We couldn't save this image. Please try again.",
      );
    }
  };

  /** Rewarded flow: the image saves only after the ad is watched to the end. */
  const watchAdAndDownload = async () => {
    // Already rewarded for this item — save again without another ad.
    if (download === "saved") {
      saveToPhotos();
      return;
    }

    setDownload("ad");
    const result = await showRewardedAd();

    if (result === "dismissed") {
      setDownload("idle");
      Alert.alert(
        "Ad not finished",
        "Watch the full ad to download this image.",
      );
      return;
    }

    // "earned", or "unavailable" (no ad to show) — never block the download.
    setDownload("idle");
    saveToPhotos();
  };

  return (
    <View className="flex-1 bg-background">
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      {/* Hero stage */}
      <View style={{ flex: 1, paddingBottom: 90 + insets.bottom }}>
        <LinearGradient
          colors={[
            withAlpha(accent, 0.34),
            withAlpha(accent, 0.1),
            colors.background,
          ]}
          locations={[0, 0.55, 1]}
          style={fill}
        />

        <View
          className="flex-1 items-center justify-center"
          style={{ paddingTop: insets.top + 40 }}
        >
          {/* Spotlight */}
          <Animated.View
            style={[
              {
                position: "absolute",
                height: 260,
                width: 260,
                borderRadius: 130,
                backgroundColor: withAlpha(accent, 0.2),
              },
              glowStyle,
            ]}
          />

          {/* Orbit rings */}
          <Animated.View
            style={[
              {
                position: "absolute",
                height: 300,
                width: 300,
                borderRadius: 150,
                borderWidth: 1.5,
                borderColor: withAlpha(accent, 0.12),
                borderTopColor: withAlpha(accent, 0.8),
              },
              outerRingStyle,
            ]}
          />
          <Animated.View
            style={[
              {
                position: "absolute",
                height: 236,
                width: 236,
                borderRadius: 118,
                borderWidth: 1,
                borderColor: "transparent",
                borderBottomColor: withAlpha(accent, 0.6),
                borderLeftColor: withAlpha(accent, 0.25),
              },
              innerRingStyle,
            ]}
          />
          <Animated.View
            style={[
              {
                position: "absolute",
                bottom: 64,
                height: 14,
                width: 150,
                borderRadius: 999,
                backgroundColor: "rgba(0,0,0,0.6)",
              },
              shadowStyle,
            ]}
          />

          {/* Item */}
          <Animated.View
            style={[{ height: 290, width: 260, marginBottom: 40 }, itemStyle]}
          >
            <Image
              source={image}
              resizeMode="contain"
              style={{ width: "100%", height: "100%" }}
            />
          </Animated.View>
        </View>
      </View>

      {/* Top bar */}
      <View
        className="absolute left-0 right-0 flex-row items-center justify-between px-5"
        style={{ top: insets.top + 8 }}
      >
        <Pressable
          onPress={onBack}
          accessibilityRole="button"
          accessibilityLabel="Go back"
          className="h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/50"
        >
          <ChevronLeft size={22} color={colors.foreground} />
        </Pressable>

        <Pressable
          onPress={share}
          accessibilityRole="button"
          accessibilityLabel="Share"
          className="h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/50"
        >
          <Share2 size={18} color={colors.foreground} />
        </Pressable>
      </View>

      {/* Action bar */}
      <View
        className="absolute bottom-0 left-0 right-0 flex-row gap-3 border-t border-border bg-background/95 px-5 pt-4"
        style={{ paddingBottom: insets.bottom + 12 }}
      >
        <Pressable
          onPress={watchAdAndDownload}
          disabled={download === "ad" || download === "saving"}
          accessibilityRole="button"
          accessibilityLabel="Watch an ad to download this image to photos"
          accessibilityState={{
            busy: download === "ad" || download === "saving",
          }}
          className="h-14 flex-1 overflow-hidden rounded-2xl active:opacity-90"
          style={{
            shadowColor: accent,
            shadowOpacity: 0.55,
            shadowRadius: 16,
            shadowOffset: { width: 0, height: 4 },
            elevation: 8,
          }}
        >
          <LinearGradient
            colors={[accent, withAlpha(accent, 0.75)]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {download === "ad" || download === "saving" ? (
              <ActivityIndicator color={colors.background} />
            ) : download === "saved" ? (
              <Check size={18} color={colors.background} strokeWidth={3} />
            ) : (
              <Clapperboard
                size={18}
                color={colors.background}
                strokeWidth={2.6}
              />
            )}
            <Text className="ml-2 text-base font-extrabold text-background">
              {download === "ad"
                ? "Loading ad…"
                : download === "saving"
                  ? "Saving…"
                  : download === "saved"
                    ? "Saved to Photos"
                    : "Watch Ad to Download"}
            </Text>
          </LinearGradient>
        </Pressable>
      </View>
    </View>
  );
}
