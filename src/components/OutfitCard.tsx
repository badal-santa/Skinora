import { Image, Pressable, View, type ImageSourcePropType } from "react-native";
import { Text } from "./Text";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
} from "react-native-reanimated";
import { ArrowUpRight, Heart } from "lucide-react-native";
import { colors, withAlpha } from "../theme/colors";
import { label, useT } from "../i18n/language";

export type OutfitPiece =
  "Jacket" | "Top" | "Pants" | "Shorts" | "Cap" | "Shoes";

/** A full look, or a single clothing piece. */
export type OutfitType = "Look" | OutfitPiece;

export type Outfit = {
  id: string;
  name: string;
  category: string;
  tag: string;
  /** Transparent cut-out of the character wearing the outfit. */
  image: ImageSourcePropType;
  accent: string;
  type: OutfitType;
};

type Props = {
  outfit: Outfit;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onPress?: () => void;
};

const STAGE_HEIGHT = 196;
const spring = { damping: 14, stiffness: 260, mass: 0.6 };

const fill = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
} as const;

export default function OutfitCard({
  outfit,
  isFavorite,
  onToggleFavorite,
  onPress,
}: Props) {
  const { id, name, category, tag, image, accent, type } = outfit;
  const t = useT();
  const subtitle =
    type === "Look"
      ? label(t, category)
      : `${label(t, type)} · ${label(t, category)}`;

  const press = useSharedValue(1);
  const heart = useSharedValue(1);

  const cardStyle = useAnimatedStyle(() => ({
    transform: [{ scale: press.value }],
  }));

  const heartStyle = useAnimatedStyle(() => ({
    transform: [{ scale: heart.value }],
  }));

  const toggleFavorite = () => {
    heart.set(withSequence(withSpring(1.35, spring), withSpring(1, spring)));
    onToggleFavorite(id);
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => {
        press.set(withSpring(0.97, spring));
      }}
      onPressOut={() => {
        press.set(withSpring(1, spring));
      }}
      accessibilityRole="button"
      accessibilityLabel={`${name}, ${subtitle}`}
      className="w-[49.2%]"
    >
      <Animated.View
        style={[
          {
            borderRadius: 20,
            overflow: "hidden",
            backgroundColor: colors.card,
            borderWidth: 1,
            borderColor: withAlpha(accent, 0.28),
          },
          cardStyle,
        ]}
      >
        {/* Stage */}
        <View style={{ height: STAGE_HEIGHT }}>
          <LinearGradient
            colors={[
              withAlpha(accent, 0.3),
              withAlpha(accent, 0.07),
              colors.card,
            ]}
            locations={[0, 0.55, 1]}
            style={fill}
          />

          {/* Spotlight behind the character */}
          <View
            className="absolute self-center"
            style={{
              top: 34,
              height: 120,
              width: 120,
              borderRadius: 60,
              backgroundColor: withAlpha(accent, 0.22),
            }}
          />

          {/* Glowing floor platform */}
          <View
            className="absolute self-center"
            style={{
              bottom: 12,
              height: 28,
              width: "72%",
              borderRadius: 999,
              borderWidth: 1.5,
              borderColor: withAlpha(accent, 0.7),
              backgroundColor: withAlpha(accent, 0.14),
              shadowColor: accent,
              shadowOpacity: 0.9,
              shadowRadius: 12,
              shadowOffset: { width: 0, height: 0 },
            }}
          />

          <View
            pointerEvents="none"
            // Inset keeps art clear of the rounded corners and the tag/heart row.
            style={{
              position: "absolute",
              top: 40,
              left: 16,
              right: 16,
              bottom: 22,
            }}
          >
            <Image
              source={image}
              resizeMode="contain"
              style={{ width: "100%", height: "100%" }}
            />
          </View>

          {/* Glossy top light */}
          <LinearGradient
            colors={["rgba(255,255,255,0.14)", "transparent"]}
            locations={[0, 0.4]}
            style={fill}
          />
          <View className="absolute left-5 right-5 top-0 h-px bg-white/30" />

          {/* Tag */}
          <View
            className="absolute left-2.5 top-2.5 flex-row items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1.5"
            style={{ borderWidth: 1, borderColor: withAlpha(accent, 0.4) }}
          >
            <View
              style={{
                height: 5,
                width: 5,
                borderRadius: 3,
                backgroundColor: accent,
              }}
            />
            <Text
              className="text-[9px] font-extrabold tracking-[1px]"
              style={{ color: accent }}
            >
              {label(t, tag)}
            </Text>
          </View>

          {/* Favorite */}
          <Pressable
            onPress={toggleFavorite}
            hitSlop={8}
            accessibilityRole="button"
            accessibilityLabel={
              isFavorite ? t.outfits.unsave(name) : t.outfits.save(name)
            }
            className="absolute right-2.5 top-2.5 h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/60"
          >
            <Animated.View style={heartStyle}>
              <Heart
                size={17}
                color={isFavorite ? colors.accent : colors.foreground}
                fill={isFavorite ? colors.accent : "transparent"}
                strokeWidth={2.2}
              />
            </Animated.View>
          </Pressable>
        </View>

        {/* Info */}
        <View className="flex-row items-center justify-between px-3.5 pb-3.5 pt-2.5">
          <View className="flex-1 pr-2">
            <Text
              className="text-sm font-bold text-foreground"
              numberOfLines={1}
            >
              {name}
            </Text>
            <Text
              className="mt-0.5 text-[10px] font-medium text-muted"
              numberOfLines={1}
            >
              {subtitle}
            </Text>
          </View>

          <View
            className="h-8 w-8 items-center justify-center rounded-full"
            style={{
              backgroundColor: withAlpha(accent, 0.14),
              borderWidth: 1,
              borderColor: withAlpha(accent, 0.45),
            }}
          >
            <ArrowUpRight size={15} color={accent} strokeWidth={2.4} />
          </View>
        </View>
      </Animated.View>
    </Pressable>
  );
}
