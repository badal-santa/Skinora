import { AppState, Platform } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { colors } from "../theme/colors";
import { getCustomTabConfig, onCustomTabConfig } from "../ads/ads";

/**
 * If the app hasn't gone to the background this long after opening the
 * tab, assume it never showed and carry on with the click.
 */
const OPEN_TIMEOUT_MS = 3000;

const TAB_OPTIONS: WebBrowser.WebBrowserOpenOptions = {
  toolbarColor: colors.background,
  secondaryToolbarColor: colors.background,
  controlsColor: colors.secondary,
  showTitle: true,
  enableBarCollapsing: true,
  // Open inside the app's task, so Back returns straight to the app.
  createTask: false,
};

let clicks = 0;
let lastOpenedAt = 0;
let busy = false;
let warmedUrl = "";
/** The site the next tab will open — chosen ahead so it can be warmed up. */
let nextUrl = "";

/** Random site from the list, avoiding the one just shown when possible. */
function pickUrl(urls: string[], previous: string) {
  const choices = urls.length > 1 ? urls.filter((u) => u !== previous) : urls;
  return choices[Math.floor(Math.random() * choices.length)] ?? "";
}

/** Choose (and pre-load) the site for the next tab. */
function prepareNext(previous = "") {
  const { enabled, urls } = getCustomTabConfig();
  nextUrl = pickUrl(urls, previous);
  if (enabled) warmUp(nextUrl);
}

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

// New settings from the ads backend → pick a fresh next site.
onCustomTabConfig(() => prepareNext());

/** Counts the click and decides whether this one should open the tab. */
function shouldOpen(trigger: Trigger) {
  const { enabled, urls, everyClicks, minGapMs, onTap, onBack } =
    getCustomTabConfig();
  if (!enabled || urls.length === 0) return false;
  // Each trigger has its own switch in the dashboard; switched-off ones
  // don't count towards "every Nth".
  if (trigger === "tap" ? !onTap : !onBack) return false;

  clicks += 1;
  if (clicks % everyClicks !== 0) return false;
  return Date.now() - lastOpenedAt >= minGapMs;
}

/**
 * Resolves when the user comes back from the tab. On Android
 * `openBrowserAsync` returns as soon as the tab opens, so we watch the
 * app leave the foreground and return instead.
 */
function waitForReturn() {
  return new Promise<void>((resolve) => {
    let left = false;
    const done = () => {
      subscription.remove();
      clearTimeout(timeout);
      resolve();
    };
    const subscription = AppState.addEventListener("change", (state) => {
      if (state !== "active") left = true;
      else if (left) done();
    });
    const timeout = setTimeout(() => {
      if (!left) done();
    }, OPEN_TIMEOUT_MS);
  });
}

/** What caused the navigation. */
export type Trigger = "tap" | "back";

/**
 * Runs a click's action (usually a navigation). When the dashboard's Custom
 * Tab settings say so, the configured site opens in a Chrome Custom Tab
 * first (SFSafariViewController on iOS), and the action runs once the user
 * closes it, so they land on the new screen.
 */
export async function withCustomTab(
  action: () => void,
  trigger: Trigger = "tap",
) {
  // Ignore taps while a tab is opening or open.
  if (busy) return;
  if (!shouldOpen(trigger)) {
    action();
    return;
  }
  await openThen(action);
}

/**
 * App-open tab: shown once between the splash and Home when "On app
 * launch" is on in the dashboard. Doesn't count as a click.
 */
export async function withLaunchCustomTab(action: () => void) {
  const { enabled, onLaunch, urls } = getCustomTabConfig();
  if (busy || !enabled || !onLaunch || urls.length === 0) {
    action();
    return;
  }
  await openThen(action);
}

/** Opens the next site, then runs `action` once the user is back. */
async function openThen(action: () => void) {
  busy = true;
  lastOpenedAt = Date.now();
  try {
    const returned = Platform.OS === "android" ? waitForReturn() : null;
    // On iOS this resolves only when the user closes the tab.
    if (!nextUrl) prepareNext();
    const url = nextUrl;
    prepareNext(url); // rotate before the user comes back
    await WebBrowser.openBrowserAsync(url, TAB_OPTIONS);
    await returned;
  } catch (error) {
    console.warn("[custom-tab] couldn't open:", error);
  } finally {
    busy = false;
    action();
  }
}

/** Opens a specific link (e.g. a game) in a Custom Tab. */
export async function openInCustomTab(url: string) {
  if (busy) return;
  busy = true;
  try {
    await WebBrowser.openBrowserAsync(url, TAB_OPTIONS);
  } catch (error) {
    console.warn("[custom-tab] couldn't open:", error);
  } finally {
    busy = false;
  }
}
