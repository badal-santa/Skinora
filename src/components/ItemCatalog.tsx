import { useMemo, useState } from "react";
import { FlatList, Pressable, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "./Text";
import OutfitCard, { type Outfit, type OutfitPiece } from "./OutfitCard";
import ScreenHeader from "./ScreenHeader";
import AdBanner from "./AdBanner";
import NativeAdCard from "./NativeAdCard";
import { useNativeAds, withNativeAds } from "../ads/native";
import { colors } from "../theme/colors";

type Props = {
  title: string;
  subtitle: string;
  items: Outfit[];
  /** Filter chips by item type, e.g. ["Cap", "Shoes"]. */
  pieceFilters: OutfitPiece[];
  /** Filter chips by style, e.g. ["Streetwear", "Casual"]. */
  styleFilters: string[];
  /** Plural noun for empty states, e.g. "outfits". */
  noun: string;
  onBack: () => void;
  onOpenItem: (item: Outfit) => void;
};

const RowGap = () => <View className="h-4" />;

/**
 * Filterable 2-column grid of items with favourites, native ads and a banner.
 * Shared by the All Outfits and All Accessories screens.
 */
export default function ItemCatalog({
  title,
  subtitle,
  items,
  pieceFilters,
  styleFilters,
  noun,
  onBack,
  onOpenItem,
}: Props) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [favoritesOnly, setFavoritesOnly] = useState(false);

  const filters = useMemo(
    () => ["All", ...pieceFilters, ...styleFilters],
    [pieceFilters, styleFilters],
  );

  const filteredItems = useMemo(() => {
    const matchesFilter = (item: Outfit) => {
      if (activeFilter === "All") return true;
      if ((pieceFilters as string[]).includes(activeFilter)) {
        return item.type === activeFilter;
      }
      return item.category === activeFilter;
    };
    return items.filter(
      (item) =>
        matchesFilter(item) && (!favoritesOnly || favorites.includes(item.id)),
    );
  }, [items, pieceFilters, activeFilter, favoritesOnly, favorites]);

  const nativeAds = useNativeAds();
  const gridItems = useMemo(
    () => withNativeAds(filteredItems, nativeAds, (item) => item.id),
    [filteredItems, nativeAds],
  );

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const header = (
    <View>
      <ScreenHeader title={title} subtitle={subtitle} onBack={onBack} />

      {/* Filters */}
      <FlatList
        horizontal
        data={filters}
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 20,
          gap: 10,
        }}
        renderItem={({ item, index }) => {
          const isActive = activeFilter === item;
          // Divider between piece filters and style filters
          const isFirstStyle = index === pieceFilters.length + 1;
          return (
            <View className="flex-row items-center">
              {isFirstStyle && <View className="mr-2.5 h-5 w-px bg-border" />}
              <Pressable
                onPress={() => setActiveFilter(item)}
                accessibilityRole="button"
                accessibilityState={{ selected: isActive }}
                className={`rounded-full border px-5 py-2.5 ${
                  isActive
                    ? "border-primary bg-primary"
                    : "border-border bg-card"
                }`}
              >
                <Text
                  className={`text-xs font-bold ${isActive ? "text-background" : "text-muted"}`}
                >
                  {item}
                </Text>
              </Pressable>
            </View>
          );
        }}
      />
    </View>
  );

  const emptyState = (
    <View className="items-center px-8 py-16">
      <Text className="text-lg font-bold text-foreground">No {noun} found</Text>
      <Text className="mt-2 text-center text-sm text-muted">
        {favoritesOnly
          ? `No saved ${noun} match this filter.`
          : `No ${noun} with ${activeFilter === "All" ? "these filters" : activeFilter.toLowerCase()} yet.`}
      </Text>
      <Pressable
        onPress={() => {
          setActiveFilter("All");
          setFavoritesOnly(false);
        }}
        className="mt-6 rounded-full bg-primary px-6 py-3"
      >
        <Text className="text-sm font-bold text-background">
          Show all {noun}
        </Text>
      </Pressable>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      <FlatList
        data={gridItems}
        keyExtractor={(entry) => entry.key}
        numColumns={2}
        ListHeaderComponent={header}
        ListEmptyComponent={emptyState}
        columnWrapperStyle={{
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
        ItemSeparatorComponent={RowGap}
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: entry }) =>
          entry.kind === "ad" ? (
            <NativeAdCard ad={entry.ad} />
          ) : (
            <OutfitCard
              outfit={entry.item}
              isFavorite={favorites.includes(entry.item.id)}
              onToggleFavorite={toggleFavorite}
              onPress={() => onOpenItem(entry.item)}
            />
          )
        }
      />
      <AdBanner />
    </SafeAreaView>
  );
}
