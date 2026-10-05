import { ScrollView, StatusBar, View } from "react-native";
import { Text } from "../components/Text";
import { SafeAreaView } from "react-native-safe-area-context";
import type { ParamlessRoute, RootStackScreenProps } from "../navigation/types";
import { colors } from "../theme/colors";
import CategoryCard from "../components/CategoryCard";
import HomeHeader from "../components/HomeHeader";
import FeaturedCarousel from "../components/FeaturedCarousel";
import ToolTile from "../components/ToolTile";
import PromoAdCard from "../components/PromoAdCard";
import { AudioLines, Calculator, Gamepad2 } from "lucide-react-native";
import { categories, featuredSlides } from "../data/data";
import { useT } from "../i18n/language";
import { withCustomTab } from "../customTab/customTab";

type Props = RootStackScreenProps<"Home">;

export default function HomeScreen({ navigation }: Props) {
  const t = useT();
  const openSection = (route: ParamlessRoute) => {
    withCustomTab(() => navigation.navigate(route));
  };

  // Category copy lives in the translations, keyed by category id.
  const copyFor = (categoryId: string) =>
    t.categories[categoryId as keyof typeof t.categories];

  const slides = featuredSlides.map((slide) => {
    const copy = copyFor(slide.id.replace("featured-", ""));
    return copy
      ? {
          ...slide,
          tag: copy.featuredTag,
          title: copy.title,
          subtitle: copy.featuredSubtitle,
        }
      : slide;
  });

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 36 }}
      >
        <HomeHeader onPressSettings={() => navigation.navigate("Settings")} />

        {/* Ad card: the dashboard picks one of these spots (`at`). */}
        <PromoAdCard at="top" style={{ paddingHorizontal: 20, marginBottom: 16 }} />

        {/* Featured carousel */}
        <FeaturedCarousel
          slides={slides}
          onPressSlide={(slide) => openSection(slide.route)}
        />

        <PromoAdCard at="afterSlider" style={{ paddingHorizontal: 20, marginTop: 20 }} />

        {/* Categories */}
        <View className="mt-7 px-5">
          <View className="mb-4 flex-row items-center justify-between">
            <Text className="text-xl font-extrabold text-foreground">
              {t.home.exploreCategories}
            </Text>
          </View>

          <View className="flex-row flex-wrap justify-between gap-y-3">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.id}
                category={{ ...category, ...copyFor(category.id) }}
                // A lone last card spans the row instead of leaving a gap.
                fullWidth={
                  categories.length % 2 === 1 &&
                  index === categories.length - 1
                }
                onPress={() => openSection(category.route)}
              />
            ))}
          </View>

          <PromoAdCard at="afterCategories" isDefault style={{ marginTop: 16 }} />

          {/* Tools */}
          <View className="mt-4 flex-row justify-between">
            <ToolTile
              title={t.games.homeTitle}
              subtitle={t.games.homeSubtitle}
              icon={Gamepad2}
              accent={colors.neon.violet}
              onPress={() => openSection("Games")}
            />
            <ToolTile
              title={t.calculator.homeTitle}
              subtitle={t.calculator.homeSubtitle}
              icon={Calculator}
              accent={colors.neon.gold}
              onPress={() => openSection("CalculatorHub")}
            />
          </View>
          <View className="mt-4">
            <ToolTile
              fullWidth
              title={t.sounds.homeTitle}
              subtitle={t.sounds.homeSubtitle}
              icon={AudioLines}
              accent={colors.secondary}
              onPress={() => openSection("Sounds")}
            />
          </View>

          <PromoAdCard at="bottom" style={{ marginTop: 16 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
