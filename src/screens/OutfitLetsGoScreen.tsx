import { useEffect } from "react";
import { Image, Pressable, StatusBar, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { ChevronLeft, Rocket } from "lucide-react-native";
import NotFound from "../components/NotFound";
import HeaderAd from "../components/HeaderAd";
import PromoAdCard from "../components/PromoAdCard";
import { Text } from "../components/Text";
import { wardrobe } from "../data/data";
import { withCustomTab } from "../customTab/customTab";
import { label, useT } from "../i18n/language";
import type { RootStackScreenProps } from "../navigation/types";
import { colors, withAlpha } from "../theme/colors";

type Props = RootStackScreenProps<"OutfitLetsGo">;

const ease = Easing.bezier(0.22, 1, 0.36, 1);

export default function OutfitLetsGoScreen({ navigation, route }: Props) {
  const t = useT();
  const insets = useSafeAreaInsets();
  const outfit = wardrobe.find((item) => item.id === route.params.outfitId);

  const enter = useSharedValue(0);
  const pulse = useSharedValue(0);

  useEffect(() => {
    enter.set(withTiming(1, { duration: 700, easing: ease }));
    pulse.set(
      withRepeat(
        withTiming(1, { duration: 1400, easing: Easing.inOut(Easing.sin) }),
        -1,
        true,
      ),
    );
  }, [enter, pulse]);

  const heroStyle = useAnimatedStyle(() => ({
    opacity: enter.value,
    transform: [{ scale: interpolate(enter.value, [0, 1], [0.85, 1]) }],
  }));

  const copyStyle = useAnimatedStyle(() => ({
    opacity: enter.value,
    transform: [{ translateY: interpolate(enter.value, [0, 1], [24, 0]) }],
  }));

  const buttonStyle = useAnimatedStyle(() => ({
    transform: [{ scale: interpolate(pulse.value, [0, 1], [1, 1.04]) }],
  }));

  if (!outfit) {
    return <NotFound title={t.notFound.outfit} onBack={navigation.goBack} />;
  }

  const { name, image, accent, tag, type, category } = outfit;
  const details =
    type === "Look"
      ? label(t, category)
      : `${label(t, type)} · ${label(t, category)}`;

  const letsGo = () => {
    withCustomTab(() =>
      navigation.navigate("OutfitPreview", { outfitId: outfit.id }),
    );
  };

  return (
    <View className="flex-1 bg-background">
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <LinearGradient
        colors={[withAlpha(accent, 0.4), withAlpha(accent, 0.08), colors.background]}
        locations={[0, 0.5, 1]}
        style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0 }}
      />

      {/* Top bar */}
      <View
        className="flex-row items-center justify-between px-5"
        style={{ paddingTop: insets.top + 8 }}
      >
        <Pressable
          onPress={navigation.goBack}
          accessibilityRole="button"
          accessibilityLabel={t.common.back}
          className="h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/50 active:opacity-70"
        >
          <ChevronLeft size={22} color={colors.foreground} />
        </Pressable>
        <HeaderAd />
      </View>

      {/* Hero */}
      <Animated.View
        style={[
          { flex: 1, alignItems: "center", justifyContent: "center" },
          heroStyle,
        ]}
      >
        <View
          className="absolute h-72 w-72 rounded-full"
          style={{ backgroundColor: withAlpha(accent, 0.18) }}
        />
        <View
          className="absolute h-80 w-80 rounded-full border"
          style={{ borderColor: withAlpha(accent, 0.3) }}
        />
        <Image
          source={image}
          resizeMode="contain"
          style={{ width: 280, height: 300 }}
        />
      </Animated.View>

      <PromoAdCard compact style={{ paddingHorizontal: 24, marginBottom: 12 }} />

      {/* Copy + Let's Go */}
      <Animated.View
        style={[
          { paddingHorizontal: 24, paddingBottom: insets.bottom + 24 },
          copyStyle,
        ]}
      >
        <View
          className="flex-row items-center self-center rounded-full px-3 py-1.5"
          style={{ backgroundColor: withAlpha(accent, 0.16) }}
        >
          <View
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: accent }}
          />
          <Text
            className="ml-1.5 text-[10px] font-extrabold tracking-[1.5px]"
            style={{ color: accent }}
          >
            {label(t, tag)}
          </Text>
        </View>

        <Text
          className="mt-3 text-center text-[30px] font-black text-foreground"
          numberOfLines={1}
          adjustsFontSizeToFit
          minimumFontScale={0.7}
        >
          {name}
        </Text>
        <Text className="mt-0.5 text-center text-xs font-medium text-muted">
          {details}
        </Text>

        <Text className="mt-5 text-center text-lg font-extrabold text-foreground">
          {t.outfitFlow.letsGoTitle}
        </Text>
        <Text className="mt-1 text-center text-sm leading-5 text-muted">
          {t.outfitFlow.letsGoMessage}
        </Text>

        <Animated.View style={[{ marginTop: 24 }, buttonStyle]}>
          <Pressable
            onPress={letsGo}
            accessibilityRole="button"
            accessibilityLabel={t.outfitFlow.letsGo}
            className="h-14 overflow-hidden rounded-2xl active:opacity-90"
            style={{
              shadowColor: accent,
              shadowOpacity: 0.6,
              shadowRadius: 18,
              shadowOffset: { width: 0, height: 4 },
              elevation: 10,
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
              <Rocket size={19} color={colors.background} strokeWidth={2.6} />
              <Text className="ml-2 text-lg font-black text-background">
                {t.outfitFlow.letsGo}
              </Text>
            </LinearGradient>
          </Pressable>
        </Animated.View>
      </Animated.View>
    </View>
  );
}
