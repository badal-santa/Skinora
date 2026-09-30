import DownloadableDetails from "../components/DownloadableDetails";
import NotFound from "../components/NotFound";
import { characters } from "../data/data";
import { useT } from "../i18n/language";
import type { RootStackScreenProps } from "../navigation/types";

type Props = RootStackScreenProps<"CharacterDetails">;

export default function CharacterDetailsScreen({ navigation, route }: Props) {
  const t = useT();
  const character = characters.find(
    (item) => item.id === route.params.characterId,
  );

  if (!character) {
    return <NotFound title={t.notFound.character} onBack={navigation.goBack} />;
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
