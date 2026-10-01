import { Pressable, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import HexBadge from "../HexBadge";
import { Text } from "../Text";
import { withAlpha } from "../../theme/colors";

type Props = {
  title: string;
  /** Two letters on the hexagon, e.g. "BP". */
  label: string;
  color: string;
  /** Small tag above the title, e.g. "CALCULATOR". */
  tag: string;
  /** Hint in the footer, e.g. "TAP TO OPEN". */
  hint: string;
  fullWidth?: boolean;
  onPress: () => void;
};

const HEIGHT = 220;
const RADIUS = 26;
const SURFACE = "#101114";
const TITLE = "#F5F7FA";
const HINT = "#777B85";

/** Calculator hub tile: tag + title, glowing hex badge, "tap to open" footer. */
export default function CalculatorTile({
  title,
  label,
  color,
  tag,
  hint,
  fullWidth = false,
  onPress,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={title}
      className={`${fullWidth ? "w-full" : "w-[48.2%]"} active:opacity-90`}
    >
      {({ pressed }) => (
        <View
          style={[
            styles.card,
            {
              borderColor: withAlpha(color, pressed ? 0.8 : 0.32),
              transform: [{ scale: pressed ? 0.985 : 1 }],
            },
          ]}
        >
          <TileBackground color={color} />

          <View className="px-4 pt-4">
            <View className="flex-row items-center justify-between">
              <TileTag label={tag} color={color} />
              <GlowDot color={color} />
            </View>
            <Text
              className="mt-3 text-[16px] font-bold"
              style={{ color: TITLE }}
              numberOfLines={1}
              adjustsFontSizeToFit
              minimumFontScale={0.75}
            >
              {title}
            </Text>
          </View>

          <View className="flex-1 items-center justify-center">
            <View
              style={[
                styles.badgeGlow,
                { backgroundColor: withAlpha(color, 0.1), shadowColor: color },
              ]}
            />
            <HexBadge label={label} color={color} size={108} />
          </View>

          <TileFooter hint={hint} color={color} />
        </View>
      )}
    </Pressable>
  );
}

/** Dark gradient, top tint, corner glow and bottom highlight line. */
function TileBackground({ color }: { color: string }) {
  return (
    <>
      <LinearGradient
        colors={["#18191D", "#111216", withAlpha(color, 0.1)]}
        locations={[0, 0.55, 1]}
        style={StyleSheet.absoluteFill}
      />
      <LinearGradient
        colors={[withAlpha(color, 0.22), "transparent"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.topGlow}
      />
      <View
        style={[styles.cornerGlow, { backgroundColor: withAlpha(color, 0.08) }]}
      />
      <LinearGradient
        colors={[withAlpha(color, 0.45), "transparent"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.bottomLine}
      />
    </>
  );
}

function TileTag({ label, color }: { label: string; color: string }) {
  return (
    <View
      style={[
        styles.tag,
        {
          backgroundColor: withAlpha(color, 0.1),
          borderColor: withAlpha(color, 0.18),
        },
      ]}
    >
      <Text
        className="text-[9px] font-bold tracking-[1.5px]"
        style={{ color: withAlpha(color, 0.9) }}
      >
        {label}
      </Text>
    </View>
  );
}

function GlowDot({ color }: { color: string }) {
  return (
    <View
      style={[styles.dot, { backgroundColor: color, shadowColor: color }]}
    />
  );
}

function TileFooter({ hint, color }: { hint: string; color: string }) {
  return (
    <View className="flex-row items-center justify-between px-4 pb-4">
      <View className="flex-row items-center">
        <View style={[styles.footerDot, { backgroundColor: color }]} />
        <Text
          className="text-[9px] font-semibold tracking-[1.2px]"
          style={{ color: HINT }}
        >
          {hint}
        </Text>
      </View>
      <Text className="text-[16px] font-bold" style={{ color }}>
        →
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: HEIGHT,
    borderRadius: RADIUS,
    overflow: "hidden",
    borderWidth: 1,
    backgroundColor: SURFACE,
  },
  topGlow: { position: "absolute", top: 0, left: 0, right: 0, height: 90 },
  cornerGlow: {
    position: "absolute",
    width: 110,
    height: 110,
    borderRadius: 55,
    top: -55,
    right: -40,
  },
  bottomLine: {
    position: "absolute",
    bottom: 0,
    left: 20,
    right: 20,
    height: 1,
  },
  badgeGlow: {
    position: "absolute",
    width: 125,
    height: 125,
    borderRadius: 63,
    shadowOpacity: 0.55,
    shadowRadius: 28,
    elevation: 14,
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 5,
  },
  footerDot: { width: 5, height: 5, borderRadius: 3, marginRight: 7 },
});
