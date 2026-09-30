import { useMemo } from "react";
import { FlatList, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AdBanner from "../components/AdBanner";
import EmoteCard, { type Emote } from "../components/EmoteCard";
import NativeAdRow from "../components/NativeAdRow";
import ScreenHeader from "../components/ScreenHeader";
import { Text } from "../components/Text";
import { useNativeAds, withNativeAds } from "../ads/native";
import { emotes } from "../data/data";
import type { RootStackScreenProps } from "../navigation/types";
import { colors } from "../theme/colors";

type Props = RootStackScreenProps<"Emotes">;

const COLUMNS = 3;
/** A full-width native ad after every this many rows (6 emotes). */
const AD_EVERY_ROWS = 2;

const RowGap = () => <View className="h-3" />;

/** Splits emotes into rows so a full-width ad can sit between rows. */
function toRows(items: Emote[]) {
  const rows: Emote[][] = [];
  for (let i = 0; i < items.length; i += COLUMNS) {
    rows.push(items.slice(i, i + COLUMNS));
  }
  return rows;
}

export default function AllEmotesScreen({ navigation }: Props) {
  const nativeAds = useNativeAds();

  const listItems = useMemo(
    () =>
      withNativeAds(
        toRows(emotes),
        nativeAds,
        (row) => row.map((emote) => emote.id).join("|"),
        AD_EVERY_ROWS,
      ),
    [nativeAds],
  );

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      <FlatList
        data={listItems}
        keyExtractor={(entry) => entry.key}
        ListHeaderComponent={
          <View>
            <ScreenHeader
              title="Emotes"
              subtitle="Show off your vibe"
              onBack={() => navigation.goBack()}
            />
            <View className="mb-4 flex-row items-end justify-between px-5">
              <Text className="text-lg font-extrabold text-foreground">
                All Emotes
              </Text>
              <Text className="text-xs font-medium text-muted">
                {emotes.length} emotes
              </Text>
            </View>
          </View>
        }
        ItemSeparatorComponent={RowGap}
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: entry }) =>
          entry.kind === "ad" ? (
            <View className="px-5">
              <NativeAdRow ad={entry.ad} />
            </View>
          ) : (
            <View className="flex-row justify-between px-5">
              {entry.item.map((emote) => (
                <EmoteCard
                  key={emote.id}
                  emote={emote}
                  onPress={() =>
                    navigation.navigate("EmoteDetails", { emoteId: emote.id })
                  }
                />
              ))}
              {/* Keep a short last row aligned to the grid */}
              {Array.from({ length: COLUMNS - entry.item.length }, (_, i) => (
                <View key={`spacer-${i}`} className="w-[31.5%]" />
              ))}
            </View>
          )
        }
      />
      <AdBanner />
    </SafeAreaView>
  );
}
