import DownloadableDetails from "../components/DownloadableDetails";
import NotFound from "../components/NotFound";
import { outfits } from "../data/data";
import { useT } from "../i18n/language";
import type { RootStackScreenProps } from "../navigation/types";

type Props = RootStackScreenProps<"OutfitDetails">;

export default function OutfitDetailsScreen({ navigation, route }: Props) {
  const t = useT();
  const outfit = outfits.find((item) => item.id === route.params.outfitId);

  if (!outfit) {
    return <NotFound title={t.notFound.outfit} onBack={navigation.goBack} />;
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
