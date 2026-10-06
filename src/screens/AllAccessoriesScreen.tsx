import { FlatList, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AccessoryCard from "../components/AccessoryCard";
import ScreenHeader from "../components/ScreenHeader";
import PromoAdCard from "../components/PromoAdCard";
import { LIST_AD_SPOT, listAdAfterRow } from "../ads/listAds";
import { accessories } from "../data/data";
import { useT } from "../i18n/language";
import { withCustomTab } from "../customTab/customTab";
import type { RootStackScreenProps } from "../navigation/types";
import { colors } from "../theme/colors";

type Props = RootStackScreenProps<"Accessories">;

const RowGap = () => <View className="h-3" />;

export default function AllAccessoriesScreen({ navigation }: Props) {
  const t = useT();

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      <FlatList
        data={accessories}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <View>
            <ScreenHeader
              title={t.accessories.title}
              subtitle={t.accessories.subtitle}
              onBack={() => navigation.goBack()}
            />
            <PromoAdCard at="top" style={{ paddingHorizontal: 20, marginBottom: 16 }} />
          </View>
        }
        ListFooterComponent={
          <PromoAdCard at="bottom" style={{ paddingHorizontal: 20, marginTop: 12 }} />
        }
        ItemSeparatorComponent={RowGap}
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View className="px-5">
            <AccessoryCard
              item={item}
              onPress={() => {
                withCustomTab(() =>
                  navigation.navigate("AccessoryDetails", {
                    accessoryId: item.id,
                  }),
                );
              }}
            />
            {listAdAfterRow(index) !== null && (
              <PromoAdCard
                at={LIST_AD_SPOT}
                isDefault
                occurrence={listAdAfterRow(index)!}
                layout="side"
                style={{ marginTop: 12 }}
              />
            )}
          </View>
        )}
      />
    </SafeAreaView>
  );
}
