import { useEffect, useState } from "react";
import {
  Animated,
  Easing,
  Linking,
  Modal,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Sparkles } from "lucide-react-native";
import { Text } from "./Text";
import { APP_VERSION, STORE_REVIEW_URL, STORE_URL } from "../config/app";
import { useUpdateVersions } from "../config/remoteConfig";
import { compareVersions, isVersion } from "../update/version";
import { useT } from "../i18n/language";
import { colors, withAlpha } from "../theme/colors";

type Props = {
  /** Hidden while this is false (e.g. on the splash or first-run screens). */
  allowed: boolean;
};

/**
 * Bottom sheet that tells users on an old version to update, driven by
 * Firebase Remote Config:
 * - `latest_version` newer than this app → "Update available" with Later.
 * - `min_version` newer than this app → "Update required", can't be closed.
 * "Later" hides it until the next app launch.
 */
export default function UpdateSheet({ allowed }: Props) {
  const t = useT();
  const insets = useSafeAreaInsets();
  const { latest, min } = useUpdateVersions();
  const [dismissed, setDismissed] = useState(false);

  const forced = isVersion(min) && compareVersions(APP_VERSION, min) < 0;
  const available = isVersion(latest) && compareVersions(APP_VERSION, latest) < 0;
  const visible = allowed && (forced || (available && !dismissed));
  // The newest version on offer.
  const target = available ? latest : min;

  // Slide the sheet up from the bottom while the backdrop fades in.
  const [slide] = useState(() => new Animated.Value(0));
  useEffect(() => {
    if (!visible) return;
    slide.setValue(0);
    Animated.timing(slide, {
      toValue: 1,
      duration: 320,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  }, [visible, slide]);

  const openStore = () => {
    Linking.openURL(STORE_REVIEW_URL || STORE_URL).catch(() => {
      if (STORE_URL) Linking.openURL(STORE_URL).catch(() => {});
    });
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
      // Android back button: closes a normal update, not a forced one.
      onRequestClose={() => {
        if (!forced) setDismissed(true);
      }}
    >
      <View style={StyleSheet.absoluteFill} className="justify-end">
        <Pressable
          style={StyleSheet.absoluteFill}
          className="bg-black/70"
          onPress={forced ? undefined : () => setDismissed(true)}
          accessibilityLabel={forced ? undefined : t.update.later}
        />
        <Animated.View
          className="rounded-t-[28px] border border-b-0 border-border bg-card px-6 pt-3"
          style={{
            paddingBottom: Math.max(insets.bottom, 16) + 8,
            transform: [
              {
                translateY: slide.interpolate({
                  inputRange: [0, 1],
                  outputRange: [400, 0],
                }),
              },
            ],
          }}
        >
          {/* Grab handle */}
          <View className="mb-5 h-1.5 w-12 self-center rounded-full bg-border" />

          <View
            className="mb-4 h-16 w-16 items-center justify-center self-center rounded-3xl"
            style={{ backgroundColor: withAlpha(colors.primary, 0.15) }}
          >
            <Sparkles size={30} color={colors.primary} />
          </View>

          <Text className="text-center text-xl font-extrabold text-foreground">
            {forced ? t.update.forcedTitle : t.update.title}
          </Text>
          <View className="mt-2 self-center rounded-full bg-elevated px-3 py-1">
            <Text className="text-xs font-bold text-muted">
              {t.update.newVersion(target)}
            </Text>
          </View>
          <Text className="mt-3 text-center text-sm leading-5 text-muted">
            {forced ? t.update.forcedMessage : t.update.message}
          </Text>

          <Pressable
            onPress={openStore}
            accessibilityRole="button"
            className="mt-6 h-14 items-center justify-center rounded-2xl bg-primary active:opacity-80"
          >
            <Text className="text-base font-extrabold text-background">
              {t.update.update}
            </Text>
          </Pressable>
          {!forced && (
            <Pressable
              onPress={() => setDismissed(true)}
              accessibilityRole="button"
              className="mt-2 h-12 items-center justify-center rounded-2xl active:opacity-60"
            >
              <Text className="text-sm font-semibold text-muted">
                {t.update.later}
              </Text>
            </Pressable>
          )}
        </Animated.View>
      </View>
    </Modal>
  );
}
