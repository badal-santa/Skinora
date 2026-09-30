import DownloadableDetails from "../components/DownloadableDetails";
import NotFound from "../components/NotFound";
import { outfits } from "../data/data";
import type { RootStackScreenProps } from "../navigation/types";

type Props = RootStackScreenProps<"OutfitDetails">;

export default function OutfitDetailsScreen({ navigation, route }: Props) {
  const outfit = outfits.find((item) => item.id === route.params.outfitId);

  if (!outfit) {
    return <NotFound title="Outfit not found" onBack={navigation.goBack} />;
  }

  return (
    <DownloadableDetails
      name={outfit.name}
      image={outfit.image}
      accent={outfit.accent}
      onBack={navigation.goBack}
    />
  );
}
