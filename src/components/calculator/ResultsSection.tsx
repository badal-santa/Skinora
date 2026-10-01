import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ArrowRight, Sparkles } from "lucide-react-native";
import { Text } from "../Text";
import { CALC_SURFACE, type CalculatorResult } from "./robuxCalculator";
import { colors, withAlpha } from "../../theme/colors";

type Props = {
  results: CalculatorResult[];
  accent: string;
  strings: { resultTag: string; resultTitle: string; estimated: string };
};

/** "Calculation result" heading followed by one card per result. */
export default function ResultsSection({ results, accent, strings }: Props) {
  return (
    <>
      <View className="mb-3 mt-6 flex-row items-center justify-between">
        <View>
          <Text className="text-[10px] font-bold tracking-[1.5px] text-muted">
            {strings.resultTag}
          </Text>
          <Text className="mt-1 text-[15px] font-extrabold text-foreground">
            {strings.resultTitle}
          </Text>
        </View>
        <View
          className="h-9 w-9 items-center justify-center rounded-full"
          style={{ backgroundColor: withAlpha(accent, 0.1) }}
        >
          <Sparkles size={16} color={accent} />
        </View>
      </View>

      <View className="gap-3">
        {results.map((result) => (
          <ResultCard
            key={result.label}
            result={result}
            estimated={strings.estimated}
          />
        ))}
      </View>
    </>
  );
}

function ResultCard({
  result: { label, value, color, primary },
  estimated,
}: {
  result: CalculatorResult;
  estimated: string;
}) {
  return (
    <View
      className="overflow-hidden rounded-[26px] border"
      style={{
        borderColor: primary ? withAlpha(color, 0.42) : colors.border,
        backgroundColor: CALC_SURFACE,
      }}
    >
      <LinearGradient
        colors={[withAlpha(color, primary ? 0.16 : 0.09), "transparent"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ padding: primary ? 20 : 16 }}
      >
        <View className="flex-row items-center justify-between">
          <Text className="text-[10px] font-bold tracking-[1px] text-muted">
            {label}
          </Text>
          <View
            className="h-7 w-7 items-center justify-center rounded-full"
            style={{ backgroundColor: withAlpha(color, 0.1) }}
          >
            <ArrowRight size={13} color={color} />
          </View>
        </View>

        <Text
          className={`mt-2 font-black ${primary ? "text-[34px]" : "text-[23px]"}`}
          style={{ color, letterSpacing: -0.5 }}
          numberOfLines={1}
          adjustsFontSizeToFit
          minimumFontScale={0.5}
        >
          ≈ {value}
        </Text>

        {primary && (
          <View className="mt-3 flex-row items-center">
            <View style={[styles.dot, { backgroundColor: color }]} />
            <Text className="text-[9px] font-semibold tracking-[1px] text-muted">
              {estimated}
            </Text>
          </View>
        )}
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  dot: { width: 5, height: 5, borderRadius: 3, marginRight: 7 },
});
