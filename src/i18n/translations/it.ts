import type { Strings } from "./en";

export const it: Strings = {
  common: {
    goBack: "Indietro",
    back: "Indietro",
    share: "Condividi",
    settings: "Impostazioni",
    cancel: "Annulla",
    ok: "OK",
    openSettings: "Apri Impostazioni",
    explore: "ESPLORA",
  },

  splash: {
    tagline: "IL TUO MONDO. IL TUO STILE.",
    loading: "CARICAMENTO DEL TUO MONDO",
    footer: "SCOPRI • PERSONALIZZA • ESPLORA",
  },

  home: {
    brandTagline: "OUTFIT & SKIN",
    exploreCategories: "Esplora le categorie",
  },

  categories: {
    outfits: {
      title: "OUTFIT",
      subtitle: "Trova il look perfetto",
      featuredTag: "IN EVIDENZA",
      featuredSubtitle: "Outfit di stile per\nogni look.",
    },
    characters: {
      title: "PERSONAGGI",
      subtitle: "Incontra le tue icone di stile",
      featuredTag: "NOVITÀ",
      featuredSubtitle: "Incontra la tua prossima\nicona di stile.",
    },
    emotes: {
      title: "EMOTE",
      subtitle: "Mostra il tuo mood",
      featuredTag: "DI TENDENZA",
      featuredSubtitle: "Mostra il tuo mood\ncon stile.",
    },
    skins: {
      title: "ACCESSORI",
      subtitle: "Completa il tuo look",
      featuredTag: "HOT",
      featuredSubtitle: "Cappellini, catene, borse\n& altro.",
    },
  },

  outfits: {
    title: "Tutti gli outfit",
    subtitle: "Trova il tuo prossimo look preferito",
    empty: "Nessun outfit trovato",
    emptySaved: "Nessun outfit salvato corrisponde a questo filtro.",
    emptyAll: "Ancora nessun outfit con questi filtri.",
    emptyFilter: (filter: string) => `Ancora nessun outfit ${filter}.`,
    showAll: "Mostra tutti gli outfit",
    save: (name: string) => `Salva ${name}`,
    unsave: (name: string) => `Rimuovi ${name} dai preferiti`,
  },

  characters: {
    title: "Personaggi",
    subtitle: "Scopri il tuo prossimo look iconico",
  },

  emotes: {
    title: "Emote",
    subtitle: "Mostra il tuo mood",
    all: "Tutte le emote",
    count: (n: number) => `${n} emote`,
    label: (name: string) => `Emote ${name}`,
  },

  accessories: {
    title: "Accessori",
    subtitle: "Cappellini, sneaker e tocchi finali",
  },

  notFound: {
    outfit: "Outfit non trovato",
    character: "Personaggio non trovato",
    emote: "Emote non trovata",
    accessory: "Accessorio non trovato",
    message: "Questo elemento potrebbe essere stato rimosso.",
  },

  details: {
    shareMessage: (name: string, app: string) =>
      `Dai un'occhiata a ${name} su ${app} ✨`,
    download: "Scarica",
    downloadLabel: "Scarica questa immagine nelle foto",
    saving: "Salvataggio…",
    saved: "Salvata nelle Foto",
    photosTitle: "Accesso alle foto necessario",
    photosMessage: (app: string) =>
      `Consenti a ${app} di salvare le immagini nella tua libreria foto.`,
    failedTitle: "Download non riuscito",
    failedMessage: "Non è stato possibile salvare l'immagine. Riprova.",
  },

  settings: {
    title: "Impostazioni",
    shareApp: "Condividi l'app",
    language: "Lingua",
    rateApp: "Valuta l'app",
    version: "Versione",
    privacyPolicy: "Informativa sulla privacy",
    shareMessage: (app: string) =>
      `Scopri outfit, personaggi e skin su ${app} ✨`,
    comingSoonTitle: "Prossimamente",
    comingSoonMessage: (app: string) =>
      `${app} non è ancora sull'App Store.`,
    privacySoon: "L'informativa sulla privacy sarà disponibile presto.",
    linkFailedTitle: "Impossibile aprire il link",
    linkFailedMessage: "Riprova più tardi.",
  },

  language: {
    title: "Lingua",
    subtitle: "Scegli la tua lingua preferita",
    confirm: "Conferma lingua",
  },

  labels: {
    All: "Tutti",
    HOT: "HOT",
    NEW: "NUOVO",
    POPULAR: "POPOLARE",
    RARE: "RARO",
    TRENDING: "DI TENDENZA",
    Jacket: "Giacca",
    Top: "Top",
    Pants: "Pantaloni",
    Shorts: "Pantaloncini",
    Cap: "Cappellino",
    Shoes: "Scarpe",
    Streetwear: "Streetwear",
    Casual: "Casual",
    Anime: "Anime",
    Fantasy: "Fantasy",
    Cyberpunk: "Cyberpunk",
    Cute: "Carino",
  },
};
