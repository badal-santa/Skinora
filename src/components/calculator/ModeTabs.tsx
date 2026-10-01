import { Pressable, StyleSheet, View } from "react-native";
import { Text } from "../Text";
import { CALC_SURFACE, type CalculatorMode } from "./robuxCalculator";
import { colors, withAlpha } from "../../theme/colors";

type Props = {
  tabs: { mode: CalculatorMode; label: string }[];
  active: CalculatorMode;
  accent: string;
  onChange: (mode: CalculatorMode) => void;
};

/** Segmented control for the calculator modes. */
export default function ModeTabs({ tabs, active, accent, onChange }: Props) {
  return (
    <View
      className="rounded-[22px] border p-1.5"
      style={{ backgroundColor: CALC_SURFACE, borderColor: colors.border }}
    >
      <View className="flex-row">
        {tabs.map((tab) => {
          const selected = tab.mode === active;
          return (
            <Pressable
              key={tab.mode}
              onPress={() => onChange(tab.mode)}
              accessibilityRole="tab"
              accessibilityState={{ selected }}
              className="h-11 flex-1 items-center justify-center rounded-[16px]"
              style={
                selected
                  ? {
                      backgroundColor: withAlpha(accent, 0.16),
                      borderWidth: 1,
                      borderColor: withAlpha(accent, 0.45),
                    }
                  : undefined
              }
            >
              {selected && (
                <View
                  style={[styles.underline, { backgroundColor: accent }]}
                />
              )}
              <Text
                className="text-[11px] font-extrabold"
                style={{ color: selected ? accent : colors.muted }}
                numberOfLines={1}
              >
                {tab.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  underline: {
    position: "absolute",
    left: 12,
    right: 12,
    bottom: 0,
    height: 2,
    borderRadius: 2,
  },
});
