import { Image, Pressable, View, type ImageSourcePropType } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Text } from "./Text";
import { colors, withAlpha } from "../theme/colors";
import { useT } from "../i18n/language";

export type Emote = {
  id: string;
  name: string;
  /** Transparent cut-out of the emote pose. */
  image: ImageSourcePropType;
  accent: string;
};

type Props = {
  emote: Emote;
  onPress?: () => void;
};

const spring = { damping: 14, stiffness: 260, mass: 0.6 };
const fill = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
} as const;

/** Compact card for a 3-column emote grid. */
export default function EmoteCard({ emote, onPress }: Props) {
  const { name, image, accent } = emote;
  const t = useT();
  const press = useSharedValue(1);

  const cardStyle = useAnimatedStyle(() => ({
    transform: [{ scale: press.value }],
  }));

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => {
        press.set(withSpring(0.95, spring));
      }}
      onPressOut={() => {
        press.set(withSpring(1, spring));
      }}
      accessibilityRole="button"
      accessibilityLabel={t.emotes.label(name)}
      className="w-[31.5%]"
    >
      <Animated.View
        style={[
          {
            borderRadius: 22,
            overflow: "hidden",
            backgroundColor: colors.card,
            borderWidth: 1,
            borderColor: withAlpha(accent, 0.3),
          },
          cardStyle,
        ]}
      >
        {/* Stage */}
        <View style={{ aspectRatio: 1 }}>
          <LinearGradient
            colors={[
              withAlpha(accent, 0.32),
              withAlpha(accent, 0.06),
              colors.card,
            ]}
            locations={[0, 0.6, 1]}
            style={fill}
          />
          <View
            className="absolute self-center"
            style={{
              top: "18%",
              height: "64%",
              aspectRatio: 1,
              borderRadius: 999,
              backgroundColor: withAlpha(accent, 0.2),
            }}
          />
          <View
            style={{
              position: "absolute",
              top: 8,
              left: 8,
              right: 8,
              bottom: 4,
            }}
          >
            <Image
              source={image}
              resizeMode="contain"
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <View className="absolute left-4 right-4 top-0 h-px bg-white/30" />
        </View>

        {/* Name */}
        <View className="px-2 pb-2.5 pt-1.5">
          <Text
            className="text-center text-[12px] font-bold text-foreground"
            numberOfLines={1}
          >
            {name}
          </Text>
          <View
            className="mx-auto mt-1 h-[3px] w-6 rounded-full"
            style={{ backgroundColor: accent }}
          />
        </View>
      </Animated.View>
    </Pressable>
  );
}
