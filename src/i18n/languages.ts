export type Language = {
  /** ISO 639-1 code, e.g. "en". */
  code: string;
  /** Name in the language itself, e.g. "Español". */
  name: string;
  /** Name in English, shown underneath. */
  englishName: string;
  flag: string;
};

export const languages: Language[] = [
  { code: "en", name: "English", englishName: "English", flag: "🇺🇸" },
  { code: "hi", name: "हिन्दी", englishName: "Hindi", flag: "🇮🇳" },
  { code: "es", name: "Español", englishName: "Spanish", flag: "🇪🇸" },
  { code: "pt", name: "Português", englishName: "Portuguese", flag: "🇧🇷" },
  { code: "fr", name: "Français", englishName: "French", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", englishName: "German", flag: "🇩🇪" },
  { code: "it", name: "Italiano", englishName: "Italian", flag: "🇮🇹" },
  { code: "ru", name: "Русский", englishName: "Russian", flag: "🇷🇺" },
  { code: "ar", name: "العربية", englishName: "Arabic", flag: "🇸🇦" },
  { code: "tr", name: "Türkçe", englishName: "Turkish", flag: "🇹🇷" },
  {
    code: "id",
    name: "Bahasa Indonesia",
    englishName: "Indonesian",
    flag: "🇮🇩",
  },
  { code: "fil", name: "Filipino", englishName: "Filipino", flag: "🇵🇭" },
  { code: "vi", name: "Tiếng Việt", englishName: "Vietnamese", flag: "🇻🇳" },
  { code: "th", name: "ไทย", englishName: "Thai", flag: "🇹🇭" },
  { code: "ja", name: "日本語", englishName: "Japanese", flag: "🇯🇵" },
  { code: "ko", name: "한국어", englishName: "Korean", flag: "🇰🇷" },
  { code: "zh", name: "中文", englishName: "Chinese", flag: "🇨🇳" },
];

export const DEFAULT_LANGUAGE = "en";

export const findLanguage = (code: string | null | undefined) =>
  languages.find((l) => l.code === code);

/** Best match for the device locale, falling back to English. */
export function deviceLanguage(): string {
  try {
    const locale = Intl.DateTimeFormat().resolvedOptions().locale;
    const base = locale.split("-")[0].toLowerCase();
    // Android reports Filipino as "tl" (Tagalog) on older versions.
    const code = base === "tl" ? "fil" : base;
    return findLanguage(code)?.code ?? DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
}
