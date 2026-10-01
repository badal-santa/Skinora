import { Pressable, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ArrowUpRight, type LucideIcon } from "lucide-react-native";
import { Text } from "./Text";
import { colors, withAlpha } from "../theme/colors";

type Props = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  accent: string;
  onPress: () => void;
  /** Span the whole row as a horizontal banner (e.g. a lone last tool). */
  fullWidth?: boolean;
};

/** Half-width Home tile for a tool (Games, Calculator) under the grid. */
export default function ToolTile({
  title,
  subtitle,
  icon: Icon,
  accent,
  onPress,
  fullWidth = false,
}: Props) {
  const iconBox = (
    <View
      className="h-14 w-14 items-center justify-center rounded-2xl"
      style={{
        backgroundColor: withAlpha(accent, 0.18),
        borderWidth: 1,
        borderColor: withAlpha(accent, 0.45),
      }}
    >
      <Icon size={28} color={accent} strokeWidth={2.2} />
    </View>
  );
  const arrow = (
    <View
      className="h-8 w-8 items-center justify-center rounded-full"
      style={{ backgroundColor: accent }}
    >
      <ArrowUpRight size={16} color={colors.background} strokeWidth={2.6} />
    </View>
  );
  const text = (
    <>
      <Text
        className={`${fullWidth ? "" : "mt-4 "}text-[14px] font-black tracking-[1px]`}
        style={{ color: accent }}
        numberOfLines={1}
      >
        {title}
      </Text>
      <Text className="mt-0.5 text-[11px] text-foreground/70" numberOfLines={1}>
        {subtitle}
      </Text>
    </>
  );

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`${title}. ${subtitle}`}
      className={`${fullWidth ? "w-full" : "w-[48.2%]"} active:opacity-80`}
    >
      <View
        style={{
          borderRadius: 24,
          overflow: "hidden",
          borderWidth: 1,
          borderColor: withAlpha(accent, 0.5),
          backgroundColor: colors.card,
          shadowColor: accent,
          shadowOpacity: 0.4,
          shadowRadius: 16,
          shadowOffset: { width: 0, height: 6 },
          elevation: 10,
        }}
      >
        <LinearGradient
          colors={[withAlpha(accent, 0.3), withAlpha(accent, 0.04)]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={
            fullWidth
              ? { padding: 16, flexDirection: "row", alignItems: "center" }
              : { padding: 16 }
          }
        >
          {fullWidth ? (
            <>
              {iconBox}
              <View className="ml-4 flex-1 pr-2">{text}</View>
              {arrow}
            </>
          ) : (
            <>
              <View className="flex-row items-start justify-between">
                {iconBox}
                {arrow}
              </View>
              {text}
            </>
          )}
        </LinearGradient>
      </View>
    </Pressable>
  );
}
