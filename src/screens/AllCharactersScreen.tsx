import { ScrollView, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CharacterCard, {
  CHARACTER_FACE_HEIGHT,
  CHARACTER_FACE_TOP,
} from "../components/CharacterCard";
import ScreenHeader from "../components/ScreenHeader";
import AdBanner from "../components/AdBanner";
import NativeAdCard from "../components/NativeAdCard";
import { useNativeAds, withNativeAds } from "../ads/native";
import { characters } from "../data/data";
import type { RootStackScreenProps } from "../navigation/types";

type Props = RootStackScreenProps<"Characters">;

export default function AllCharactersScreen({ navigation }: Props) {
  const nativeAds = useNativeAds();

  return (
    <SafeAreaView className="flex-1 bg-[#080B18]">
      <StatusBar barStyle="light-content" backgroundColor="#080B18" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        <ScreenHeader
          title="Characters"
          subtitle="Discover your next iconic look"
          onBack={() => navigation.goBack()}
        />

        {/* Character grid */}
        <View className="flex-row flex-wrap justify-between gap-y-4 px-5">
          {withNativeAds(characters, nativeAds, (c) => c.id).map((entry) =>
            entry.kind === "ad" ? (
              <NativeAdCard
                key={entry.key}
                ad={entry.ad}
                height={CHARACTER_FACE_HEIGHT}
                style={{ marginTop: CHARACTER_FACE_TOP }}
              />
            ) : (
              <CharacterCard
                key={entry.key}
                character={entry.item}
                onPress={() =>
                  navigation.navigate("CharacterDetails", {
                    characterId: entry.item.id,
                  })
                }
              />
            ),
          )}
        </View>
      </ScrollView>
      <AdBanner />
    </SafeAreaView>
  );
}
