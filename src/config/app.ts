import { Platform } from "react-native";
import Constants from "expo-constants";

export const APP_NAME = Constants.expoConfig?.name ?? "Skinora";
export const APP_VERSION = Constants.expoConfig?.version ?? "1.0.0";

/** Public URL of your privacy policy — required by Google Play and AdMob. */
export const PRIVACY_POLICY_URL = ""; // e.g. "https://santabrowser.com/skinora/privacy"

/** Numeric App Store ID, once the iOS app exists (App Store Connect → App Information). */
export const IOS_APP_STORE_ID = "";

const ANDROID_PACKAGE =
  Constants.expoConfig?.android?.package ?? "com.santabrowser.skinora";

/** Web link to the app's store page (works for sharing). */
export const STORE_URL = Platform.select({
  ios: IOS_APP_STORE_ID
    ? `https://apps.apple.com/app/id${IOS_APP_STORE_ID}`
    : "",
  default: `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE}`,
});

/** Deep link that opens the store app directly on the review page. */
export const STORE_REVIEW_URL = Platform.select({
  ios: IOS_APP_STORE_ID
    ? `itms-apps://apps.apple.com/app/id${IOS_APP_STORE_ID}?action=write-review`
    : "",
  default: `market://details?id=${ANDROID_PACKAGE}`,
});
