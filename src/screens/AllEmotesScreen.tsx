import { FlatList, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EmoteCard, { type Emote } from "../components/EmoteCard";
import ScreenHeader from "../components/ScreenHeader";
import PromoAdCard from "../components/PromoAdCard";
import { LIST_AD_SPOT, listAdAfterRow } from "../ads/listAds";
import { Text } from "../components/Text";
import { emotes } from "../data/data";
import { useT } from "../i18n/language";
import { withCustomTab } from "../customTab/customTab";
import type { RootStackScreenProps } from "../navigation/types";
import { colors } from "../theme/colors";

type Props = RootStackScreenProps<"Emotes">;

const COLUMNS = 3;

const RowGap = () => <View className="h-3" />;

/** Splits emotes into rows of `COLUMNS`. */
function toRows(items: Emote[]) {
  const rows: Emote[][] = [];
  for (let i = 0; i < items.length; i += COLUMNS) {
    rows.push(items.slice(i, i + COLUMNS));
  }
  return rows;
}

const rows = toRows(emotes);

export default function AllEmotesScreen({ navigation }: Props) {
  const t = useT();

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <ScreenHeader
        title={t.emotes.title}
        subtitle={t.emotes.subtitle}
        onBack={() => navigation.goBack()}
      />
      {/* Sticky ad strip: stays under the header while the list scrolls */}
      <PromoAdCard variant="banner" style={{ marginBottom: 12 }} />

      <FlatList
        data={rows}
        keyExtractor={(row) => row.map((emote) => emote.id).join("|")}
        ListHeaderComponent={
          <View>
            <PromoAdCard at="top" style={{ paddingHorizontal: 20, marginBottom: 16 }} />
            <View className="mb-4 flex-row items-end justify-between px-5">
              <Text className="text-lg font-extrabold text-foreground">
                {t.emotes.all}
              </Text>
              <Text className="text-xs font-medium text-muted">
                {t.emotes.count(emotes.length)}
              </Text>
            </View>
          </View>
        }
        ListFooterComponent={
          <PromoAdCard at="bottom" style={{ paddingHorizontal: 20, marginTop: 12 }} />
        }
        ItemSeparatorComponent={RowGap}
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: row, index }) => (
          <View>
            <View className="flex-row justify-between px-5">
              {row.map((emote) => (
                <EmoteCard
                  key={emote.id}
                  emote={emote}
                  onPress={() => {
                    withCustomTab(() =>
                      navigation.navigate("EmoteDetails", {
                        emoteId: emote.id,
                      }),
                    );
                  }}
                />
              ))}
              {/* Keep a short last row aligned to the grid */}
              {Array.from({ length: COLUMNS - row.length }, (_, i) => (
                <View key={`spacer-${i}`} className="w-[31.5%]" />
              ))}
            </View>
            {listAdAfterRow(index) !== null && (
              <PromoAdCard
                at={LIST_AD_SPOT}
                isDefault
                occurrence={listAdAfterRow(index)!}
                layout="side"
                style={{ marginTop: 12, paddingHorizontal: 20 }}
              />
            )}
          </View>
        )}
      />
    </SafeAreaView>
  );
}
