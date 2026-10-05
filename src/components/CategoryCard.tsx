import {
  Image,
  Pressable,
  View,
  type GestureResponderEvent,
  type ImageSourcePropType,
  type LayoutChangeEvent,
} from "react-native";
import { Text } from "./Text";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { ArrowUpRight } from "lucide-react-native";
import type { ParamlessRoute } from "../navigation/types";
import { colors, withAlpha } from "../theme/colors";

export type Category = {
  id: string;
  title: string;
  subtitle: string;
  image: ImageSourcePropType;
  accent: string;
  /** Set when `image` is a transparent cut-out — the character pops out of the card. */
  popOut?: boolean;
  /**
   * Shrinks a pop-out image (0–1, default 1) while keeping it standing on the
   * card floor — for wide or edge-to-edge artwork that would spill over.
   */
  imageScale?: number;
  /** Screen to open when tapped. */
  route: ParamlessRoute;
};

type Props = {
  category: Category;
  onPress?: () => void;
  /** Span the whole row instead of half (e.g. a lone last card). */
  fullWidth?: boolean;
};

const FACE_HEIGHT = 186;
const POP_HEIGHT = 40; // headroom above the card for pop-out characters
const DEPTH = 7;
const RADIUS = 24;
const MAX_TILT = 10;
const spring = { damping: 15, stiffness: 220, mass: 0.6 };

const fill = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
} as const;
const cover = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
} as const;

