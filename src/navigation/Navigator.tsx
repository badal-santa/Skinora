import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import ExploreScreen from "../screens/ExploreScreen";
import SplashScreen from "../screens/SplashScreen";
import AllOutfitsScreen from "../screens/AllOutfitsScreen";
import AllAccessoriesScreen from "../screens/AllAccessoriesScreen";
import AccessoryDetailsScreen from "../screens/AccessoryDetailsScreen";
import AllCharactersScreen from "../screens/AllCharactersScreen";
import CharacterDetailsScreen from "../screens/CharacterDetailsScreen";
import OutfitDetailsScreen from "../screens/OutfitDetailsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import AllEmotesScreen from "../screens/AllEmotesScreen";
import EmoteDetailsScreen from "../screens/EmoteDetailsScreen";
import LanguageScreen from "../screens/LanguageScreen";
import type { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigator() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Explore" component={ExploreScreen} />
      <Stack.Screen name="Outfits" component={AllOutfitsScreen} />
      <Stack.Screen name="Accessories" component={AllAccessoriesScreen} />
      <Stack.Screen
        name="AccessoryDetails"
        component={AccessoryDetailsScreen}
        options={{ animation: "fade_from_bottom" }}
      />
      <Stack.Screen name="OutfitDetails" component={OutfitDetailsScreen} />
      <Stack.Screen name="Characters" component={AllCharactersScreen} />
      <Stack.Screen
        name="CharacterDetails"
        component={CharacterDetailsScreen}
      />
      <Stack.Screen name="Emotes" component={AllEmotesScreen} />
      <Stack.Screen name="EmoteDetails" component={EmoteDetailsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Language" component={LanguageScreen} />
    </Stack.Navigator>
  );
}
