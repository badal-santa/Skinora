import "./global.css";
import * as NativeSplash from "expo-splash-screen";
import { useEffect, useState } from "react";
import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigator from "./src/navigation/Navigator";
import UpdateSheet from "./src/components/UpdateSheet";
import type { RootStackParamList } from "./src/navigation/types";
import { initRemoteConfig } from "./src/config/remoteConfig";
import { initAds } from "./src/ads/ads";

// Keep the black native splash up until the first screen has rendered,
// then fade into the animated SplashScreen — no white flash in between.
NativeSplash.preventAutoHideAsync().catch(() => {});
NativeSplash.setOptions({ duration: 200, fade: true });

const navigation = createNavigationContainerRef<RootStackParamList>();

/** Screens where the update sheet waits (splash and first-run language). */
const NO_UPDATE_SHEET = new Set(["Splash", "Language"]);

export default function App() {
  const [routeName, setRouteName] = useState<string>();
  const trackRoute = () => setRouteName(navigation.getCurrentRoute()?.name);

  useEffect(() => {
    initRemoteConfig();
    initAds();
  }, []);

  return (
    // Provides safe-area insets to everything, including the update sheet
    // that sits outside the navigator.
    <SafeAreaProvider>
      <NavigationContainer
        ref={navigation}
        onReady={() => {
          NativeSplash.hideAsync().catch(() => {});
          trackRoute();
        }}
        onStateChange={trackRoute}
      >
        <Navigator />
        <UpdateSheet allowed={!!routeName && !NO_UPDATE_SHEET.has(routeName)} />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
