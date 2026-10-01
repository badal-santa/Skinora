import { useMemo } from "react";
import { StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Sparkles } from "lucide-react-native";
import ItemCatalog from "../components/ItemCatalog";
import NotFound from "../components/NotFound";
import ScreenHeader from "../components/ScreenHeader";
import { Text } from "../components/Text";
import type { OutfitPiece } from "../components/OutfitCard";
import { outfitCategories, wardrobe } from "../data/data";
import { withCustomTab } from "../customTab/customTab";
import { useT } from "../i18n/language";
import type { RootStackScreenProps } from "../navigation/types";
import { colors, withAlpha } from "../theme/colors";

type Props = RootStackScreenProps<"OutfitCollection">;

export default function OutfitCollectionScreen({ navigation, route }: Props) {
  const t = useT();
  const group = outfitCategories.find((g) => g.id === route.params.category);

  const items = useMemo(
    () =>
      group ? wardrobe.filter((item) => group.types.includes(item.type)) : [],
    [group],
  );
  // Piece chips only when the group mixes pieces (e.g. pants + shorts).
  const pieceFilters = useMemo(
    () =>
      group && group.types.length > 1
        ? (group.types.filter((type) => type !== "Look") as OutfitPiece[])
        : [],
    [group],
  );
  const styleFilters = useMemo(
    () => [...new Set(items.map((item) => item.category))],
    [items],
  );

  if (!group) {
    return <NotFound title={t.notFound.outfit} onBack={navigation.goBack} />;
  }

  // Category without items yet (e.g. hairstyles before they're added).
  if (items.length === 0) {
    return (
      <SafeAreaView className="flex-1 bg-background">
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.background}
        />
        <ScreenHeader
          title={t.outfitFlow.groups[group.id].title}
          subtitle={t.outfitFlow.groups[group.id].subtitle}
          onBack={() => navigation.goBack()}
        />
        <View className="flex-1 items-center justify-center px-8 pb-24">
          <View
            className="h-24 w-24 items-center justify-center rounded-full"
            style={{
              backgroundColor: withAlpha(group.accent, 0.16),
              borderWidth: 1,
              borderColor: withAlpha(group.accent, 0.45),
            }}
          >
            <Sparkles size={42} color={group.accent} />
          </View>
          <Text className="mt-5 text-xl font-extrabold text-foreground">
            {t.outfitFlow.categoryComingSoon}
          </Text>
          <Text className="mt-2 text-center text-sm text-muted">
            {t.outfitFlow.categoryComingSoonMessage}
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <ItemCatalog
      title={t.outfitFlow.groups[group.id].title}
      subtitle={t.outfitFlow.collectionSubtitle(items.length)}
      items={items}
      pieceFilters={pieceFilters}
      styleFilters={styleFilters}
      emptyCopy={t.outfits}
      onBack={navigation.goBack}
      onOpenItem={(item) => {
        withCustomTab(() =>
          navigation.navigate("OutfitLetsGo", { outfitId: item.id }),
        );
      }}
    />
  );
}
