import { useMemo } from "react";
import { FlatList, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AccessoryCard from "../components/AccessoryCard";
import AdBanner from "../components/AdBanner";
import NativeAdRow from "../components/NativeAdRow";
import ScreenHeader from "../components/ScreenHeader";
import { useNativeAds, withNativeAds } from "../ads/native";
import { accessories } from "../data/data";
import type { RootStackScreenProps } from "../navigation/types";
import { colors } from "../theme/colors";

type Props = RootStackScreenProps<"Accessories">;

/** A full-width native ad after every this many accessories. */
const AD_EVERY = 5;

const RowGap = () => <View className="h-3" />;

export default function AllAccessoriesScreen({ navigation }: Props) {
  const nativeAds = useNativeAds();
  const listItems = useMemo(
    () => withNativeAds(accessories, nativeAds, (item) => item.id, AD_EVERY),
    [nativeAds],
  );

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      <FlatList
        data={listItems}
        keyExtractor={(entry) => entry.key}
        ListHeaderComponent={
          <>
            <ScreenHeader
              title="Accessories"
              subtitle="Caps, kicks & finishing touches"
              onBack={() => navigation.goBack()}
            />
          </>
        }
        ItemSeparatorComponent={RowGap}
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: entry }) => (
          <View className="px-5">
            {entry.kind === "ad" ? (
              <NativeAdRow ad={entry.ad} />
            ) : (
              <AccessoryCard
                item={entry.item}
                onPress={() =>
                  navigation.navigate("AccessoryDetails", {
                    accessoryId: entry.item.id,
                  })
                }
              />
            )}
          </View>
        )}
      />
      <AdBanner />
    </SafeAreaView>
  );
}
