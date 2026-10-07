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

  outfitFlow: {
    categoriesTitle: "Outfit-Kategorien",
    categoriesSubtitle: "Wähle eine Kategorie zum Entdecken",
    clickHere: "HIER KLICKEN",
    groups: {
      tops: {
        title: "Core-Kollektion",
        subtitle: "Entworfen für Spieler, die vorangehen.",
      },
      jackets: {
        title: "Next-Gen-Ausrüstung",
        subtitle: "Abenteuer beginnen mit der richtigen Ausrüstung.",
      },
      pants: {
        title: "Missions-Hosen",
        subtitle: "Jeder Schritt ein Statement.",
      },
      hats: {
        title: "Spieler-Caps",
        subtitle: "Verteidige deinen Stil, erobere deinen Tag.",
      },
      hair: {
        title: "Dynamische Frisuren",
        subtitle: "Für mutige Moves und furchtlose Looks gemacht.",
      },
      accessories: {
        title: "Elite-Accessoires",
        subtitle: "Jedes Item, ein neues Stil-Level.",
      },
    },
    categoryComingSoon: "Demnächst",
    categoryComingSoonMessage: "Neue Items sind unterwegs. Schau bald wieder vorbei!",
    count: (n: number) => `${n} Outfits`,
    collectionSubtitle: (n: number) => `${n} Outfits in dieser Kollektion`,
    letsGoTitle: "Bereit für diesen Look?",
    letsGoMessage: "Sieh dir das Outfit genau an und schalte die Item-ID frei.",
    letsGo: "Los geht's",
    getId: "ID holen",
    scratchTitle: "Rubbeln & ID holen",
    scratchSubtitle: "Rubble die Karte frei, um die Item-ID zu sehen",
    scratchHint: "Hier rubbeln",
    idLabel: "ITEM-ID",
    copy: "ID kopieren",
    copied: "Kopiert!",
    comingSoon: "ID folgt bald",
    comingSoonMessage: "Wir fügen die ID für dieses Outfit hinzu. Schau bald wieder vorbei!",
    howToUse: "Suche diese ID im Avatar-Shop des Spiels, um das Item zu finden.",
  },

  calculator: {
    homeTitle: "RECHNER",
    homeSubtitle: "Robux ⇄ USD in Sekunden",
    title: "Robux-Rechner",
    subtitle: "Robux- und USD-Werte schätzen",
    tabRobuxToUsd: "Robux → $",
    tabUsdToRobux: "$ → Robux",
    tabFee: "Verkaufsgebühr",
    robuxAmount: "Robux-Betrag",
    usdAmount: "Betrag in USD",
    itemPrice: "Artikelpreis in Robux",
    purchaseCost: "Kaufkosten",
    devexValue: "Auszahlungswert (DevEx)",
    robuxYouGet: "Robux, die du erhältst",
    youReceive: (percent: number) => `Du erhältst (${percent}%)`,
    marketplaceFee: (percent: number) => `Marktplatzgebühr (${percent}%)`,
    disclaimer:
      "Nur Schätzwerte auf Basis von Standardkursen. Die tatsächlichen Preise variieren je nach Plattform und Region. Diese App ist inoffiziell und kann dir keine Robux geben.",
    inputAmount: "BETRAG",
    liveRate: "AKTUELLER KURS",
    quickSelect: "SCHNELLAUSWAHL",
    resultTag: "ERGEBNIS",
    resultTitle: "Dein geschätzter Wert",
    estimated: "GESCHÄTZTER WERT",
    infoTitle: "Wichtiger Hinweis",
  },

  calcHub: {
    title: "Alle Rechner",
    tileTag: "RECHNER",
    tapToOpen: "ZUM ÖFFNEN TIPPEN",
    robuxUsd: "Robux ⇄ USD",
    basic: "Basic",
    pro: "Pro",
    elite: "Elite",
    tierSubtitle: "Premium-Pläne vergleichen",
    months: "Monate",
    monthsOf: (tier: string) => `Monate ${tier}`,
    totalRobux: "Robux gesamt",
    sameRobuxAs: (tier: string) => `Gleiche Robux wie ${tier}`,
    monthsValue: (n: string) => `${n} Monate`,
    costWith: (tier: string) => `Kosten mit ${tier}`,
    difference: "Preisunterschied",
    perMonth: (robux: string, usd: string) => `${robux} Robux / Monat · ${usd}`,
  },
  games: {
    homeTitle: "SPIELE",
    homeSubtitle: "Sofort spielen",
    title: "Spiele",
    subtitle: "Sofort spielen, ohne Download",
    featured: "BELIEBT",
    play: "Spielen",
    playNow: "Jetzt spielen",
    emptyTitle: "Spiele folgen bald",
    emptyMessage: "Neue Spiele sind unterwegs. Schau bald wieder vorbei!",
    playLabel: (title: string) => `${title} spielen`,
  },

  sounds: {
    homeTitle: "SOUNDS",
    homeSubtitle: "Entdecke beliebte Soundeffekte",
    title: "Sounds",
    subtitle: "Tippe auf einen Sound, um ihn abzuspielen",
    getSound: "Diesen Soundeffekt holen",
    saving: "Wird gespeichert…",
    saved: "In Musik gespeichert",
    volume: "Lautstärke",
    play: "Abspielen",
    pause: "Pause",
    previous: "Vorheriger Sound",
    next: "Nächster Sound",
    permissionTitle: "Speicherzugriff erforderlich",
    permissionMessage: (app: string) =>
      `Erlaube ${app}, Sounds auf deinem Gerät zu speichern.`,
    failedTitle: "Download fehlgeschlagen",
    failedMessage: "Dieser Sound konnte nicht gespeichert werden. Bitte versuche es erneut.",
    emptyTitle: "Sounds in Kürze",
    emptyMessage: "Neue Sounds sind unterwegs. Schau bald wieder vorbei!",
  },

  promo: {
    ad: "ANZEIGE",
    cta: "Mehr erfahren",
  },
  update: {
    title: "Update verfügbar",
    message: "Eine neue Version der App mit Verbesserungen und neuen Funktionen ist da.",
    /** Shown when this version is below `min_version` (no "Later"). */
    forcedTitle: "Update erforderlich",
    forcedMessage: "Diese Version wird nicht mehr unterstützt. Bitte aktualisiere, um die App weiter zu nutzen.",
    newVersion: (v) => `Version ${v}`,
    update: "Jetzt aktualisieren",
    later: "Später",
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
    next: "Weiter",
    save: "Speichern",
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
    Hair: "Haare",
    Streetwear: "Streetwear",
    Casual: "Casual",
    Anime: "Anime",
    Fantasy: "Fantasy",
    Cyberpunk: "Cyberpunk",
    Cute: "Niedlich",
  },
};
