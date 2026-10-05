import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import ExploreScreen from "../screens/ExploreScreen";
import SplashScreen from "../screens/SplashScreen";
import OutfitCategoriesScreen from "../screens/OutfitCategoriesScreen";
import OutfitCollectionScreen from "../screens/OutfitCollectionScreen";
import OutfitLetsGoScreen from "../screens/OutfitLetsGoScreen";
import OutfitPreviewScreen from "../screens/OutfitPreviewScreen";
import OutfitScratchScreen from "../screens/OutfitScratchScreen";
import AllAccessoriesScreen from "../screens/AllAccessoriesScreen";
import AccessoryDetailsScreen from "../screens/AccessoryDetailsScreen";
import AllCharactersScreen from "../screens/AllCharactersScreen";
import CharacterDetailsScreen from "../screens/CharacterDetailsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import AllEmotesScreen from "../screens/AllEmotesScreen";
import EmoteDetailsScreen from "../screens/EmoteDetailsScreen";
import LanguageScreen from "../screens/LanguageScreen";
import CalculatorScreen from "../screens/CalculatorScreen";
import CalculatorHubScreen from "../screens/CalculatorHubScreen";
import TierCalculatorScreen from "../screens/TierCalculatorScreen";
import GamesScreen from "../screens/GamesScreen";
import SoundsScreen from "../screens/SoundsScreen";
import { getCustomTabConfig } from "../ads/ads";
import { withCustomTab } from "../customTab/customTab";
import type { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

/** Set while re-dispatching a back action we already showed the tab for. */
let allowBack = false;

/**
 * Every back action (system back button/gesture and in-app back buttons)
 * opens the custom tab first, then goes back once it's closed. Forward
 * navigation (navigate/replace) isn't affected.
 */
const backListeners = ({
  navigation,
}: {
  navigation: { dispatch: (action: never) => void };
}) => ({
  beforeRemove: (e: {
    data: { action: { type: string } };
    preventDefault: () => void;
  }) => {
    const { type } = e.data.action;
    if (allowBack || (type !== "GO_BACK" && type !== "POP")) return;
    // Back press switched off: go back normally, untouched.
    const tab = getCustomTabConfig();
    if (!tab.enabled || !tab.onBack) return;

    e.preventDefault();
    withCustomTab(() => {
      allowBack = true;
      try {
        navigation.dispatch(e.data.action as never);
      } finally {
        allowBack = false;
      }
    }, "back");
  },
});

export default function Navigator() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
      screenListeners={backListeners}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Explore" component={ExploreScreen} />
      <Stack.Screen name="Outfits" component={OutfitCategoriesScreen} />
      <Stack.Screen
        name="OutfitCollection"
        component={OutfitCollectionScreen}
      />
      <Stack.Screen name="OutfitLetsGo" component={OutfitLetsGoScreen} />
      <Stack.Screen
        name="OutfitPreview"
        component={OutfitPreviewScreen}
        options={{ animation: "fade" }}
      />
      <Stack.Screen
        name="OutfitScratch"
        component={OutfitScratchScreen}
        options={{ animation: "slide_from_bottom" }}
      />
      <Stack.Screen name="Accessories" component={AllAccessoriesScreen} />
      <Stack.Screen
        name="AccessoryDetails"
        component={AccessoryDetailsScreen}
        options={{ animation: "fade_from_bottom" }}
      />
      <Stack.Screen name="Characters" component={AllCharactersScreen} />
      <Stack.Screen
        name="CharacterDetails"
        component={CharacterDetailsScreen}
      />
      <Stack.Screen name="Emotes" component={AllEmotesScreen} />
      <Stack.Screen name="EmoteDetails" component={EmoteDetailsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Language" component={LanguageScreen} />
      <Stack.Screen name="Calculator" component={CalculatorScreen} />
      <Stack.Screen name="CalculatorHub" component={CalculatorHubScreen} />
      <Stack.Screen name="TierCalculator" component={TierCalculatorScreen} />
      <Stack.Screen name="Games" component={GamesScreen} />
      <Stack.Screen name="Sounds" component={SoundsScreen} />
    </Stack.Navigator>
  );
}
