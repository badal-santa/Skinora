import { Pressable, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Check } from "lucide-react-native";
import { Text, TextInput } from "../Text";
import { CALC_SURFACE } from "./robuxCalculator";
import { colors, withAlpha } from "../../theme/colors";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  /** Dollar input (decimal keypad, "$") vs Robux (whole numbers, "R$"). */
  usd: boolean;
  label: string;
  presets: number[];
  accent: string;
  locale: string;
  strings: { inputAmount: string; liveRate: string; quickSelect: string };
};

const FIELD = "#0C0D10";
const CHIP = "#17181C";

/** Amount entry: header with rate pill, big input field, quick-pick chips. */
export default function AmountInputCard({
  value,
  onChangeText,
  usd,
  label,
  presets,
  accent,
  locale,
  strings,
}: Props) {
  const amount = Number(value) || 0;
  const symbol = usd ? "$" : "R$";

  return (
    <View
      className="mt-5 overflow-hidden rounded-[30px] border"
      style={{ borderColor: withAlpha(accent, 0.32), backgroundColor: CALC_SURFACE }}
    >
      <LinearGradient
        colors={[withAlpha(accent, 0.14), withAlpha(accent, 0.03), "transparent"]}
        locations={[0, 0.45, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />

      {/* Header */}
      <View className="flex-row items-center justify-between px-5 pt-5">
        <View>
          <Text className="text-[10px] font-bold tracking-[1.5px] text-muted">
            {strings.inputAmount}
          </Text>
          <Text className="mt-1 text-[14px] font-bold text-foreground">
            {label}
          </Text>
        </View>
        <RatePill label={strings.liveRate} accent={accent} />
      </View>

      {/* Amount field */}
      <View className="px-5 pt-4">
        <View
          className="flex-row items-center rounded-[22px] border px-4"
          style={{
            minHeight: 82,
            backgroundColor: FIELD,
            borderColor: withAlpha(accent, 0.2),
          }}
        >
          <Text className="mr-3 text-[28px] font-black" style={{ color: accent }}>
            {symbol}
          </Text>
          <TextInput
            value={value}
            onChangeText={onChangeText}
            keyboardType={usd ? "decimal-pad" : "number-pad"}
            placeholder="0"
            placeholderTextColor={colors.subtle}
            selectionColor={accent}
            className="flex-1 p-0 text-[38px] font-black text-foreground"
            accessibilityLabel={label}
          />
        </View>
      </View>

      {/* Presets */}
      <View className="px-5 pb-5 pt-4">
        <Text className="mb-2.5 text-[9px] font-bold tracking-[1.2px] text-muted">
          {strings.quickSelect}
        </Text>
        <View className="flex-row flex-wrap gap-2">
          {presets.map((preset) => (
            <PresetChip
              key={preset}
              label={`${usd ? "$" : "R$ "}${preset.toLocaleString(locale)}`}
              active={amount === preset}
              accent={accent}
              onPress={() => onChangeText(String(preset))}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

function RatePill({ label, accent }: { label: string; accent: string }) {
  return (
    <View
      className="flex-row items-center rounded-full px-2.5 py-1.5"
      style={{ backgroundColor: withAlpha(accent, 0.1) }}
    >
      <View style={[styles.dot, { backgroundColor: accent }]} />
      <Text
        className="text-[9px] font-extrabold tracking-[1px]"
        style={{ color: accent }}
      >
        {label}
      </Text>
    </View>
  );
}

type ChipProps = {
  label: string;
  active: boolean;
  accent: string;
  onPress: () => void;
};

function PresetChip({ label, active, accent, onPress }: ChipProps) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ selected: active }}
      className="rounded-full border px-3.5 py-2"
      style={{
        borderColor: active ? withAlpha(accent, 0.65) : colors.border,
        backgroundColor: active ? withAlpha(accent, 0.14) : CHIP,
      }}
    >
      <View className="flex-row items-center">
        {active && (
          <Check
            size={11}
            color={accent}
            strokeWidth={3}
            style={{ marginRight: 5 }}
          />
        )}
        <Text
          className="text-[11px] font-bold"
          style={{ color: active ? accent : colors.muted }}
        >
          {label}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  dot: { width: 6, height: 6, borderRadius: 3, marginRight: 6 },
});
