import { useState } from "react";
import { Pressable, ScrollView, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Info } from "lucide-react-native";
import PromoAdCard from "../components/PromoAdCard";
import ScreenHeader from "../components/ScreenHeader";
import { Text, TextInput } from "../components/Text";
import { useCalculatorRates } from "../config/remoteConfig";
import { useLanguage, useT } from "../i18n/language";
import type { RootStackScreenProps } from "../navigation/types";
import { colors, withAlpha } from "../theme/colors";

type Props = RootStackScreenProps<"TierCalculator">;

const PRESETS = [1, 3, 6, 12];
const ACCENT = colors.neon.gold;

export default function TierCalculatorScreen({ navigation, route }: Props) {
  const { from, to } = route.params;
  const t = useT();
  const { code } = useLanguage();
  const { tiers } = useCalculatorRates();
  const [input, setInput] = useState("1");

  const months = Math.min(Number(input) || 0, 999);
  const fromTier = tiers[from];
  const toTier = tiers[to];
  const fromName = t.calcHub[from];
  const toName = t.calcHub[to];

  const totalRobux = months * fromTier.robux;
  const toMonths = totalRobux / toTier.robux;
  const fromCost = months * fromTier.usd;
  const toCost = toMonths * toTier.usd;

  const num = (n: number, digits = 0) =>
    n.toLocaleString(code, { maximumFractionDigits: digits });
  const usd = (n: number) =>
    `$${n.toLocaleString(code, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  const results = [
    { label: t.calcHub.totalRobux, value: `R$ ${num(totalRobux)}`, color: ACCENT },
    {
      label: t.calcHub.sameRobuxAs(toName),
      value: t.calcHub.monthsValue(num(toMonths, 1)),
      color: colors.secondary,
    },
    { label: t.calcHub.costWith(fromName), value: usd(fromCost), color: colors.primary },
    { label: t.calcHub.costWith(toName), value: usd(toCost), color: colors.neon.blue },
    {
      label: t.calcHub.difference,
      value: usd(Math.abs(toCost - fromCost)),
      color: colors.accent,
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <ScreenHeader
        title={`${fromName} → ${toName}`}
        subtitle={t.calcHub.tierSubtitle}
        onBack={() => navigation.goBack()}
      />

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 32 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Plans being compared */}
        <View className="flex-row gap-3">
          {[
            { name: fromName, tier: fromTier },
            { name: toName, tier: toTier },
          ].map(({ name, tier }) => (
            <View
              key={name}
              className="flex-1 rounded-2xl border border-border bg-card p-3"
            >
              <Text className="text-sm font-extrabold text-foreground">
                {name}
              </Text>
              <Text className="mt-0.5 text-[11px] text-muted">
                {t.calcHub.perMonth(num(tier.robux), usd(tier.usd))}
              </Text>
            </View>
          ))}
        </View>

        {/* Months input */}
        <View
          className="mt-4 rounded-3xl border p-5"
          style={{
            borderColor: withAlpha(ACCENT, 0.45),
            backgroundColor: withAlpha(ACCENT, 0.07),
          }}
        >
          <Text className="text-xs font-bold tracking-[1px] text-muted">
            {t.calcHub.monthsOf(fromName)}
          </Text>
          <TextInput
            value={input}
            onChangeText={(text) => setInput(text.replace(/[^0-9]/g, "").slice(0, 3))}
            keyboardType="number-pad"
            placeholder="0"
            placeholderTextColor={colors.subtle}
            selectionColor={ACCENT}
            className="mt-1 p-0 text-[38px] font-black text-foreground"
            accessibilityLabel={t.calcHub.monthsOf(fromName)}
          />
          <View className="mt-3 flex-row gap-2">
            {PRESETS.map((preset) => {
              const active = months === preset;
              return (
                <Pressable
                  key={preset}
                  onPress={() => setInput(String(preset))}
                  accessibilityRole="button"
                  className="rounded-full border px-4 py-2 active:opacity-70"
                  style={{
                    borderColor: active ? ACCENT : colors.border,
                    backgroundColor: active ? withAlpha(ACCENT, 0.18) : colors.card,
                  }}
                >
                  <Text
                    className="text-xs font-bold"
                    style={{ color: active ? ACCENT : colors.muted }}
                  >
                    {preset}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        {/* Results */}
        <View className="mt-4 gap-3">
          {results.map((result, index) => (
            <View
              key={result.label}
              className="overflow-hidden rounded-3xl border border-border bg-card"
            >
              <LinearGradient
                colors={[withAlpha(result.color, 0.16), "transparent"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ padding: index === 0 ? 20 : 16 }}
              >
                <Text className="text-xs font-semibold text-muted">
                  {result.label}
                </Text>
                <Text
                  className={`mt-1 font-black ${index === 0 ? "text-[32px]" : "text-[22px]"}`}
                  style={{ color: result.color }}
                  numberOfLines={1}
                  adjustsFontSizeToFit
                  minimumFontScale={0.5}
                >
                  {result.value}
                </Text>
              </LinearGradient>
            </View>
          ))}
        </View>

        <PromoAdCard style={{ marginTop: 16 }} />

        {/* Disclaimer */}
        <View className="mt-5 flex-row rounded-2xl border border-border bg-surface p-3.5">
          <Info size={16} color={colors.muted} style={{ marginTop: 1 }} />
          <Text className="ml-2.5 flex-1 text-[11px] leading-4 text-muted">
            {t.calculator.disclaimer}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
