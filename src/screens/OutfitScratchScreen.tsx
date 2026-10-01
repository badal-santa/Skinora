import { useState } from "react";
import {
  Image,
  Pressable,
  StatusBar,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import * as Clipboard from "expo-clipboard";
import { Check, Clock, Copy } from "lucide-react-native";
import NotFound from "../components/NotFound";
import PromoAdCard from "../components/PromoAdCard";
import ScratchCard from "../components/ScratchCard";
import ScreenHeader from "../components/ScreenHeader";
import { Text } from "../components/Text";
import { wardrobe } from "../data/data";
import { label, useT } from "../i18n/language";
import type { RootStackScreenProps } from "../navigation/types";
import { colors, withAlpha } from "../theme/colors";

type Props = RootStackScreenProps<"OutfitScratch">;

const CARD_HEIGHT = 170;

export default function OutfitScratchScreen({ navigation, route }: Props) {
  const t = useT();
  const { width: screenWidth } = useWindowDimensions();
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);
  const outfit = wardrobe.find((item) => item.id === route.params.outfitId);

  if (!outfit) {
    return <NotFound title={t.notFound.outfit} onBack={navigation.goBack} />;
  }

  const { name, image, accent, category } = outfit;
  const itemId = outfit.itemId?.trim() ?? "";
  const cardWidth = screenWidth - 40;

  const copyId = async () => {
    await Clipboard.setStringAsync(itemId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      <ScreenHeader
        title={t.outfitFlow.scratchTitle}
        subtitle={t.outfitFlow.scratchSubtitle}
        onBack={() => navigation.goBack()}
      />

      <View className="flex-1 px-5">
        {/* Outfit */}
        <View
          className="flex-row items-center rounded-3xl border p-3"
          style={{
            borderColor: withAlpha(accent, 0.35),
            backgroundColor: withAlpha(accent, 0.08),
          }}
        >
          <View
            className="h-16 w-16 items-center justify-center rounded-2xl"
            style={{ backgroundColor: withAlpha(accent, 0.16) }}
          >
            <Image
              source={image}
              resizeMode="contain"
              style={{ width: 58, height: 58 }}
            />
          </View>
          <View className="ml-3 flex-1">
            <Text
              className="text-base font-bold text-foreground"
              numberOfLines={1}
            >
              {name}
            </Text>
            <Text className="text-xs text-muted">{label(t, category)}</Text>
          </View>
        </View>

        {/* Scratch card */}
        <View className="mt-6">
          <ScratchCard
            width={cardWidth}
            height={CARD_HEIGHT}
            hint={t.outfitFlow.scratchHint}
            onRevealed={() => setRevealed(true)}
          >
            <LinearGradient
              colors={[withAlpha(accent, 0.3), colors.card]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 24,
                borderWidth: 1.5,
                borderColor: accent,
                paddingHorizontal: 20,
              }}
            >
              {itemId ? (
                <>
                  <Text className="text-[11px] font-extrabold tracking-[3px] text-muted">
                    {t.outfitFlow.idLabel}
                  </Text>
                  <Text
                    selectable
                    className="mt-2 text-[34px] font-black tracking-[2px] text-foreground"
                    numberOfLines={1}
                    adjustsFontSizeToFit
                    minimumFontScale={0.5}
                    style={{
                      textShadowColor: accent,
                      textShadowRadius: 14,
                      textShadowOffset: { width: 0, height: 0 },
                    }}
                  >
                    {itemId}
                  </Text>
                </>
              ) : (
                <>
                  <Clock size={30} color={accent} />
                  <Text className="mt-2 text-lg font-extrabold text-foreground">
                    {t.outfitFlow.comingSoon}
                  </Text>
                  <Text className="mt-1 text-center text-xs text-muted">
                    {t.outfitFlow.comingSoonMessage}
                  </Text>
                </>
              )}
            </LinearGradient>
          </ScratchCard>
        </View>

        {revealed && itemId ? (
          <>
            <Pressable
              onPress={copyId}
              accessibilityRole="button"
              accessibilityLabel={t.outfitFlow.copy}
              className="mt-6 h-14 flex-row items-center justify-center rounded-2xl active:opacity-90"
              style={{
                backgroundColor: accent,
                shadowColor: accent,
                shadowOpacity: 0.55,
                shadowRadius: 16,
                shadowOffset: { width: 0, height: 4 },
                elevation: 8,
              }}
            >
              {copied ? (
                <Check size={18} color={colors.background} strokeWidth={3} />
              ) : (
                <Copy size={18} color={colors.background} strokeWidth={2.6} />
              )}
              <Text className="ml-2 text-base font-extrabold text-background">
                {copied ? t.outfitFlow.copied : t.outfitFlow.copy}
              </Text>
            </Pressable>
            <Text className="mt-3 text-center text-xs leading-5 text-muted">
              {t.outfitFlow.howToUse}
            </Text>
          </>
        ) : null}

        <PromoAdCard compact style={{ marginTop: 24 }} />
      </View>
    </SafeAreaView>
  );
}
