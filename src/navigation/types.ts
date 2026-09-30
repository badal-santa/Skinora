import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  Explore: undefined;
  Outfits: undefined;
  Accessories: undefined;
  AccessoryDetails: { accessoryId: string };
  OutfitDetails: { outfitId: string };
  Characters: undefined;
  CharacterDetails: { characterId: string };
  Emotes: undefined;
  EmoteDetails: { emoteId: string };
  Settings: undefined;
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
