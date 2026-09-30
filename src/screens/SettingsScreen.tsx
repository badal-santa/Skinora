import { useEffect, useState } from "react";
import {
  Alert,
  Linking,
  ScrollView,
  Share,
  StatusBar,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Info,
  Languages,
  Share2,
  ShieldCheck,
  SlidersHorizontal,
  Star,
} from "lucide-react-native";
import ScreenHeader from "../components/ScreenHeader";
import SettingsRow from "../components/SettingsRow";
import { Text } from "../components/Text";
import {
  APP_NAME,
  APP_VERSION,
  PRIVACY_POLICY_URL,
  STORE_REVIEW_URL,
  STORE_URL,
} from "../config/app";
import { isAdPrivacyOptionsRequired, showAdPrivacyOptions } from "../ads/ads";
import type { RootStackScreenProps } from "../navigation/types";
import { colors } from "../theme/colors";

type Props = RootStackScreenProps<"Settings">;

export default function SettingsScreen({ navigation }: Props) {
  const [showAdPrivacy, setShowAdPrivacy] = useState(false);

  useEffect(() => {
    isAdPrivacyOptionsRequired().then(setShowAdPrivacy);
  }, []);

  const shareApp = () => {
    const link = STORE_URL ? `\n${STORE_URL}` : "";
    Share.share({
      message: `Discover outfits, characters and skins on ${APP_NAME} ✨${link}`,
    }).catch(() => {});
  };

  const rateApp = async () => {
    if (!STORE_REVIEW_URL) {
      Alert.alert("Coming soon", `${APP_NAME} isn't on the App Store yet.`);
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
      Alert.alert(
        "Privacy Policy",
        "The privacy policy will be available soon.",
      );
      return;
    }
    Linking.openURL(PRIVACY_POLICY_URL).catch(() => {
      Alert.alert("Couldn't open link", "Please try again later.");
    });
  };

  const chooseLanguage = () => {
    Alert.alert(
      "Language",
      "English is the only language for now. More are coming soon!",
    );
  };

  const openAdPrivacy = () => {
    showAdPrivacyOptions().catch(() => {
      Alert.alert(
        "Unavailable",
        "Ad privacy choices can't be opened right now.",
      );
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />

      <ScreenHeader title="Settings" onBack={() => navigation.goBack()} />
      <View className="mx-5 h-px bg-border" />

      <ScrollView contentContainerStyle={{ padding: 20, gap: 12 }}>
        <SettingsRow icon={Share2} label="Share App" onPress={shareApp} />
        <SettingsRow
          icon={Languages}
          label="Language"
          value="English"
          onPress={chooseLanguage}
          accent={colors.secondary}
        />
        <SettingsRow
          icon={Star}
          label="Rate App"
          onPress={rateApp}
          accent={colors.neon.gold}
        />
        <SettingsRow
          icon={Info}
          label="Version"
          value={APP_VERSION}
          accent={colors.neon.silver}
        />
        <SettingsRow
          icon={ShieldCheck}
          label="Privacy Policy"
          onPress={openPrivacyPolicy}
          accent={colors.neon.blue}
        />
        {showAdPrivacy && (
          <SettingsRow
            icon={SlidersHorizontal}
            label="Ad Privacy Choices"
            onPress={openAdPrivacy}
            accent={colors.accent}
          />
        )}

        <Text className="mt-6 text-center text-xs text-subtle">
          {APP_NAME} v{APP_VERSION}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
