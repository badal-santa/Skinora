import { ScrollView, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CharacterCard from "../components/CharacterCard";
import ScreenHeader from "../components/ScreenHeader";
import PromoAdCard from "../components/PromoAdCard";
import { LIST_AD_SPOT, listAdAfterRow } from "../ads/listAds";
import { characters } from "../data/data";
import { useT } from "../i18n/language";
import { withCustomTab } from "../customTab/customTab";
import type { RootStackScreenProps } from "../navigation/types";

type Props = RootStackScreenProps<"Characters">;

export default function AllCharactersScreen({ navigation }: Props) {
  const t = useT();

  return (
    <SafeAreaView className="flex-1 bg-[#080B18]">
      <StatusBar barStyle="light-content" backgroundColor="#080B18" />
      <ScreenHeader
        title={t.characters.title}
        subtitle={t.characters.subtitle}
        onBack={() => navigation.goBack()}
      />
      {/* Sticky ad strip: stays under the header while the list scrolls */}
      <PromoAdCard variant="banner" style={{ marginBottom: 12 }} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        <PromoAdCard at="top" style={{ paddingHorizontal: 20, marginBottom: 16 }} />

        {/* Character grid */}
        <View className="flex-row flex-wrap justify-between gap-y-4 px-5">
          {characters.map((character, index) => [
            <CharacterCard
              key={character.id}
              character={character}
              onPress={() => {
                withCustomTab(() =>
                  navigation.navigate("CharacterDetails", {
                    characterId: character.id,
                  }),
                );
              }}
            />,
            // Repeating full-width ad between rows (2 cards per row).
            <ListAd
              key={`ad-${index}`}
              afterIndex={index}
              total={characters.length}
            />,
          ])}
        </View>

        <PromoAdCard at="bottom" style={{ paddingHorizontal: 20, marginTop: 16 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

/** The in-list ad after card `afterIndex` when it closes an ad row. */
function ListAd({ afterIndex, total }: { afterIndex: number; total: number }) {
  const endsRow = afterIndex % 2 === 1 || afterIndex === total - 1;
  const occurrence = endsRow ? listAdAfterRow(Math.floor(afterIndex / 2)) : null;
  if (occurrence === null) return null;
  return (
    <PromoAdCard
      at={LIST_AD_SPOT}
      isDefault
      occurrence={occurrence}
      layout="side"
      style={{ width: "100%" }}
    />
  );
}
