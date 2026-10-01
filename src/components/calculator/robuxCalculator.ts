import type { CalculatorRates } from "../../config/remoteConfig";
import type { Strings } from "../../i18n/translations";
import { colors } from "../../theme/colors";

export type CalculatorMode = "robuxToUsd" | "usdToRobux" | "fee";

export const ROBUX_COLOR = colors.neon.gold;
export const USD_COLOR = colors.primary;
/** Card surface shared by the calculator screens. */
export const CALC_SURFACE = "#111216";

/** Quick-pick amounts per mode (Robux packs, or dollar amounts). */
export const PRESETS: Record<CalculatorMode, number[]> = {
  robuxToUsd: [400, 800, 1700, 4500, 10000],
  usdToRobux: [5, 10, 20, 50, 100],
  fee: [5, 50, 100, 500, 1000],
};

export type CalculatorResult = {
  label: string;
  value: string;
  color: string;
  /** The headline result: bigger, with an "estimated value" note. */
  primary?: boolean;
};

/** Mode metadata derived from the translations. */
export const modeInfo = (mode: CalculatorMode, t: Strings) => ({
  usdInput: mode === "usdToRobux",
  accent: mode === "usdToRobux" ? USD_COLOR : ROBUX_COLOR,
  inputLabel:
    mode === "robuxToUsd"
      ? t.calculator.robuxAmount
      : mode === "usdToRobux"
        ? t.calculator.usdAmount
        : t.calculator.itemPrice,
});

export const modeTabs = (t: Strings) => [
  { mode: "robuxToUsd" as const, label: t.calculator.tabRobuxToUsd },
  { mode: "usdToRobux" as const, label: t.calculator.tabUsdToRobux },
  { mode: "fee" as const, label: t.calculator.tabFee },
];

/** Keeps digits and one decimal point; whole numbers only for Robux. */
export function sanitizeAmount(text: string, decimals: boolean) {
  const cleaned = text.replace(decimals ? /[^0-9.]/g : /[^0-9]/g, "");
  const [whole, ...rest] = cleaned.split(".");
  const value = rest.length ? `${whole}.${rest.join("").slice(0, 2)}` : whole;
  return value.slice(0, 10);
}

export const formatRobux = (n: number, locale: string) =>
  `R$ ${Math.floor(n).toLocaleString(locale, { maximumFractionDigits: 0 })}`;

export const formatUsd = (n: number, locale: string) =>
  `$${n.toLocaleString(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

/** The result cards for a mode and amount. */
export function calculate(
  mode: CalculatorMode,
  amount: number,
  rates: CalculatorRates,
  t: Strings,
  locale: string,
): CalculatorResult[] {
  const robux = (n: number) => formatRobux(n, locale);
  const usd = (n: number) => formatUsd(n, locale);

  if (mode === "robuxToUsd") {
    return [
      {
        label: t.calculator.purchaseCost,
        value: usd(amount / rates.robuxPerUsd),
        color: USD_COLOR,
        primary: true,
      },
      {
        label: t.calculator.devexValue,
        value: usd(amount * rates.devexUsdPerRobux),
        color: colors.secondary,
      },
    ];
  }

  if (mode === "usdToRobux") {
    return [
      {
        label: t.calculator.robuxYouGet,
        value: robux(amount * rates.robuxPerUsd),
        color: ROBUX_COLOR,
        primary: true,
      },
    ];
  }

  const share = rates.creatorSharePercent;
  const kept = Math.floor((amount * share) / 100);
  return [
    {
      label: t.calculator.youReceive(share),
      value: robux((amount * share) / 100),
      color: ROBUX_COLOR,
      primary: true,
    },
    {
      label: t.calculator.marketplaceFee(100 - share),
      value: robux(amount - kept),
      color: colors.accent,
    },
    {
      label: t.calculator.devexValue,
      value: usd(kept * rates.devexUsdPerRobux),
      color: colors.secondary,
    },
  ];
}
