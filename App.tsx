import "./global.css";
import * as NativeSplash from "expo-splash-screen";
import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./src/navigation/Navigator";
import { initRemoteConfig } from "./src/config/remoteConfig";
import { initAds } from "./src/ads/ads";

// Keep the black native splash up until the first screen has rendered,
// then fade into the animated SplashScreen — no white flash in between.
NativeSplash.preventAutoHideAsync().catch(() => {});
NativeSplash.setOptions({ duration: 200, fade: true });

export default function App() {
  useEffect(() => {
    initRemoteConfig();
    initAds();
  }, []);

  return (
    <NavigationContainer
      onReady={() => {
        NativeSplash.hideAsync().catch(() => {});
      }}
    >
      <Navigator />
    </NavigationContainer>
  );
}
