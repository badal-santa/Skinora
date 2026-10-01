import { Alert, Linking, ScrollView, Share, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Info,
  Languages,
  Share2,
  ShieldCheck,
  Star,
} from "lucide-react-native";
import ScreenHeader from "../components/ScreenHeader";
import SettingsRow from "../components/SettingsRow";
import PromoAdCard from "../components/PromoAdCard";
import { Text } from "../components/Text";
import {
  APP_NAME,
  APP_VERSION,
  PRIVACY_POLICY_URL,
  STORE_REVIEW_URL,
  STORE_URL,
} from "../config/app";
import { useLanguage, useT } from "../i18n/language";
import type { RootStackScreenProps } from "../navigation/types";
import { colors } from "../theme/colors";

type Props = RootStackScreenProps<"Settings">;

export default function SettingsScreen({ navigation }: Props) {
  const t = useT();
  const language = useLanguage();

  const shareApp = () => {
    const link = STORE_URL ? `\n${STORE_URL}` : "";
    Share.share({
      message: `${t.settings.shareMessage(APP_NAME)}${link}`,
    }).catch(() => {});
  };

  const rateApp = async () => {
    if (!STORE_REVIEW_URL) {
      Alert.alert(
        t.settings.comingSoonTitle,
        t.settings.comingSoonMessage(APP_NAME),
      );
      return;
    }
    try {
      await Linking.openURL(STORE_REVIEW_URL);
    } catch {
      // Store app missing (e.g. emulator) — fall back to the web page.
      if (STORE_URL) Linking.openURL(STORE_URL).catch(() => {});
    }
  };

  const openPrivacyPolicy = () => {
    if (!PRIVACY_POLICY_URL) {
      Alert.alert(t.settings.privacyPolicy, t.settings.privacySoon);
      return;
    }
    Linking.openURL(PRIVACY_POLICY_URL).catch(() => {
      Alert.alert(t.settings.linkFailedTitle, t.settings.linkFailedMessage);
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      <ScreenHeader
        title={t.settings.title}
        onBack={() => navigation.goBack()}
      />
      <View className="mx-5 h-px bg-border" />

      <ScrollView contentContainerStyle={{ padding: 20, gap: 12 }}>
        <SettingsRow icon={Share2} label={t.settings.shareApp} onPress={shareApp} />
        <SettingsRow
          icon={Languages}
          label={t.settings.language}
          value={language.name}
          onPress={() =>
            navigation.navigate("Language", { fromSettings: true })
          }
          accent={colors.secondary}
        />
        <SettingsRow
          icon={Star}
          label={t.settings.rateApp}
          onPress={rateApp}
          accent={colors.neon.gold}
        />
        <SettingsRow
          icon={Info}
          label={t.settings.version}
          value={APP_VERSION}
          accent={colors.neon.silver}
        />
        <SettingsRow
          icon={ShieldCheck}
          label={t.settings.privacyPolicy}
          onPress={openPrivacyPolicy}
          accent={colors.neon.blue}
        />

        <PromoAdCard style={{ marginTop: 8 }} />

        <Text className="mt-6 text-center text-xs text-subtle">
          {APP_NAME} v{APP_VERSION}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
