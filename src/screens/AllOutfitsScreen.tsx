import ItemCatalog from "../components/ItemCatalog";
import { outfitPieceFilters, outfitStyleFilters, outfits } from "../data/data";
import type { RootStackScreenProps } from "../navigation/types";

type Props = RootStackScreenProps<"Outfits">;

export default function AllOutfitsScreen({ navigation }: Props) {
  return (
    <ItemCatalog
      title="All Outfits"
      subtitle="Find your next favorite look"
      items={outfits}
      pieceFilters={outfitPieceFilters}
      styleFilters={outfitStyleFilters}
      noun="outfits"
      onBack={navigation.goBack}
      onOpenItem={(item) =>
        navigation.navigate("OutfitDetails", { outfitId: item.id })
      }
    />
  );
}
