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
import { colors, withAlpha } from "../theme/colors";
import { label, useT } from "../i18n/language";

export type Character = {
  id: string;
  name: string;
  category: string;
  tag: string;
  /** Transparent full-body cut-out. */
  image: ImageSourcePropType;
  accent: string;
  description: string;
};

type Props = {
  character: Character;
  onPress?: () => void;
};

const CARD_HEIGHT = 280;
const BORDER = 1.5;
const RADIUS = 26;
const MAX_TILT = 8;
/** Height reserved at the bottom for the name. */
const NAME_AREA = 52;

/** Card dimensions, so neighbours in the grid (e.g. ads) can line up. */
export const CHARACTER_FACE_TOP = 0;
export const CHARACTER_FACE_HEIGHT = CARD_HEIGHT;

const spring = { damping: 15, stiffness: 220, mass: 0.6 };
const fill = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
} as const;

/** Stacked translucent rings read as a soft radial glow (RN has no radial gradient). */
const GLOW_RINGS = [
  { size: 184, alpha: 0.035 },
  { size: 160, alpha: 0.04 },
  { size: 138, alpha: 0.045 },
  { size: 116, alpha: 0.05 },
  { size: 96, alpha: 0.055 },
  { size: 76, alpha: 0.06 },
];

export default function CharacterCard({ character, onPress }: Props) {
  const { name, category, image, accent } = character;
  const t = useT();

  const width = useSharedValue(0);
  const press = useSharedValue(0);
  const tiltX = useSharedValue(0);
  const tiltY = useSharedValue(0);

  const onLayout = (e: LayoutChangeEvent) => {
    width.set(e.nativeEvent.layout.width);
  };

  // Tilt toward the finger, like handling a real card.
  const handlePressIn = (e: GestureResponderEvent) => {
    const { locationX, locationY } = e.nativeEvent;
    const x = Math.min(Math.max(locationX / (width.get() || 1), 0), 1) - 0.5;
    const y = Math.min(Math.max(locationY / CARD_HEIGHT, 0), 1) - 0.5;
    tiltY.set(withSpring(x * MAX_TILT * 2, spring));
    tiltX.set(withSpring(-y * MAX_TILT * 2, spring));
    press.set(withSpring(1, spring));
  };

  const handlePressOut = () => {
    tiltX.set(withSpring(0, spring));
    tiltY.set(withSpring(0, spring));
    press.set(withSpring(0, spring));
  };

  const cardStyle = useAnimatedStyle(() => ({
    transform: [
      { perspective: 700 },
      { rotateX: `${tiltX.value}deg` },
      { rotateY: `${tiltY.value}deg` },
      { scale: interpolate(press.value, [0, 1], [1, 0.97]) },
    ],
  }));

  // The character drifts against the tilt for a touch of depth.
  const artStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: tiltY.value * 0.6 },
      { scale: interpolate(press.value, [0, 1], [1, 1.04]) },
    ],
  }));

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onLayout={onLayout}
      accessibilityRole="button"
      accessibilityLabel={`${name}, ${label(t, category)}`}
      className="w-[48.2%]"
    >
      <Animated.View style={[{ height: CARD_HEIGHT }, cardStyle]}>
        {/* Hairline border: bright at the top, fading down the sides */}
        <LinearGradient
          colors={[
            withAlpha(accent, 0.9),
            withAlpha(accent, 0.12),
            withAlpha(accent, 0.35),
          ]}
          locations={[0, 0.55, 1]}
          style={{ flex: 1, borderRadius: RADIUS, padding: BORDER }}
        >
          <View
            className="flex-1 overflow-hidden"
            style={{
              borderRadius: RADIUS - BORDER,
              backgroundColor: colors.surface,
            }}
          >
            {/* Colour wash from the top */}
            <LinearGradient
              colors={[
                withAlpha(accent, 0.3),
                withAlpha(accent, 0.06),
                "transparent",
              ]}
              locations={[0, 0.55, 1]}
              style={fill}
            />

            {/* Soft glow behind the character */}
            {GLOW_RINGS.map(({ size, alpha }) => (
              <View
                key={size}
                className="absolute self-center"
                style={{
                  top: 92 - size / 2,
                  width: size,
                  height: size,
                  borderRadius: size / 2,
                  backgroundColor: withAlpha(accent, alpha),
                }}
              />
            ))}

            {/* Floor: soft shadow + thin light line under the feet */}
            <View
              className="absolute self-center"
              style={{
                bottom: NAME_AREA + 14,
                width: "62%",
                height: 16,
                borderRadius: 999,
                backgroundColor: "rgba(0,0,0,0.55)",
              }}
            />
            <View
              className="absolute self-center"
              style={{
                bottom: NAME_AREA + 20,
                width: "46%",
                height: 2,
                borderRadius: 999,
                backgroundColor: withAlpha(accent, 0.7),
                shadowColor: accent,
                shadowOpacity: 1,
                shadowRadius: 8,
                shadowOffset: { width: 0, height: 0 },
              }}
            />

            {/* Character */}
            <Animated.View
              pointerEvents="none"
              style={[
                {
                  position: "absolute",
                  top: 10,
                  left: 6,
                  right: 6,
                  bottom: NAME_AREA - 6,
                },
                artStyle,
              ]}
            >
              <Image
                source={image}
                resizeMode="contain"
                style={{ width: "100%", height: "100%" }}
              />
            </Animated.View>

            {/* Name on a dark fade */}
            <LinearGradient
              colors={["transparent", "rgba(0,0,0,0.75)", "rgba(0,0,0,0.92)"]}
              locations={[0, 0.45, 1]}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                height: NAME_AREA + 24,
              }}
              pointerEvents="none"
            />
            <View className="absolute bottom-0 left-0 right-0 items-center px-3 pb-3.5">
              <Text
                className="text-[14px] font-bold tracking-[0.3px] text-foreground"
                numberOfLines={1}
                adjustsFontSizeToFit
                minimumFontScale={0.8}
              >
                {name}
              </Text>
              <View
                className="mt-1.5 h-[2px] w-5 rounded-full"
                style={{ backgroundColor: accent }}
              />
            </View>

            {/* Top edge highlight */}
            <View className="absolute left-6 right-6 top-0 h-px bg-white/40" />
          </View>
        </LinearGradient>
      </Animated.View>
    </Pressable>
  );
}
