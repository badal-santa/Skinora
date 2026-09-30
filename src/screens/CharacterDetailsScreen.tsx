import DownloadableDetails from "../components/DownloadableDetails";
import NotFound from "../components/NotFound";
import { characters } from "../data/data";
import type { RootStackScreenProps } from "../navigation/types";

type Props = RootStackScreenProps<"CharacterDetails">;

export default function CharacterDetailsScreen({ navigation, route }: Props) {
  const character = characters.find(
    (item) => item.id === route.params.characterId,
  );

  if (!character) {
    return <NotFound title="Character not found" onBack={navigation.goBack} />;
  }

  return (
    <DownloadableDetails
      name={character.name}
      image={character.image}
      accent={character.accent}
      onBack={navigation.goBack}
    />
  );
}
