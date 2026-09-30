import { useEffect, useState } from "react";
import { StatusBar, View } from "react-native";
import { Text } from "../components/Text";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  Easing,
  interpolate,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { scheduleOnRN } from "react-native-worklets";
import { Sparkles } from "lucide-react-native";
import type { RootStackScreenProps } from "../navigation/types";
import { colors, withAlpha } from "../theme/colors";
import { loadLanguage, useT } from "../i18n/language";

type Props = RootStackScreenProps<"Splash">;

const LOAD_DURATION = 3000;
const EXIT_DURATION = 450;
const ease = Easing.bezier(0.22, 1, 0.36, 1);

const neonGlow = (color: string, radius = 18) => ({
  textShadowColor: color,
  textShadowRadius: radius,
  textShadowOffset: { width: 0, height: 0 },
});

export default function SplashScreen({ navigation }: Props) {
  const t = useT();
  const [percentage, setPercentage] = useState(0);

  const logo = useSharedValue(0);
  const spin = useSharedValue(0);
  const pulse = useSharedValue(0);
  const flicker = useSharedValue(0);
  const tagline = useSharedValue(0);
  const footer = useSharedValue(0);
  const progress = useSharedValue(0);
  const blink = useSharedValue(1);
  const exit = useSharedValue(1);

  useEffect(() => {
    loadLanguage();
    logo.value = withSpring(1, { damping: 13, stiffness: 110 });
    spin.value = withRepeat(
      withTiming(1, { duration: 2600, easing: Easing.linear }),
      -1,
    );
    pulse.value = withRepeat(
      withTiming(1, { duration: 1600, easing: Easing.inOut(Easing.sin) }),
      -1,
      true,
    );
    // Neon-sign "power on" flicker
    flicker.value = withDelay(
      450,
      withSequence(
        withTiming(1, { duration: 70 }),
        withTiming(0.15, { duration: 70 }),
        withTiming(1, { duration: 70 }),
        withTiming(0.4, { duration: 110 }),
        withTiming(1, { duration: 160 }),
      ),
    );
    tagline.value = withDelay(
      1000,
      withTiming(1, { duration: 700, easing: ease }),
    );
    footer.value = withDelay(
      700,
      withTiming(1, { duration: 600, easing: ease }),
    );
    progress.value = withDelay(
      500,
      withTiming(1, {
        duration: LOAD_DURATION - 500,
        easing: Easing.inOut(Easing.cubic),
      }),
    );
    blink.value = withRepeat(
      withSequence(
        withTiming(0.2, { duration: 500 }),
        withTiming(1, { duration: 500 }),
      ),
      -1,
    );

    const exitTimer = setTimeout(() => {
      exit.value = withTiming(0, { duration: EXIT_DURATION, easing: ease });
    }, LOAD_DURATION);
    // First launch (no saved language) asks for one before Home.
    const navTimer = setTimeout(() => {
      loadLanguage().then((code) =>
        navigation.replace(code ? "Home" : "Language"),
      );
    }, LOAD_DURATION + EXIT_DURATION);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(navTimer);
    };
  }, [
    navigation,
    logo,
    spin,
    pulse,
    flicker,
    tagline,
    footer,
    progress,
    blink,
    exit,
  ]);

  useAnimatedReaction(
    () => Math.round(progress.value * 100),
    (current, previous) => {
      if (current !== previous) {
        scheduleOnRN(setPercentage, current);
      }
    },
  );

  const screenStyle = useAnimatedStyle(() => ({
    opacity: exit.value,
    transform: [{ scale: interpolate(exit.value, [0, 1], [1.08, 1]) }],
  }));

  const logoStyle = useAnimatedStyle(() => ({
    opacity: logo.value,
    transform: [{ scale: interpolate(logo.value, [0, 1], [0.5, 1]) }],
  }));

  const outerRingStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${spin.value * 360}deg` }],
  }));

  const innerRingStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${-spin.value * 540}deg` }],
  }));

  const haloStyle = useAnimatedStyle(() => ({
    opacity: interpolate(pulse.value, [0, 1], [0.25, 0.7]),
    transform: [{ scale: interpolate(pulse.value, [0, 1], [0.92, 1.12]) }],
  }));

  const sparkleStyle = useAnimatedStyle(() => ({
    opacity: interpolate(pulse.value, [0, 1], [0.35, 1]),
    transform: [{ rotate: `${pulse.value * 45}deg` }],
  }));

  const wordmarkStyle = useAnimatedStyle(() => ({
    opacity: flicker.value,
  }));

  const taglineStyle = useAnimatedStyle(() => ({
    opacity: tagline.value,
    transform: [{ translateY: interpolate(tagline.value, [0, 1], [10, 0]) }],
  }));

  const footerStyle = useAnimatedStyle(() => ({
    opacity: footer.value,
  }));

  const progressStyle = useAnimatedStyle(() => ({
    width: `${progress.value * 100}%`,
  }));

  const blinkStyle = useAnimatedStyle(() => ({
    opacity: blink.value,
  }));

  return (
    <View className="flex-1 bg-background">
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      <Animated.View style={[{ flex: 1 }, screenStyle]}>
        {/* Ambient neon haze */}
        <View className="absolute -left-32 -top-24 h-96 w-96 rounded-full bg-primary/[0.07]" />
        <View className="absolute -right-36 bottom-24 h-96 w-96 rounded-full bg-secondary/[0.06]" />
        <LinearGradient
          colors={["transparent", withAlpha(colors.primary, 0.08)]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 280,
          }}
        />

        {/* Brand */}
        <View className="flex-1 items-center justify-center">
          <Animated.View
            style={[
              {
                height: 220,
                width: 220,
                alignItems: "center",
                justifyContent: "center",
              },
              logoStyle,
            ]}
          >
            {/* Pulsing halo */}
            <Animated.View
              style={[
                {
                  position: "absolute",
                  height: 190,
                  width: 190,
                  borderRadius: 95,
                  backgroundColor: withAlpha(colors.primary, 0.12),
                },
                haloStyle,
              ]}
            />

            {/* Scanning rings */}
            <Animated.View
              style={[
                {
                  position: "absolute",
                  height: 200,
                  width: 200,
                  borderRadius: 100,
                  borderWidth: 2,
                  borderColor: "transparent",
                  borderTopColor: colors.primary,
                  borderRightColor: withAlpha(colors.primary, 0.33),
                },
                outerRingStyle,
              ]}
            />
            <Animated.View
              style={[
                {
                  position: "absolute",
                  height: 164,
                  width: 164,
                  borderRadius: 82,
                  borderWidth: 1.5,
                  borderColor: "transparent",
                  borderBottomColor: colors.secondary,
                  borderLeftColor: withAlpha(colors.secondary, 0.25),
                },
                innerRingStyle,
              ]}
            />

            {/* Core badge */}
            <View
              className="h-28 w-28 items-center justify-center rounded-[34px] border border-primary/50 bg-card"
              style={{
                shadowColor: colors.primary,
                shadowOpacity: 0.8,
                shadowRadius: 28,
                shadowOffset: { width: 0, height: 0 },
                elevation: 20,
              }}
            >
              <Text
                className="text-[64px] font-black text-primary"
                style={neonGlow(colors.primary, 22)}
              >
                S
              </Text>

              <Animated.View
                style={[
                  { position: "absolute", right: 12, top: 12 },
                  sparkleStyle,
                ]}
              >
                <Sparkles size={16} color={colors.secondary} />
              </Animated.View>
            </View>
          </Animated.View>

          {/* Wordmark */}
          <Animated.View style={[{ marginTop: 28 }, wordmarkStyle]}>
            <Text className="text-[44px] font-black tracking-[6px] text-foreground">
              SKIN
              <Text className="text-primary" style={neonGlow(colors.primary)}>
                ORA
              </Text>
            </Text>
          </Animated.View>

          <Animated.View
            style={[
              {
                marginTop: 14,
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
              },
              taglineStyle,
            ]}
          >
            <View className="h-px w-8 bg-primary/60" />
            <Text className="text-[10px] font-semibold tracking-[4px] text-muted">
              {t.splash.tagline}
            </Text>
            <View className="h-px w-8 bg-secondary/60" />
          </Animated.View>
        </View>

        {/* Loader */}
        <Animated.View
          style={[{ marginBottom: 56, paddingHorizontal: 40 }, footerStyle]}
        >
          <View className="mb-3 flex-row items-center justify-between">
            <View className="flex-row items-center gap-2">
              <Animated.View
                style={[
                  {
                    height: 6,
                    width: 6,
                    borderRadius: 3,
                    backgroundColor: colors.primary,
                  },
                  blinkStyle,
                ]}
              />
              <Text className="text-[10px] font-semibold tracking-[3px] text-muted">
                {t.splash.loading}
              </Text>
            </View>
            <Text
              className="text-xs font-bold text-primary"
              style={[
                neonGlow(colors.primary, 8),
                { fontVariant: ["tabular-nums"] },
              ]}
            >
              {percentage}%
            </Text>
          </View>

          <View className="h-[3px] overflow-hidden rounded-full bg-elevated">
            <Animated.View style={[{ height: "100%" }, progressStyle]}>
              <LinearGradient
                colors={[colors.primary, colors.secondary]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ flex: 1, borderRadius: 999 }}
              />
            </Animated.View>
          </View>

          <Text className="mt-5 text-center text-[9px] font-medium tracking-[3px] text-subtle">
            {t.splash.footer}
          </Text>
        </Animated.View>
      </Animated.View>
    </View>
  );
}
