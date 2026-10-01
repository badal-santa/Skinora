import { useEffect, useState } from "react";
import { Image, Pressable, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { Megaphone } from "lucide-react-native";
import { Text } from "./Text";
import { usePromoAds, type PromoAd } from "../config/remoteConfig";
import { openInCustomTab } from "../customTab/customTab";
import { useT } from "../i18n/language";
import { colors, withAlpha } from "../theme/colors";

const SIZE = 44;
const BADGE = colors.neon.red;

/**
 * Small round ad for screen headers (like the reference app's top-right
 * icon): a random `promo_ads` creative's logo with an "AD" badge, gently
 * pulsing. Tapping opens its link in a Custom Tab. Renders nothing without
 * ads.
 */
export default function HeaderAd() {
  const ads = usePromoAds();
  const [seed] = useState(Math.random);
  const ad = ads.length ? ads[Math.floor(seed * ads.length)] : undefined;

  return ad ? <HeaderAdIcon key={ad.id} ad={ad} /> : null;
}

function HeaderAdIcon({ ad }: { ad: PromoAd }) {
  const t = useT();
  const [iconFailed, setIconFailed] = useState(false);
  const pulse = useSharedValue(0);

  useEffect(() => {
    pulse.set(
      withRepeat(
        withTiming(1, { duration: 1100, easing: Easing.inOut(Easing.sin) }),
        -1,
        true,
      ),
    );
  }, [pulse]);

  const ringStyle = useAnimatedStyle(() => ({
    transform: [{ scale: 1 + pulse.value * 0.06 }],
  }));

  return (
    <Pressable
      onPress={() => openInCustomTab(ad.url)}
      hitSlop={6}
      accessibilityRole="link"
      accessibilityLabel={`${t.promo.ad}. ${ad.title}`}
      className="active:opacity-80"
    >
      <Animated.View
        style={[
          {
            width: SIZE,
            height: SIZE,
            borderRadius: SIZE / 2,
            borderWidth: 2,
            borderColor: withAlpha(BADGE, 0.85),
            backgroundColor: colors.card,
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            shadowColor: BADGE,
            shadowOpacity: 0.7,
            shadowRadius: 8,
            shadowOffset: { width: 0, height: 0 },
            elevation: 6,
          },
          ringStyle,
        ]}
      >
        {ad.icon && !iconFailed ? (
          <Image
            source={{ uri: ad.icon }}
            onError={() => setIconFailed(true)}
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <Megaphone size={20} color={colors.secondary} />
        )}
      </Animated.View>

      {/* AD badge, overlapping the top-right edge */}
      <View
        pointerEvents="none"
        className="absolute -right-1.5 -top-1 rounded-full px-1.5 py-0.5"
        style={{ backgroundColor: BADGE }}
      >
        <Text className="text-[8px] font-extrabold text-foreground">
          {t.promo.ad}
        </Text>
      </View>
    </Pressable>
  );
}
