import { useSyncExternalStore } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DEFAULT_LANGUAGE, findLanguage } from "./languages";
import { en, translations, type Strings } from "./translations";

const STORAGE_KEY = "app.language";

/** `null` until the user has picked a language (first launch). */
let current: string | null = null;
let loaded: Promise<string | null> | null = null;
const listeners = new Set<() => void>();

/** Reads the saved language once; later calls reuse the same result. */
export function loadLanguage(): Promise<string | null> {
  loaded ??= AsyncStorage.getItem(STORAGE_KEY)
    .then((code) => {
      current = findLanguage(code) ? code : null;
      listeners.forEach((l) => l());
      return current;
    })
    .catch(() => null);
  return loaded;
}

export async function saveLanguage(code: string) {
  current = code;
  loaded = Promise.resolve(code);
  listeners.forEach((l) => l());
  await AsyncStorage.setItem(STORAGE_KEY, code).catch(() => {});
}

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

/** The chosen language (English until one is picked). */
export function useLanguage() {
  const code = useSyncExternalStore(subscribe, () => current);
  return findLanguage(code ?? DEFAULT_LANGUAGE)!;
}

/** UI strings for the chosen language; re-renders when it changes. */
export function useT(): Strings {
  return translations[useLanguage().code] ?? en;
}

/** Translates a data value such as a tag ("HOT") or style ("Casual"). */
export const label = (t: Strings, value: string) => t.labels[value] ?? value;
