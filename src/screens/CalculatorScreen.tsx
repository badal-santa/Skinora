import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AmountInputCard from "../components/calculator/AmountInputCard";
import InfoNote from "../components/calculator/InfoNote";
import ModeTabs from "../components/calculator/ModeTabs";
import ResultsSection from "../components/calculator/ResultsSection";
import {
  PRESETS,
  calculate,
  modeInfo,
  modeTabs,
  sanitizeAmount,
  type CalculatorMode,
} from "../components/calculator/robuxCalculator";
import PromoAdCard from "../components/PromoAdCard";
import ScreenHeader from "../components/ScreenHeader";
import { useCalculatorRates } from "../config/remoteConfig";
import { useLanguage, useT } from "../i18n/language";
import type { RootStackScreenProps } from "../navigation/types";
import { colors } from "../theme/colors";

type Props = RootStackScreenProps<"Calculator">;

/** Robux ⇄ USD and marketplace-fee calculator. */
export default function CalculatorScreen({ navigation }: Props) {
  const t = useT();
  const { code } = useLanguage();
  const rates = useCalculatorRates();
  const [mode, setMode] = useState<CalculatorMode>("robuxToUsd");
  const [input, setInput] = useState("800");

  const { usdInput, accent, inputLabel } = modeInfo(mode, t);
  const results = calculate(mode, Number(input) || 0, rates, t, code);

  const switchMode = (next: CalculatorMode) => {
    setMode(next);
    setInput(String(PRESETS[next][1]));
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <ScreenHeader
        title={t.calculator.title}
        subtitle={t.calculator.subtitle}
        onBack={() => navigation.goBack()}
      />

      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 36 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <PromoAdCard at="top" style={{ marginBottom: 16 }} />
          <ModeTabs
            tabs={modeTabs(t)}
            active={mode}
            accent={accent}
            onChange={switchMode}
          />
          <AmountInputCard
            value={input}
            onChangeText={(text) => setInput(sanitizeAmount(text, usdInput))}
            usd={usdInput}
            label={inputLabel}
            presets={PRESETS[mode]}
            accent={accent}
            locale={code}
            strings={t.calculator}
          />
          <ResultsSection
            results={results}
            accent={accent}
            strings={t.calculator}
          />
          <PromoAdCard at="aboveDisclaimer" isDefault style={{ marginTop: 18 }} />
          <InfoNote
            title={t.calculator.infoTitle}
            message={t.calculator.disclaimer}
          />
          <PromoAdCard at="bottom" style={{ marginTop: 18 }} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
