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

  outfitFlow: {
    categoriesTitle: "Categorie di outfit",
    categoriesSubtitle: "Scegli una categoria da esplorare",
    clickHere: "CLICCA QUI",
    groups: {
      tops: {
        title: "Collezione Essenziale",
        subtitle: "Pensata per i giocatori che guidano.",
      },
      jackets: {
        title: "Equipaggiamento Next-Gen",
        subtitle: "L'avventura inizia con l'equipaggiamento giusto.",
      },
      pants: {
        title: "Pantaloni Missione",
        subtitle: "Ogni passo, una dichiarazione d'intenti.",
      },
      hats: {
        title: "Cappelli da Giocatore",
        subtitle: "Difendi il tuo stile, conquista la tua giornata.",
      },
      hair: {
        title: "Acconciature dinamiche",
        subtitle: "Fatte per mosse audaci e look senza paura.",
      },
      accessories: {
        title: "Accessori élite",
        subtitle: "Ogni oggetto, un nuovo livello di stile.",
      },
    },
    categoryComingSoon: "Prossimamente",
    categoryComingSoonMessage: "Nuovi oggetti in arrivo. Torna presto!",
    count: (n: number) => `${n} outfit`,
    collectionSubtitle: (n: number) => `${n} outfit in questa collezione`,
    letsGoTitle: "Pronto a sfoggiare questo look?",
    letsGoMessage: "Guarda l'outfit da vicino e sblocca il suo ID oggetto.",
    letsGo: "Andiamo",
    getId: "Ottieni ID",
    scratchTitle: "Gratta e ottieni l'ID",
    scratchSubtitle: "Gratta la carta per svelare l'ID oggetto",
    scratchHint: "Gratta qui",
    idLabel: "ID OGGETTO",
    copy: "Copia ID",
    copied: "Copiato!",
    comingSoon: "ID in arrivo",
    comingSoonMessage: "Stiamo aggiungendo l'ID di questo outfit. Torna presto!",
    howToUse: "Cerca questo ID nel negozio avatar del gioco per trovare l'oggetto.",
  },

  calculator: {
    homeTitle: "CALCOLATRICE",
    homeSubtitle: "Robux ⇄ USD in un attimo",
    title: "Calcolatrice Robux",
    subtitle: "Stima i valori di Robux e USD",
    tabRobuxToUsd: "Robux → $",
    tabUsdToRobux: "$ → Robux",
    tabFee: "Commissione",
    robuxAmount: "Quantità di Robux",
    usdAmount: "Importo in USD",
    itemPrice: "Prezzo dell'oggetto in Robux",
    purchaseCost: "Costo d'acquisto",
    devexValue: "Valore di incasso (DevEx)",
    robuxYouGet: "Robux che ottieni",
    youReceive: (percent: number) => `Ricevi (${percent}%)`,
    marketplaceFee: (percent: number) => `Commissione del marketplace (${percent}%)`,
    disclaimer:
      "Solo stime, basate sulle tariffe standard. I prezzi reali variano in base a piattaforma e regione. Questa app non è ufficiale e non può darti Robux.",
    inputAmount: "IMPORTO",
    liveRate: "TASSO ATTUALE",
    quickSelect: "SCELTA RAPIDA",
    resultTag: "RISULTATO",
    resultTitle: "Il tuo valore stimato",
    estimated: "VALORE STIMATO",
    infoTitle: "Informazione importante",
  },

  calcHub: {
    title: "Tutti i calcolatori",
    tileTag: "CALCOLATRICE",
    tapToOpen: "TOCCA PER APRIRE",
    robuxUsd: "Robux ⇄ USD",
    basic: "Base",
    pro: "Pro",
    elite: "Elite",
    tierSubtitle: "Confronta i piani Premium",
    months: "Mesi",
    monthsOf: (tier: string) => `Mesi di ${tier}`,
    totalRobux: "Robux totali",
    sameRobuxAs: (tier: string) => `Stessi Robux di ${tier}`,
    monthsValue: (n: string) => `${n} mesi`,
    costWith: (tier: string) => `Costo con ${tier}`,
    difference: "Differenza di prezzo",
    perMonth: (robux: string, usd: string) => `${robux} Robux / mese · ${usd}`,
  },
  games: {
    homeTitle: "GIOCHI",
    homeSubtitle: "Gioca subito",
    title: "Giochi",
    subtitle: "Gioca subito, senza scaricare",
    featured: "IN EVIDENZA",
    play: "Gioca",
    playNow: "Gioca ora",
    emptyTitle: "Giochi in arrivo",
    emptyMessage: "Nuovi giochi in arrivo. Torna presto!",
    playLabel: (title: string) => `Gioca a ${title}`,
  },

  sounds: {
    homeTitle: "SUONI",
    homeSubtitle: "Scopri i tuoi effetti sonori preferiti",
    title: "Suoni",
    subtitle: "Tocca un suono per riprodurlo",
    getSound: "Ottieni questo effetto sonoro",
    saving: "Salvataggio…",
    saved: "Salvato in Musica",
    volume: "Volume",
    play: "Riproduci",
    pause: "Pausa",
    previous: "Suono precedente",
    next: "Suono successivo",
    permissionTitle: "Accesso all'archiviazione necessario",
    permissionMessage: (app: string) =>
      `Consenti a ${app} di salvare i suoni sul tuo dispositivo.`,
    failedTitle: "Download non riuscito",
    failedMessage: "Non è stato possibile salvare questo suono. Riprova.",
    emptyTitle: "Suoni in arrivo",
    emptyMessage: "Nuovi suoni in arrivo. Torna presto!",
  },

  promo: {
    ad: "ADV",
    cta: "Scopri di più",
  },
  update: {
    title: "Aggiornamento disponibile",
    message: "È pronta una nuova versione dell'app con correzioni e novità.",
    /** Shown when this version is below `min_version` (no "Later"). */
    forcedTitle: "Aggiornamento necessario",
    forcedMessage: "Questa versione non è più supportata. Aggiorna per continuare a usare l'app.",
    newVersion: (v) => `Versione ${v}`,
    update: "Aggiorna ora",
    later: "Più tardi",
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
    Hair: "Capelli",
    Streetwear: "Streetwear",
    Casual: "Casual",
    Anime: "Anime",
    Fantasy: "Fantasy",
    Cyberpunk: "Cyberpunk",
    Cute: "Carino",
  },
};
