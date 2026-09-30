import "./global.css";
import * as NativeSplash from "expo-splash-screen";
import { useEffect, useRef } from "react";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import Navigator from "./src/navigation/Navigator";
import type { RootStackParamList } from "./src/navigation/types";
import { initAds } from "./src/ads/ads";
import {
  maybeShowInterstitial,
  preloadInterstitial,
} from "./src/ads/interstitial";
import { startAppOpenAds } from "./src/ads/appOpen";
import { preloadRewarded } from "./src/ads/rewarded";

// Keep the black native splash up until the first screen has rendered,
// then fade into the animated SplashScreen — no white flash in between.
NativeSplash.preventAutoHideAsync().catch(() => {});
NativeSplash.setOptions({ duration: 200, fade: true });

export default function App() {
  const navigationRef = useNavigationContainerRef<RootStackParamList>();
  const currentRoute = useRef<string | undefined>(undefined);

  // Screen-change ads (capped — see INTERSTITIAL_EVERY / _MIN_GAP_MS).
  const onScreenChange = () => {
    const previous = currentRoute.current;
    const next = navigationRef.getCurrentRoute()?.name;
    currentRoute.current = next;
    // Skip the splash → home hand-off; the app open ad covers launch.
    if (!previous || previous === next || previous === "Splash") return;
    maybeShowInterstitial();
  };

  useEffect(() => {
    initAds().then((ok) => {
      if (ok) {
        startAppOpenAds();
        preloadInterstitial();
        preloadRewarded();
      }
    });
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        currentRoute.current = navigationRef.getCurrentRoute()?.name;
        NativeSplash.hideAsync().catch(() => {});
      }}
      onStateChange={onScreenChange}
    >
      <Navigator />
    </NavigationContainer>
  );
}
