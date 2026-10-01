import { KeyRound } from "lucide-react-native";
import DownloadableDetails from "../components/DownloadableDetails";
import NotFound from "../components/NotFound";
import { wardrobe } from "../data/data";
import { withCustomTab } from "../customTab/customTab";
import { useT } from "../i18n/language";
import type { RootStackScreenProps } from "../navigation/types";

type Props = RootStackScreenProps<"OutfitPreview">;

export default function OutfitPreviewScreen({ navigation, route }: Props) {
  const t = useT();
  const outfit = wardrobe.find((item) => item.id === route.params.outfitId);

  if (!outfit) {
    return <NotFound title={t.notFound.outfit} onBack={navigation.goBack} />;
  }

  return (
    <DownloadableDetails
      name={outfit.name}
      image={outfit.image}
      accent={outfit.accent}
      onBack={navigation.goBack}
      primaryAction={{
        label: t.outfitFlow.getId,
        icon: KeyRound,
        onPress: () => {
          withCustomTab(() =>
            navigation.navigate("OutfitScratch", { outfitId: outfit.id }),
          );
        },
      }}
    />
  );
}
