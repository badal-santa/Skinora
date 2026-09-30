import { Image, Pressable, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Text } from "./Text";
import type { Outfit } from "./OutfitCard";
import { colors, withAlpha } from "../theme/colors";
import { label, useT } from "../i18n/language";

type Props = {
  item: Outfit;
  onPress?: () => void;
};

const TILE = 96;
const spring = { damping: 14, stiffness: 260, mass: 0.6 };
const fill = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
} as const;

/**
 * Full-width list tile: item on a neon tile at the left, details on the
 * right. Used by the Accessories list.
 */
export default function AccessoryCard({ item, onPress }: Props) {
  const { name, type, category, tag, image, accent } = item;
  const t = useT();
  const details = `${label(t, type)} · ${label(t, category)}`;

  const press = useSharedValue(1);

  const cardStyle = useAnimatedStyle(() => ({
    transform: [{ scale: press.value }],
  }));

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => {
        press.set(withSpring(0.98, spring));
      }}
      onPressOut={() => {
        press.set(withSpring(1, spring));
      }}
      accessibilityRole="button"
      accessibilityLabel={`${name}, ${details}`}
    >
      <Animated.View
        style={[
          {
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
            borderRadius: 22,
            backgroundColor: colors.card,
            borderWidth: 1,
            borderColor: withAlpha(accent, 0.22),
            overflow: "hidden",
          },
          cardStyle,
        ]}
      >
        {/* Accent edge */}
        <View
          style={{
            position: "absolute",
            left: 0,
            top: 18,
            bottom: 18,
            width: 3,
            borderTopRightRadius: 3,
            borderBottomRightRadius: 3,
            backgroundColor: accent,
          }}
        />

        {/* Image tile */}
        <View
          style={{
            width: TILE,
            height: TILE,
            borderRadius: 18,
            overflow: "hidden",
            borderWidth: 1,
            borderColor: withAlpha(accent, 0.35),
          }}
        >
          <LinearGradient
            colors={[withAlpha(accent, 0.36), withAlpha(accent, 0.08)]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={fill}
          />
          <View
            className="absolute self-center"
            style={{
              top: TILE * 0.18,
              width: TILE * 0.64,
              height: TILE * 0.64,
              borderRadius: TILE,
              backgroundColor: withAlpha(accent, 0.22),
            }}
          />
          <View
            pointerEvents="none"
            style={{
              position: "absolute",
              top: 8,
              left: 8,
              right: 8,
              bottom: 8,
            }}
          >
            <Image
              source={image}
              resizeMode="contain"
              style={{ width: "100%", height: "100%" }}
            />
          </View>
        </View>

        {/* Details */}
        <View className="ml-3.5 flex-1">
          <View className="items-start">
            <View
              className="flex-row items-center rounded-full px-2.5 py-1 mb-2"
              style={{ backgroundColor: withAlpha(accent, 0.14) }}
            >
              <View
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: 3,
                  backgroundColor: accent,
                }}
              />
              <Text
                className="ml-1.5 text-[9px] font-extrabold tracking-[1px]"
                style={{ color: accent }}
              >
                {label(t, tag)}
              </Text>
            </View>
            <Text
              className="flex-1 text-[15px] font-bold text-foreground"
              numberOfLines={1}
            >
              {name}
            </Text>
          </View>

          <Text className="mt-0.5 text-xs text-muted" numberOfLines={1}>
            {details}
          </Text>
        </View>
      </Animated.View>
    </Pressable>
  );
}
