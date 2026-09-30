import { ScrollView, StatusBar, View } from "react-native";
import { Text } from "../components/Text";
import { SafeAreaView } from "react-native-safe-area-context";
import type { ParamlessRoute, RootStackScreenProps } from "../navigation/types";
import { colors } from "../theme/colors";
import CategoryCard from "../components/CategoryCard";
import HomeHeader from "../components/HomeHeader";
import FeaturedCarousel from "../components/FeaturedCarousel";
import { categories, featuredSlides } from "../data/data";
import { useT } from "../i18n/language";
import { openCustomTabOnClick } from "../customTab/customTab";

type Props = RootStackScreenProps<"Home">;

export default function HomeScreen({ navigation }: Props) {
  const t = useT();
  const openSection = (route: ParamlessRoute) => {
    navigation.navigate(route);
    openCustomTabOnClick();
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

        {/* Featured carousel */}
        <FeaturedCarousel
          slides={slides}
          onPressSlide={(slide) => openSection(slide.route)}
        />

        {/* Categories */}
        <View className="mt-7 px-5">
          <View className="mb-4 flex-row items-center justify-between">
            <Text className="text-xl font-extrabold text-foreground">
              {t.home.exploreCategories}
            </Text>
          </View>

          <View className="flex-row flex-wrap justify-between gap-y-3">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={{ ...category, ...copyFor(category.id) }}
                onPress={() => openSection(category.route)}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
