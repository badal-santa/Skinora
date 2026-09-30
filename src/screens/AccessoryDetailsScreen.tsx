import DownloadableDetails from "../components/DownloadableDetails";
import NotFound from "../components/NotFound";
import { accessories } from "../data/data";
import type { RootStackScreenProps } from "../navigation/types";

type Props = RootStackScreenProps<"AccessoryDetails">;

export default function AccessoryDetailsScreen({ navigation, route }: Props) {
  const accessory = accessories.find(
    (item) => item.id === route.params.accessoryId,
  );

  if (!accessory) {
    return <NotFound title="Accessory not found" onBack={navigation.goBack} />;
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
