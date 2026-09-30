import DownloadableDetails from "../components/DownloadableDetails";
import NotFound from "../components/NotFound";
import { accessories } from "../data/data";
import { useT } from "../i18n/language";
import type { RootStackScreenProps } from "../navigation/types";

type Props = RootStackScreenProps<"AccessoryDetails">;

export default function AccessoryDetailsScreen({ navigation, route }: Props) {
  const t = useT();
  const accessory = accessories.find(
    (item) => item.id === route.params.accessoryId,
  );

  if (!accessory) {
    return <NotFound title={t.notFound.accessory} onBack={navigation.goBack} />;
  }

  return (
    <DownloadableDetails
      name={accessory.name}
      image={accessory.image}
      accent={accessory.accent}
      onBack={navigation.goBack}
    />
  );
}
