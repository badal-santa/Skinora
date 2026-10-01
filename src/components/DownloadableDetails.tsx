import { useEffect, useState, type ReactNode } from "react";
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
import PromoAdCard from "./PromoAdCard";
import HeaderAd from "./HeaderAd";
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
import {
  Check,
  ChevronLeft,
  Download,
  Share2,
  type LucideIcon,
} from "lucide-react-native";
import { colors, withAlpha } from "../theme/colors";
import { APP_NAME } from "../config/app";
import { useT } from "../i18n/language";
import { getAssetFileUri } from "../utils/assetFile";

type Props = {
  name: string;
  image: ImageSourcePropType;
  accent: string;
  onBack: () => void;
  /**
   * Main button, e.g. "Get ID". When set, Download shrinks to an icon
   * button beside it.
   */
  primaryAction?: {
    label: string;
    icon: LucideIcon;
    onPress: () => void;
  };
};

const fill = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
} as const;

type DownloadState = "idle" | "saving" | "saved";

/**
 * Full-screen item view: animated neon hero, share, and download to photos.
 * Shared by outfit, character, emote and accessory details.
 */
export default function DownloadableDetails({
  name,
  image,
  accent,
  onBack,
  primaryAction,
}: Props) {
  const insets = useSafeAreaInsets();
  const t = useT();
  const [download, setDownload] = useState<DownloadState>("idle");
  // The bottom bar grows when an ad shows; keep the hero clear of it.
  const [barHeight, setBarHeight] = useState(90 + insets.bottom);

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
    Share.share({ message: t.details.shareMessage(name, APP_NAME) }).catch(
      () => {},
    );
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
          t.details.photosTitle,
          t.details.photosMessage(APP_NAME),
          canAskAgain
            ? [{ text: t.common.ok }]
            : [
                { text: t.common.cancel, style: "cancel" },
                {
                  text: t.common.openSettings,
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
      Alert.alert(t.details.failedTitle, t.details.failedMessage);
    }
  };

  const downloadIcon = (color: string) =>
    download === "saving" ? (
      <ActivityIndicator color={color} />
    ) : download === "saved" ? (
      <Check size={18} color={color} strokeWidth={3} />
    ) : (
      <Download size={18} color={color} strokeWidth={2.6} />
    );

  const downloadLabel =
    download === "saving"
      ? t.details.saving
      : download === "saved"
        ? t.details.saved
        : t.details.download;

  return (
    <View className="flex-1 bg-background">
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      {/* Hero stage */}
      <View style={{ flex: 1, paddingBottom: barHeight }}>
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
          accessibilityLabel={t.common.back}
          className="h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/50"
        >
          <ChevronLeft size={22} color={colors.foreground} />
        </Pressable>

        <View className="flex-row items-center gap-3">
          <HeaderAd />
          <Pressable
            onPress={share}
            accessibilityRole="button"
            accessibilityLabel={t.common.share}
            className="h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/50"
          >
            <Share2 size={18} color={colors.foreground} />
          </Pressable>
        </View>
      </View>

      {/* Action bar */}
      <View
        className="absolute bottom-0 left-0 right-0 border-t border-border bg-background/95 px-5 pt-4"
        style={{ paddingBottom: insets.bottom + 12 }}
        onLayout={(e) => setBarHeight(e.nativeEvent.layout.height)}
      >
        <PromoAdCard compact style={{ marginBottom: 12 }} />
        <View className="flex-row gap-3">
        {primaryAction ? (
          <>
            <Pressable
              onPress={saveToPhotos}
              disabled={download === "saving"}
              accessibilityRole="button"
              accessibilityLabel={t.details.downloadLabel}
              accessibilityState={{ busy: download === "saving" }}
              className="h-14 w-14 items-center justify-center rounded-2xl border active:opacity-70"
              style={{
                borderColor: withAlpha(accent, 0.5),
                backgroundColor: withAlpha(accent, 0.1),
              }}
            >
              {downloadIcon(accent)}
            </Pressable>
            <GradientButton
              accent={accent}
              label={primaryAction.label}
              accessibilityLabel={primaryAction.label}
              onPress={primaryAction.onPress}
              icon={
                <primaryAction.icon
                  size={18}
                  color={colors.background}
                  strokeWidth={2.6}
                />
              }
            />
          </>
        ) : (
          <GradientButton
            accent={accent}
            label={downloadLabel}
            accessibilityLabel={t.details.downloadLabel}
            onPress={saveToPhotos}
            busy={download === "saving"}
            icon={downloadIcon(colors.background)}
          />
        )}
        </View>
      </View>
    </View>
  );
}

type GradientButtonProps = {
  accent: string;
  label: string;
  accessibilityLabel: string;
  icon: ReactNode;
  onPress: () => void;
  busy?: boolean;
};

function GradientButton({
  accent,
  label,
  accessibilityLabel,
  icon,
  onPress,
  busy = false,
}: GradientButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={busy}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityState={{ busy }}
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
        {icon}
        <Text className="ml-2 text-base font-extrabold text-background">
          {label}
        </Text>
      </LinearGradient>
    </Pressable>
  );
}
