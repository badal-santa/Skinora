import DownloadableDetails from "../components/DownloadableDetails";
import NotFound from "../components/NotFound";
import { emotes } from "../data/data";
import type { RootStackScreenProps } from "../navigation/types";

type Props = RootStackScreenProps<"EmoteDetails">;

export default function EmoteDetailsScreen({ navigation, route }: Props) {
  const emote = emotes.find((item) => item.id === route.params.emoteId);

  if (!emote) {
    return <NotFound title="Emote not found" onBack={navigation.goBack} />;
  }

  return (
    <DownloadableDetails
      name={emote.name}
      image={emote.image}
      accent={emote.accent}
      onBack={navigation.goBack}
    />
  );
}
