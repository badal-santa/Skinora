import DownloadableDetails from "../components/DownloadableDetails";
import NotFound from "../components/NotFound";
import { emotes } from "../data/data";
import { useT } from "../i18n/language";
import type { RootStackScreenProps } from "../navigation/types";

type Props = RootStackScreenProps<"EmoteDetails">;

export default function EmoteDetailsScreen({ navigation, route }: Props) {
  const t = useT();
  const emote = emotes.find((item) => item.id === route.params.emoteId);

  if (!emote) {
    return <NotFound title={t.notFound.emote} onBack={navigation.goBack} />;
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
