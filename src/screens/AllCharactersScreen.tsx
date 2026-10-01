import { ScrollView, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CharacterCard from "../components/CharacterCard";
import ScreenHeader from "../components/ScreenHeader";
import PromoAdCard from "../components/PromoAdCard";
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

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        <ScreenHeader
          title={t.characters.title}
          subtitle={t.characters.subtitle}
          onBack={() => navigation.goBack()}
        />

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
            // Full-width ad row after the second row of cards.
            index === 3 ? (
              <PromoAdCard key="promo" style={{ width: "100%" }} />
            ) : null,
          ])}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
