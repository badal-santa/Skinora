import type { Strings } from "./en";

export const de: Strings = {
  common: {
    goBack: "Zurück",
    back: "Zurück",
    share: "Teilen",
    settings: "Einstellungen",
    cancel: "Abbrechen",
    ok: "OK",
    openSettings: "Einstellungen öffnen",
    explore: "ENTDECKEN",
  },

  splash: {
    tagline: "DEINE WELT. DEIN STIL.",
    loading: "DEINE WELT WIRD GELADEN",
    footer: "ENTDECKEN • ANPASSEN • ERKUNDEN",
  },

  home: {
    brandTagline: "OUTFIT & SKIN",
    exploreCategories: "Kategorien entdecken",
  },

  categories: {
    outfits: {
      title: "OUTFITS",
      subtitle: "Finde deinen perfekten Look",
      featuredTag: "AUSGEWÄHLT",
      featuredSubtitle: "Stylische Outfits für\njeden Look.",
    },
    characters: {
      title: "CHARAKTERE",
      subtitle: "Triff deine Style-Ikonen",
      featuredTag: "NEU ERSCHIENEN",
      featuredSubtitle: "Triff deine nächste\nStyle-Ikone.",
    },
    emotes: {
      title: "EMOTES",
      subtitle: "Zeig deine Stimmung",
      featuredTag: "TRENDING",
      featuredSubtitle: "Zeig deine Stimmung\nmit Stil.",
    },
    skins: {
      title: "ACCESSOIRES",
      subtitle: "Vervollständige deinen Look",
      featuredTag: "HEISS",
      featuredSubtitle: "Caps, Ketten, Taschen\n& mehr.",
    },
  },

  outfits: {
    title: "Alle Outfits",
    subtitle: "Finde deinen nächsten Lieblingslook",
    empty: "Keine Outfits gefunden",
    emptySaved: "Keine gespeicherten Outfits passen zu diesem Filter.",
    emptyAll: "Noch keine Outfits mit diesen Filtern.",
    emptyFilter: (filter: string) => `Noch keine ${filter}-Outfits.`,
    showAll: "Alle Outfits anzeigen",
    save: (name: string) => `${name} speichern`,
    unsave: (name: string) => `${name} aus Favoriten entfernen`,
  },

  characters: {
    title: "Charaktere",
    subtitle: "Entdecke deinen nächsten ikonischen Look",
  },

  emotes: {
    title: "Emotes",
    subtitle: "Zeig deine Stimmung",
    all: "Alle Emotes",
    count: (n: number) => `${n} Emotes`,
    label: (name: string) => `Emote ${name}`,
  },

  accessories: {
    title: "Accessoires",
    subtitle: "Caps, Sneaker & der letzte Schliff",
  },

  notFound: {
    outfit: "Outfit nicht gefunden",
    character: "Charakter nicht gefunden",
    emote: "Emote nicht gefunden",
    accessory: "Accessoire nicht gefunden",
    message: "Dieser Artikel wurde möglicherweise entfernt.",
  },

  details: {
    shareMessage: (name: string, app: string) =>
      `Schau dir ${name} auf ${app} an ✨`,
    download: "Herunterladen",
    downloadLabel: "Dieses Bild in Fotos speichern",
    saving: "Wird gespeichert…",
    saved: "In Fotos gespeichert",
    photosTitle: "Zugriff auf Fotos erforderlich",
    photosMessage: (app: string) =>
      `Erlaube ${app}, Bilder in deiner Fotomediathek zu speichern.`,
    failedTitle: "Download fehlgeschlagen",
    failedMessage:
      "Dieses Bild konnte nicht gespeichert werden. Bitte versuche es erneut.",
  },

  settings: {
    title: "Einstellungen",
    shareApp: "App teilen",
    language: "Sprache",
    rateApp: "App bewerten",
    version: "Version",
    privacyPolicy: "Datenschutzerklärung",
    shareMessage: (app: string) =>
      `Entdecke Outfits, Charaktere und Skins auf ${app} ✨`,
    comingSoonTitle: "Demnächst",
    comingSoonMessage: (app: string) =>
      `${app} ist noch nicht im App Store verfügbar.`,
    privacySoon: "Die Datenschutzerklärung ist bald verfügbar.",
    linkFailedTitle: "Link konnte nicht geöffnet werden",
    linkFailedMessage: "Bitte versuche es später erneut.",
  },

  language: {
    title: "Sprache",
    subtitle: "Wähle deine bevorzugte Sprache",
    confirm: "Sprache bestätigen",
  },

  labels: {
    All: "Alle",
    HOT: "HEISS",
    NEW: "NEU",
    POPULAR: "BELIEBT",
    RARE: "SELTEN",
    TRENDING: "TRENDING",
    Jacket: "Jacke",
    Top: "Oberteil",
    Pants: "Hose",
    Shorts: "Shorts",
    Cap: "Cap",
    Shoes: "Schuhe",
    Streetwear: "Streetwear",
    Casual: "Casual",
    Anime: "Anime",
    Fantasy: "Fantasy",
    Cyberpunk: "Cyberpunk",
    Cute: "Niedlich",
  },
};
