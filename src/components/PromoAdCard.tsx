import { useState } from "react";
import {
  Image,
  Pressable,
  View,
  type StyleProp,
  type ViewStyle,
} from "react-native";
import { Megaphone } from "lucide-react-native";
import { Text } from "./Text";
import { useRoute } from "@react-navigation/native";
import { usePlacementAds, usePlacementPositions, type PromoAd } from "../ads/ads";
import { openInCustomTab } from "../customTab/customTab";
import { useT } from "../i18n/language";
import { colors, withAlpha } from "../theme/colors";

type Variant = "card" | "banner" | "side";

type Props = {
  /**
   * - `card` (default): native-ad card with banner image and big button
   * - `banner`: slim full-width strip — logo, title, subtitle, small button
   * - `side`: image on the left, text and button on the right
   */
  variant?: Variant;
  /** `card` only: hide the banner image where vertical space is tight. */
  compact?: boolean;
  /** Spacing around the card; dropped along with it when there's no ad. */
  style?: StyleProp<ViewStyle>;
  /**
   * The spot on the screen this instance stands for (e.g. "top"). A screen
   * can render several; only the ones the dashboard chose for the placement
   * show. Ids must match the placement's positions in the backend.
   */
  at?: string;
  /** Shows when the dashboard hasn't chosen a spot (one per screen). */
  isDefault?: boolean;
};

/**
 * House ad in a native-ad layout: logo, title, subtitle, "AD" badge,
 * banner creative and a full-width button. Its placement is
 * "<RouteName>.<card|banner|side>"; the admin dashboard decides whether it
 * shows and which creatives it rotates (a random one per mount). Tapping
 * opens the link in a Custom Tab. Renders nothing when there's no ad.
 *
 * When the dashboard puts one placement at several spots on a screen, each
 * spot shows a different creative; spots beyond the number of creatives
 * stay empty rather than repeat an ad.
 */
export default function PromoAdCard({
  variant = "card",
  compact = false,
  style,
  at,
  isDefault = false,
}: Props) {
  const route = useRoute();
  const slot = variant === "card" ? "card" : variant;
  const placementId = `${route.name}.${slot}`;
  const ads = usePlacementAds(placementId);
  const positions = usePlacementPositions(placementId);
  // Remembered per mount so the creative doesn't change while scrolling.
  const [seed] = useState(Math.random);

  let ad: PromoAd | undefined;
  if (at === undefined) {
    ad = ads.length ? ads[Math.floor(seed * ads.length)] : undefined;
  } else {
    // Index among the chosen spots (top to bottom); -1 = not chosen.
    const spot = positions ? positions.indexOf(at) : isDefault ? 0 : -1;
    if (spot >= 0 && spot < ads.length) {
      ad = ads[(rotationStart(`${route.key}:${placementId}`) + spot) % ads.length];
    }
  }

  return ad ? (
    <View style={style}>
      {variant === "banner" ? (
        <BannerLayout key={ad.id} ad={ad} />
      ) : variant === "side" ? (
        <SideLayout key={ad.id} ad={ad} />
      ) : (
        <AdLayout key={ad.id} ad={ad} compact={compact} />
      )}
    </View>
  ) : null;
}

/**
 * Random starting creative shared by every spot of one placement on one
 * screen visit, so spots show consecutive (different) creatives. A new
 * visit (new route key) starts somewhere new.
 */
const rotationStarts = new Map<string, number>();
function rotationStart(key: string) {
  let start = rotationStarts.get(key);
  if (start === undefined) {
    start = Math.floor(Math.random() * 1_000_000);
    rotationStarts.set(key, start);
  }
  return start;
}

function AdLayout({ ad, compact }: { ad: PromoAd; compact: boolean }) {
  const t = useT();
  const [iconFailed, setIconFailed] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const open = () => openInCustomTab(ad.url);

  return (
    <Pressable
      onPress={open}
      accessibilityRole="link"
      accessibilityLabel={`${t.promo.ad}. ${ad.title}. ${ad.subtitle ?? ""}`}
      className="overflow-hidden rounded-3xl border border-border bg-card p-2.5 active:opacity-90"
    >
      {/* Header: logo, title, subtitle, AD badge */}
      <View className="flex-row items-center">
        <View
          className="h-14 w-14 items-center justify-center overflow-hidden rounded-full"
          style={{ backgroundColor: withAlpha(colors.secondary, 0.15) }}
        >
          {ad.icon && !iconFailed ? (
            <Image
              source={{ uri: ad.icon }}
              onError={() => setIconFailed(true)}
              style={{ width: "100%", height: "100%" }}
            />
          ) : (
            <Megaphone size={24} color={colors.secondary} />
          )}
        </View>
        <View className="ml-3 flex-1 pr-2">
          <Text
            className="text-[15px] font-semibold text-foreground"
            numberOfLines={1}
          >
            {ad.title}
          </Text>
          {ad.subtitle && (
            <Text className="mt-0.5 text-xs text-muted" numberOfLines={2}>
              {ad.subtitle}
            </Text>
          )}
        </View>
        <View className="self-start rounded-md bg-elevated px-2 py-1">
          <Text className="text-[10px] font-bold tracking-[0.5px] text-foreground">
            {t.promo.ad}
          </Text>
        </View>
      </View>

      {/* Banner creative */}
      {!compact && ad.image && !imageFailed && (
        <Image
          source={{ uri: ad.image }}
          resizeMode="cover"
          onError={() => setImageFailed(true)}
          style={{
            marginTop: 10,
            width: "100%",
            aspectRatio: 2.2,
            borderRadius: 16,
            backgroundColor: colors.elevated,
          }}
        />
      )}

      {/* CTA */}
      <View className="mt-2.5 h-12 items-center justify-center rounded-2xl bg-foreground">
        <Text
          className="text-[15px] font-semibold text-background"
          numberOfLines={1}
        >
          {ad.cta ?? t.promo.cta}
        </Text>
      </View>
    </Pressable>
  );
}

