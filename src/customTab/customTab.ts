import { Platform } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { colors } from "../theme/colors";
import { getCustomTabConfig, onCustomTabConfig } from "./remoteConfig";

let clicks = 0;
let lastOpenedAt = 0;
let opening = false;
let warmedUrl = "";

/**
 * Pre-connects Chrome to the configured site (Android only), so the tab
 * appears already loading instead of on a blank page.
 */
function warmUp(url: string) {
  if (Platform.OS !== "android" || !url || url === warmedUrl) return;
  warmedUrl = url;
  WebBrowser.warmUpAsync()
    .then(() => WebBrowser.mayInitWithUrlAsync(url))
    .catch(() => {});
}

onCustomTabConfig((config) => {
  if (config.enabled) warmUp(config.url);
});

/**
 * Counts a user click and, when Remote Config says so, opens the configured
 * site in a Chrome Custom Tab (SFSafariViewController on iOS). Call it
 * right after navigating, so closing the tab lands on the new screen.
 */
export async function openCustomTabOnClick() {
  const { enabled, url, everyClicks, minGapMs } = getCustomTabConfig();
  if (!enabled || !url || opening) return;

  clicks += 1;
  if (clicks % everyClicks !== 0) return;
  if (Date.now() - lastOpenedAt < minGapMs) return;

  opening = true;
  lastOpenedAt = Date.now();
  try {
    await WebBrowser.openBrowserAsync(url, {
      toolbarColor: colors.background,
      secondaryToolbarColor: colors.background,
      controlsColor: colors.secondary,
      showTitle: true,
      enableBarCollapsing: true,
      // Open inside the app's task, so Back returns straight to the app.
      createTask: false,
    });
  } catch (error) {
    console.warn("[custom-tab] couldn't open:", error);
  } finally {
    opening = false;
  }
}
