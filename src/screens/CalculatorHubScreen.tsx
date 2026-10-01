import { ScrollView, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CalculatorTileGrid from "../components/calculator/CalculatorTileGrid";
import {
  CALCULATOR_TILES,
  type CalculatorTileData,
} from "../components/calculator/tiles";
import PromoAdCard from "../components/PromoAdCard";
import ScreenHeader from "../components/ScreenHeader";
import { withCustomTab } from "../customTab/customTab";
import { useT } from "../i18n/language";
import type { RootStackScreenProps } from "../navigation/types";
import { colors } from "../theme/colors";

type Props = RootStackScreenProps<"CalculatorHub">;

/** "All Calculator": Premium plan converters plus Robux ⇄ USD. */
export default function CalculatorHubScreen({ navigation }: Props) {
  const t = useT();

  const open = (tile: CalculatorTileData) =>
    withCustomTab(() =>
      tile.kind === "tier"
        ? navigation.navigate("TierCalculator", { from: tile.from, to: tile.to })
        : navigation.navigate("Calculator"),
    );

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <ScreenHeader title={t.calcHub.title} onBack={() => navigation.goBack()} />
      <View className="mx-5 h-px bg-border" />

      <ScrollView
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Slim ad strip under the header */}
        <PromoAdCard variant="banner" />
        <CalculatorTileGrid tiles={CALCULATOR_TILES} onOpen={open} />
      </ScrollView>
    </SafeAreaView>
  );
}
