import {
  FlatList,
  Image,
  Pressable,
  StatusBar,
  View,
  type ImageSourcePropType,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Sparkles } from "lucide-react-native";
import ScreenHeader from "../components/ScreenHeader";
import PromoAdCard from "../components/PromoAdCard";
import { Text } from "../components/Text";
import { outfitCategories, wardrobe } from "../data/data";
import { withCustomTab } from "../customTab/customTab";
import { useT } from "../i18n/language";
import type { RootStackScreenProps } from "../navigation/types";
import { colors, withAlpha } from "../theme/colors";

type Props = RootStackScreenProps<"Outfits">;

/** The ad card sits after this many category cards. */
const AD_AFTER = 3;

type Group = (typeof outfitCategories)[number] & {
  count: number;
  /** The group's own art, else its first item; none while it's empty. */
  art?: ImageSourcePropType;
};

const groups: Group[] = outfitCategories.map((group) => {
  const items = wardrobe.filter((item) => group.types.includes(item.type));
  const firstItem =
    items.find((item) => item.type === group.types[0]) ?? items[0];
  return { ...group, count: items.length, art: group.cover ?? firstItem?.image };
});

const RowGap = () => <View className="h-4" />;

export default function OutfitCategoriesScreen({ navigation }: Props) {
  const t = useT();

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      <FlatList
        data={groups}
        keyExtractor={(group) => group.id}
        ListHeaderComponent={
          <View>
            <ScreenHeader
              title={t.outfitFlow.categoriesTitle}
              subtitle={t.outfitFlow.categoriesSubtitle}
              onBack={() => navigation.goBack()}
            />
            <PromoAdCard at="top" style={{ paddingHorizontal: 20, marginBottom: 16 }} />
          </View>
        }
        ListFooterComponent={
          <PromoAdCard at="bottom" style={{ paddingHorizontal: 20, marginTop: 16 }} />
        }
        ItemSeparatorComponent={RowGap}
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: group, index }) => {
          const copy = t.outfitFlow.groups[group.id];
          const ad =
            index === AD_AFTER - 1 ? (
              <PromoAdCard at="after3" isDefault style={{ marginTop: 16 }} />
            ) : null;
          return (
            <View className="px-5">
              <CategoryCard
                group={group}
                title={copy.title}
                subtitle={copy.subtitle}
                cta={t.outfitFlow.clickHere}
                count={
                  group.count
                    ? t.outfitFlow.count(group.count)
                    : t.outfitFlow.categoryComingSoon
                }
                onPress={() =>
                  withCustomTab(() =>
                    navigation.navigate("OutfitCollection", {
                      category: group.id,
                    }),
                  )
                }
              />
              {ad}
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

type CardProps = {
  group: Group;
  title: string;
  subtitle: string;
  cta: string;
  count: string;
  onPress: () => void;
};

function CategoryCard({
  group,
  title,
  subtitle,
  cta,
  count,
  onPress,
}: CardProps) {
  const { accent, art } = group;

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`${title}. ${subtitle} ${count}`}
      className="active:opacity-85"
    >
      <View
        style={{
          height: 156,
          borderRadius: 24,
          overflow: "hidden",
          borderWidth: 1.5,
          borderColor: withAlpha(accent, 0.55),
          backgroundColor: "#141414",
        }}
      >
        {/* Accent wash from the top corners, dark at the bottom */}
        <LinearGradient
          colors={[withAlpha(accent, 0.22), "transparent"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.6, y: 0.8 }}
          style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0 }}
        />
        <LinearGradient
          colors={["transparent", withAlpha(accent, 0.14)]}
          start={{ x: 0.4, y: 0 }}
          end={{ x: 1, y: 0.4 }}
          style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0 }}
        />

        <View className="flex-1 flex-row items-center pl-5">
          <View className="flex-1 pr-2">
            <Text
              className="text-[22px] font-bold"
              style={{ color: accent }}
              numberOfLines={1}
              adjustsFontSizeToFit
              minimumFontScale={0.7}
            >
              {title}
            </Text>
            <Text
              className="mt-0.5 text-[12px] text-foreground/75"
              numberOfLines={2}
            >
              {subtitle}
            </Text>

            {/* CLICK HERE pill */}
            <View
              className="mt-4 self-start overflow-hidden rounded-full"
              style={{ borderWidth: 1.5, borderColor: accent }}
            >
              <LinearGradient
                colors={[withAlpha(accent, 0.05), withAlpha(accent, 0.4)]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ paddingHorizontal: 18, paddingVertical: 7 }}
              >
                <Text className="text-[11px] font-bold tracking-[0.5px] text-foreground">
                  {cta}
                </Text>
              </LinearGradient>
            </View>
          </View>

          {/* Piece with a soft floor shadow */}
          <View className="mr-3 items-center justify-center">
            {art ? (
              <Image
                source={art}
                resizeMode="contain"
                style={{ width: 132, height: 120 }}
              />
            ) : (
              <View
                className="h-[120px] w-[132px] items-center justify-center"
                accessibilityElementsHidden
              >
                <View
                  className="h-24 w-24 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: withAlpha(accent, 0.16),
                    borderWidth: 1,
                    borderColor: withAlpha(accent, 0.45),
                  }}
                >
                  <Sparkles size={40} color={accent} />
                </View>
              </View>
            )}
            <LinearGradient
              colors={["transparent", "rgba(0,0,0,0.7)", "transparent"]}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={{ marginTop: 2, height: 8, width: 110, borderRadius: 99 }}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
}