/** Small "AD" tag shown before the title in the slimmer layouts. */
function AdTag({ label }: { label: string }) {
  return (
    <View className="mr-1.5 rounded bg-elevated px-1.5 py-0.5">
      <Text className="text-[9px] font-bold text-foreground">{label}</Text>
    </View>
  );
}

/** Logo circle with a megaphone fallback. */
function AdLogo({ uri, size }: { uri?: string; size: number }) {
  const [failed, setFailed] = useState(false);
  return (
    <View
      className="items-center justify-center overflow-hidden rounded-full"
      style={{
        width: size,
        height: size,
        backgroundColor: withAlpha(colors.secondary, 0.15),
      }}
    >
      {uri && !failed ? (
        <Image
          source={{ uri }}
          onError={() => setFailed(true)}
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        <Megaphone size={size * 0.42} color={colors.secondary} />
      )}
    </View>
  );
}

/** Slim strip under a header: logo · AD title / subtitle · small button. */
function BannerLayout({ ad }: { ad: PromoAd }) {
  const t = useT();
  return (
    <Pressable
      onPress={() => openInCustomTab(ad.url)}
      accessibilityRole="link"
      accessibilityLabel={`${t.promo.ad}. ${ad.title}. ${ad.subtitle ?? ""}`}
      className="flex-row items-center bg-card px-3 py-2.5 active:opacity-90"
    >
      <AdLogo uri={ad.icon} size={52} />
      <View className="ml-2.5 flex-1 pr-2">
        <View className="flex-row items-center">
          <AdTag label={t.promo.ad} />
          <Text
            className="flex-1 text-[14px] font-semibold text-foreground"
            numberOfLines={1}
          >
            {ad.title}
          </Text>
        </View>
        {ad.subtitle && (
          <Text className="mt-0.5 text-xs text-muted" numberOfLines={1}>
            {ad.subtitle}
          </Text>
        )}
      </View>
      <View className="rounded-xl bg-foreground px-3.5 py-2.5">
        <Text
          className="text-[13px] font-semibold text-background"
          numberOfLines={1}
        >
          {ad.cta ?? t.promo.cta}
        </Text>
      </View>
    </Pressable>
  );
}

/** Image left, text and full-width button right (between grid rows). */
function SideLayout({ ad }: { ad: PromoAd }) {
  const t = useT();
  const [imageFailed, setImageFailed] = useState(false);
  return (
    <Pressable
      onPress={() => openInCustomTab(ad.url)}
      accessibilityRole="link"
      accessibilityLabel={`${t.promo.ad}. ${ad.title}. ${ad.subtitle ?? ""}`}
      className="flex-row rounded-3xl border border-border bg-card p-2.5 active:opacity-90"
    >
      <View
        className="items-center justify-center overflow-hidden rounded-2xl"
        style={{
          width: "45%",
          aspectRatio: 1.45,
          backgroundColor: withAlpha(colors.secondary, 0.12),
        }}
      >
        {(ad.image ?? ad.icon) && !imageFailed ? (
          <Image
            source={{ uri: ad.image ?? ad.icon }}
            resizeMode="cover"
            onError={() => setImageFailed(true)}
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <Megaphone size={34} color={colors.secondary} />
        )}
      </View>

      <View className="ml-2.5 flex-1 justify-between">
        <View>
          <View className="flex-row items-center">
            <AdTag label={t.promo.ad} />
            <Text
              className="flex-1 text-[14px] font-semibold text-foreground"
              numberOfLines={1}
            >
              {ad.title}
            </Text>
          </View>
          {ad.subtitle && (
            <Text className="mt-1 text-xs text-muted" numberOfLines={2}>
              {ad.subtitle}
            </Text>
          )}
        </View>
        <View className="mt-2 h-10 items-center justify-center rounded-xl bg-foreground">
          <Text
            className="text-[13px] font-semibold text-background"
            numberOfLines={1}
          >
            {ad.cta ?? t.promo.cta}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
