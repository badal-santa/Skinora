import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { TierId } from "../config/remoteConfig";

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Explore: undefined;
  Outfits: undefined;
  Accessories: undefined;
  AccessoryDetails: { accessoryId: string };
  /** Outfits flow: Categories → Collection → Let's Go → Preview → Scratch. */
  OutfitCollection: { category: string };
  OutfitLetsGo: { outfitId: string };
  OutfitPreview: { outfitId: string };
  OutfitScratch: { outfitId: string };
  Characters: undefined;
  CharacterDetails: { characterId: string };
  Emotes: undefined;
  EmoteDetails: { emoteId: string };
  Settings: undefined;
  Calculator: undefined;
  CalculatorHub: undefined;
  TierCalculator: { from: TierId; to: TierId };
  Games: undefined;
  Sounds: undefined;
  /** First launch continues to Home; from Settings it goes back. */
  Language: { fromSettings?: boolean } | undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

/** Screens that can be opened without params (safe for data-driven links). */
export type ParamlessRoute = {
  [K in keyof RootStackParamList]: undefined extends RootStackParamList[K]
    ? K
    : never;
}[keyof RootStackParamList];
