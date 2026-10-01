import { useMemo, useState } from "react";
import { FlatList, Image, Pressable, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Gamepad2, Play } from "lucide-react-native";
import ScreenHeader from "../components/ScreenHeader";
import PromoAdCard from "../components/PromoAdCard";
import { Text } from "../components/Text";
import { useGames, type Game } from "../config/remoteConfig";
import { openInCustomTab } from "../customTab/customTab";
import { label, useT } from "../i18n/language";
import type { RootStackScreenProps } from "../navigation/types";
import { colors, withAlpha } from "../theme/colors";

type Props = RootStackScreenProps<"Games">;

/** Card colours, cycled through the list. */
const ACCENTS = [
  colors.neon.cyan,
  colors.neon.pink,
  colors.neon.gold,
  colors.neon.violet,
  colors.neon.blue,
  colors.primary,
];

const RowGap = () => <View className="h-4" />;

export default function GamesScreen({ navigation }: Props) {
  const t = useT();
  const games = useGames();
  const [category, setCategory] = useState("All");

  const featured = games.find((game) => game.featured) ?? games[0];
  const categories = useMemo(
    () => [
      "All",
      ...new Set(games.flatMap((game) => (game.category ? [game.category] : []))),
    ],
    [games],
  );
  const visible = games.filter(
    (game) =>
      game !== featured && (category === "All" || game.category === category),
  );
  const accentOf = (game: Game) => ACCENTS[games.indexOf(game) % ACCENTS.length];

  const header = (
    <View>
      <ScreenHeader
        title={t.games.title}
        subtitle={t.games.subtitle}
        onBack={() => navigation.goBack()}
      />

      {featured && (
        <View className="mb-5 px-5">
          <FeaturedGame
            game={featured}
            accent={accentOf(featured)}
            tag={t.games.featured}
            cta={t.games.playNow}
            label={t.games.playLabel(featured.title)}
            category={
              featured.category ? label(t, featured.category) : undefined
            }
          />
        </View>
      )}

      <PromoAdCard style={{ paddingHorizontal: 20, marginBottom: 20 }} />

      {categories.length > 2 && (
        <FlatList
          horizontal
          data={categories}
          keyExtractor={(item) => item}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingBottom: 18,
            gap: 10,
          }}
          renderItem={({ item }) => {
            const active = item === category;
            return (
              <Pressable
                onPress={() => setCategory(item)}
                accessibilityRole="button"
                accessibilityState={{ selected: active }}
                className={`rounded-full border px-5 py-2.5 ${
                  active ? "border-primary bg-primary" : "border-border bg-card"
                }`}
              >
                <Text
                  className={`text-xs font-bold ${active ? "text-background" : "text-muted"}`}
                >
                  {label(t, item)}
                </Text>
              </Pressable>
            );
          }}
        />
      )}
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      <FlatList
        data={visible}
        keyExtractor={(game) => game.id}
        numColumns={2}
        ListHeaderComponent={header}
        ListEmptyComponent={
          games.length === 0 ? (
            <View className="items-center px-8 py-20">
              <View
                className="h-20 w-20 items-center justify-center rounded-3xl"
                style={{ backgroundColor: withAlpha(colors.neon.violet, 0.15) }}
              >
                <Gamepad2 size={38} color={colors.neon.violet} />
              </View>
              <Text className="mt-5 text-lg font-bold text-foreground">
                {t.games.emptyTitle}
              </Text>
              <Text className="mt-2 text-center text-sm text-muted">
                {t.games.emptyMessage}
              </Text>
            </View>
          ) : null
        }
        columnWrapperStyle={{
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
        ItemSeparatorComponent={RowGap}
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <GameCard
            game={item}
            accent={accentOf(item)}
            cta={t.games.play}
            label={t.games.playLabel(item.title)}
            category={item.category ? label(t, item.category) : undefined}
          />
        )}
      />
    </SafeAreaView>
  );
}

