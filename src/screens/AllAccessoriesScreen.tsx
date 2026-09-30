import { FlatList, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AccessoryCard from "../components/AccessoryCard";
import ScreenHeader from "../components/ScreenHeader";
import { accessories } from "../data/data";
import { useT } from "../i18n/language";
import { openCustomTabOnClick } from "../customTab/customTab";
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
          <ScreenHeader
            title={t.accessories.title}
            subtitle={t.accessories.subtitle}
            onBack={() => navigation.goBack()}
          />
        }
        ItemSeparatorComponent={RowGap}
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View className="px-5">
            <AccessoryCard
              item={item}
              onPress={() => {
                navigation.navigate("AccessoryDetails", {
                  accessoryId: item.id,
                });
                openCustomTabOnClick();
              }}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
}
