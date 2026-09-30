import ItemCatalog from "../components/ItemCatalog";
import { outfitPieceFilters, outfitStyleFilters, outfits } from "../data/data";
import { useT } from "../i18n/language";
import { openCustomTabOnClick } from "../customTab/customTab";
import type { RootStackScreenProps } from "../navigation/types";

type Props = RootStackScreenProps<"Outfits">;

export default function AllOutfitsScreen({ navigation }: Props) {
  const t = useT();

  return (
    <ItemCatalog
      title={t.outfits.title}
      subtitle={t.outfits.subtitle}
      items={outfits}
      pieceFilters={outfitPieceFilters}
      styleFilters={outfitStyleFilters}
      emptyCopy={t.outfits}
      onBack={navigation.goBack}
      onOpenItem={(item) => {
        navigation.navigate("OutfitDetails", { outfitId: item.id });
        openCustomTabOnClick();
      }}
    />
  );
}
