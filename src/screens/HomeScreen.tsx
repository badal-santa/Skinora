import { ScrollView, StatusBar, View } from "react-native";
import { Text } from "../components/Text";
import { SafeAreaView } from "react-native-safe-area-context";
import type { ParamlessRoute, RootStackScreenProps } from "../navigation/types";
import { showInterstitialOnSectionOpen } from "../ads/interstitial";
import { colors } from "../theme/colors";
import CategoryCard from "../components/CategoryCard";
import HomeHeader from "../components/HomeHeader";
import FeaturedCarousel from "../components/FeaturedCarousel";
import AdBanner from "../components/AdBanner";
import { categories, featuredSlides } from "../data/data";

type Props = RootStackScreenProps<"Home">;

export default function HomeScreen({ navigation }: Props) {
  // Opening a section is a natural break for an interstitial (min-gap capped).
  const openSection = (route: ParamlessRoute) => {
    showInterstitialOnSectionOpen();
    navigation.navigate(route);
  };

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
          slides={featuredSlides}
          onPressSlide={(slide) => openSection(slide.route)}
        />

        <View className="mt-6">
          <AdBanner />
        </View>

        {/* Categories */}
        <View className="mt-7 px-5">
          <View className="mb-4 flex-row items-center justify-between">
            <Text className="text-xl font-extrabold text-foreground">
              Explore Categories
            </Text>
          </View>

          <View className="flex-row flex-wrap justify-between gap-y-3">
            {categories.map((category: any) => (
              <CategoryCard
                key={category?.id}
                category={category}
                onPress={() => openSection(category.route)}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