export default function CategoryCard({
  category,
  onPress,
  fullWidth = false,
}: Props) {
  const {
    title,
    subtitle,
    image,
    accent,
    popOut = false,
    imageScale = 1,
  } = category;
  const artHeight = POP_HEIGHT + FACE_HEIGHT - 14;
  // Shrink from the top and both sides, so the art keeps its footing.
  const artInset = `${(1 - imageScale) * 50 - 6}%` as const;

  const width = useSharedValue(0);
  const press = useSharedValue(0);
  const tiltX = useSharedValue(0);
  const tiltY = useSharedValue(0);

  const onLayout = (e: LayoutChangeEvent) => {
    width.value = e.nativeEvent.layout.width;
  };

  const handlePressIn = (e: GestureResponderEvent) => {
    const { locationX, locationY } = e.nativeEvent;
    const w = width.value || 1;
    const x = Math.min(Math.max(locationX / w, 0), 1) - 0.5;
    const y =
      Math.min(Math.max((locationY - POP_HEIGHT) / FACE_HEIGHT, 0), 1) - 0.5;
    tiltY.value = withSpring(x * MAX_TILT * 2, spring);
    tiltX.value = withSpring(-y * MAX_TILT * 2, spring);
    press.value = withSpring(1, spring);
  };

  const handlePressOut = () => {
    tiltX.value = withSpring(0, spring);
    tiltY.value = withSpring(0, spring);
    press.value = withSpring(0, spring);
  };

  const cardStyle = useAnimatedStyle(() => ({
    transform: [
      { perspective: 700 },
      { rotateX: `${tiltX.value}deg` },
      { rotateY: `${tiltY.value}deg` },
      { scale: interpolate(press.value, [0, 1], [1, 0.97]) },
    ],
  }));

  // The face sinks into the extruded body when pressed.
  const faceStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: interpolate(press.value, [0, 1], [0, DEPTH - 2]) },
    ],
  }));

  const bodyStyle = useAnimatedStyle(() => ({
    shadowOpacity: interpolate(press.value, [0, 1], [0.55, 0.25]),
  }));

  // The character rises out of the card and drifts against the tilt (parallax).
  const characterStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: tiltY.value * 0.8 },
      { translateY: interpolate(press.value, [0, 1], [0, -6]) },
      { scale: interpolate(press.value, [0, 1], [1, 1.06]) },
    ],
  }));

  const titleBlock = (
    <View className="flex-1 pr-2">
      <Text
        className="text-[13px] font-black tracking-[1px]"
        style={{ color: accent }}
        numberOfLines={1}
        adjustsFontSizeToFit
        minimumFontScale={0.75}
      >
        {title}
      </Text>
      <Text className="mt-0.5 text-[10px] text-foreground/70" numberOfLines={1}>
        {subtitle}
      </Text>
    </View>
  );

  const arrow = (
    <View
      className="h-8 w-8 items-center justify-center rounded-full"
      style={{
        backgroundColor: accent,
        shadowColor: accent,
        shadowOpacity: 0.9,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        elevation: 6,
      }}
    >
      <ArrowUpRight size={16} color={colors.background} strokeWidth={2.6} />
    </View>
  );

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onLayout={onLayout}
      accessibilityRole="button"
      accessibilityLabel={`${title}. ${subtitle}`}
      className={fullWidth ? "w-full" : "w-[48.2%]"}
    >
      <Animated.View
        style={[{ height: POP_HEIGHT + FACE_HEIGHT + DEPTH }, cardStyle]}
      >
        {/* Extruded body / card edge */}
        <Animated.View
          style={[
            {
              position: "absolute",
              top: POP_HEIGHT + DEPTH,
              left: 0,
              right: 0,
              height: FACE_HEIGHT,
              borderRadius: RADIUS,
              backgroundColor: withAlpha(accent, 0.25),
              borderWidth: 1,
              borderColor: withAlpha(accent, 0.5),
              shadowColor: accent,
              shadowRadius: 18,
              shadowOffset: { width: 0, height: 8 },
              elevation: 12,
            },
            bodyStyle,
          ]}
        />

        {/* Card face */}
        <Animated.View
          style={[
            {
              marginTop: POP_HEIGHT,
              height: FACE_HEIGHT,
              borderRadius: RADIUS,
              overflow: "hidden",
              backgroundColor: colors.card,
              borderWidth: 1,
              borderColor: withAlpha(accent, 0.35),
            },
            faceStyle,
          ]}
        >
          {popOut ? (
            <>
              {/* Neon backdrop */}
              <LinearGradient
                colors={[
                  withAlpha(accent, 0.22),
                  withAlpha(accent, 0.06),
                  colors.card,
                ]}
                locations={[0, 0.45, 1]}
                style={fill}
              />
              {/* Portal glow behind the character */}
              <View
                className="absolute self-center rounded-full"
                style={{
                  top: 30,
                  height: 130,
                  width: 130,
                  borderRadius: 65,
                  backgroundColor: withAlpha(accent, 0.2),
                }}
              />
              {/* Floor shadow under the feet */}
              <View
                className="absolute self-center rounded-full"
                style={{
                  bottom: 58,
                  height: 14,
                  width: 96,
                  borderRadius: 48,
                  backgroundColor: "rgba(0,0,0,0.55)",
                }}
              />
            </>
          ) : (
            <Image source={image} resizeMode="cover" style={cover} />
          )}

          {/* Glossy top light */}
          <LinearGradient
            colors={[
              "rgba(255,255,255,0.22)",
              "rgba(255,255,255,0.04)",
              "transparent",
            ]}
            locations={[0, 0.25, 0.5]}
            style={fill}
          />

          {!popOut && (
            <>
              {/* Legibility fade */}
              <LinearGradient
                colors={["transparent", "rgba(0,0,0,0.7)", "rgba(0,0,0,0.95)"]}
                locations={[0.35, 0.72, 1]}
                style={fill}
              />
              <View className="absolute bottom-0 left-0 right-0 flex-row items-end justify-between p-3.5">
                {titleBlock}
                {arrow}
              </View>
            </>
          )}

          {/* Top edge highlight — sells the bevel */}
          {/* <View className="absolute left-4 right-4 top-0 h-px bg-white/40" /> */}
        </Animated.View>

        {popOut && (
          <>
            {/* Character — drawn above the face so it breaks out of the top edge */}
            <Animated.View
              pointerEvents="none"
              style={[
                {
                  position: "absolute",
                  top: artHeight * (1 - imageScale),
                  left: artInset,
                  right: artInset,
                  height: artHeight * imageScale,
                },
                faceStyle,
              ]}
            >
              <Animated.View style={[{ flex: 1 }, characterStyle]}>
                {/* Drop shadow: a blurred silhouette that follows the cut-out */}
                <Image
                  source={image}
                  resizeMode="contain"
                  tintColor="#000"
                  blurRadius={8}
                  style={[cover, { top: 10, opacity: 0.55 }]}
                />
                <Image source={image} resizeMode="contain" style={cover} />
              </Animated.View>
            </Animated.View>

            {/* Title panel in front of the character's legs */}
            <Animated.View
              pointerEvents="none"
              style={[
                {
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: POP_HEIGHT + FACE_HEIGHT - 84,
                  height: 84,
                  borderBottomLeftRadius: RADIUS,
                  borderBottomRightRadius: RADIUS,
                  overflow: "hidden",
                },
                faceStyle,
              ]}
            >
              <LinearGradient
                colors={["transparent", "rgba(0,0,0,0.78)", "rgba(0,0,0,0.95)"]}
                locations={[0, 0.5, 1]}
                style={fill}
              />
              <View className="absolute bottom-0 left-0 right-0 flex-row items-end justify-between p-3.5">
                {titleBlock}
                {arrow}
              </View>
            </Animated.View>
          </>
        )}
      </Animated.View>
    </Pressable>
  );
}