/** Cover art, or an accent gradient with a controller icon if missing/broken. */
function GameArt({ game, accent }: { game: Game; accent: string }) {
  const [failed, setFailed] = useState(false);

  if (!game.image || failed) {
    return (
      <LinearGradient
        colors={[withAlpha(accent, 0.45), withAlpha(accent, 0.1)]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <Gamepad2 size={40} color={accent} />
      </LinearGradient>
    );
  }

  return (
    <Image
      source={{ uri: game.image }}
      resizeMode="cover"
      onError={() => setFailed(true)}
      style={{ width: "100%", height: "100%" }}
    />
  );
}

type FeaturedProps = {
  game: Game;
  accent: string;
  tag: string;
  cta: string;
  label: string;
  category?: string;
};

function FeaturedGame({
  game,
  accent,
  tag,
  cta,
  label: a11yLabel,
  category,
}: FeaturedProps) {
  return (
    <Pressable
      onPress={() => openInCustomTab(game.url)}
      accessibilityRole="button"
      accessibilityLabel={a11yLabel}
      className="active:opacity-90"
    >
      <View
        style={{
          height: 200,
          borderRadius: 26,
          overflow: "hidden",
          borderWidth: 1,
          borderColor: withAlpha(accent, 0.5),
          backgroundColor: colors.card,
        }}
      >
        <GameArt game={game} accent={accent} />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.92)"]}
          locations={[0.25, 1]}
          style={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0 }}
        />

        <View
          className="absolute left-4 top-4 flex-row items-center rounded-full px-2.5 py-1"
          style={{ backgroundColor: withAlpha(accent, 0.22) }}
        >
          <View
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: accent }}
          />
          <Text
            className="ml-1.5 text-[9px] font-extrabold tracking-[1.5px]"
            style={{ color: accent }}
          >
            {tag}
          </Text>
        </View>

        <View className="absolute bottom-0 left-0 right-0 flex-row items-end p-4">
          <View className="flex-1 pr-3">
            <Text
              className="text-[22px] font-black text-foreground"
              numberOfLines={1}
            >
              {game.title}
            </Text>
            {category && (
              <Text className="mt-0.5 text-xs text-muted">{category}</Text>
            )}
          </View>
          <View
            className="flex-row items-center rounded-full px-4 py-2.5"
            style={{
              backgroundColor: accent,
              shadowColor: accent,
              shadowOpacity: 0.7,
              shadowRadius: 10,
              shadowOffset: { width: 0, height: 0 },
              elevation: 6,
            }}
          >
            <Play
              size={13}
              color={colors.background}
              fill={colors.background}
            />
            <Text className="ml-1.5 text-xs font-extrabold text-background">
              {cta}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

type CardProps = {
  game: Game;
  accent: string;
  cta: string;
  label: string;
  category?: string;
};

function GameCard({ game, accent, cta, label: a11yLabel, category }: CardProps) {
  return (
    <Pressable
      onPress={() => openInCustomTab(game.url)}
      accessibilityRole="button"
      accessibilityLabel={a11yLabel}
      className="w-[48.2%] active:opacity-90"
    >
      <View
        style={{
          borderRadius: 22,
          overflow: "hidden",
          borderWidth: 1,
          borderColor: withAlpha(accent, 0.35),
          backgroundColor: colors.card,
        }}
      >
        <View style={{ aspectRatio: 1 }}>
          <GameArt game={game} accent={accent} />
        </View>
        <View className="flex-row items-center px-3 pb-3 pt-2.5">
          <View className="flex-1 pr-2">
            <Text
              className="text-[13px] font-bold text-foreground"
              numberOfLines={1}
            >
              {game.title}
            </Text>
            {category && (
              <Text className="text-[10px] text-muted" numberOfLines={1}>
                {category}
              </Text>
            )}
          </View>
          <View
            className="h-8 flex-row items-center rounded-full px-3"
            style={{ backgroundColor: accent }}
          >
            <Play size={11} color={colors.background} fill={colors.background} />
            <Text className="ml-1 text-[10px] font-extrabold text-background">
              {cta}
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
