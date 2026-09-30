import type { Strings } from "./en";

export const fil: Strings = {
  common: {
    goBack: "Bumalik",
    back: "Bumalik",
    share: "I-share",
    settings: "Mga Setting",
    cancel: "Kanselahin",
    ok: "OK",
    openSettings: "Buksan ang Settings",
    explore: "TUKLASIN",
  },

  splash: {
    tagline: "IYONG MUNDO. IYONG STYLE.",
    loading: "NILOLOAD ANG IYONG MUNDO",
    footer: "TUKLASIN • I-CUSTOMIZE • MAG-EXPLORE",
  },

  home: {
    brandTagline: "OUTFIT & SKIN",
    exploreCategories: "Tuklasin ang mga Kategorya",
  },

  categories: {
    outfits: {
      title: "MGA OUTFIT",
      subtitle: "Hanapin ang perpektong look mo",
      featuredTag: "TAMPOK",
      featuredSubtitle: "Stylish na fit para sa\nbawat look.",
    },
    characters: {
      title: "MGA CHARACTER",
      subtitle: "Kilalanin ang mga style icon mo",
      featuredTag: "BAGONG LABAS",
      featuredSubtitle: "Kilalanin ang susunod\nmong style icon.",
    },
    emotes: {
      title: "MGA EMOTE",
      subtitle: "Ipakita ang vibe mo",
      featuredTag: "TRENDING",
      featuredSubtitle: "Ipakita ang vibe\nmo nang may style.",
    },
    skins: {
      title: "MGA ACCESSORY",
      subtitle: "Kumpletuhin ang look mo",
      featuredTag: "HOT",
      featuredSubtitle: "Cap, chain, bag\nat iba pa.",
    },
  },

  outfits: {
    title: "Lahat ng Outfit",
    subtitle: "Hanapin ang susunod mong paboritong look",
    empty: "Walang nahanap na outfit",
    emptySaved: "Walang naka-save na outfit na tugma sa filter na ito.",
    emptyAll: "Wala pang outfit sa mga filter na ito.",
    emptyFilter: (filter: string) => `Wala pang ${filter} na outfit.`,
    showAll: "Ipakita ang lahat ng outfit",
    save: (name: string) => `I-save ang ${name}`,
    unsave: (name: string) => `Alisin ang ${name} sa mga paborito`,
  },

  characters: {
    title: "Mga Character",
    subtitle: "Tuklasin ang susunod mong iconic na look",
  },

  emotes: {
    title: "Mga Emote",
    subtitle: "Ipakita ang vibe mo",
    all: "Lahat ng Emote",
    count: (n: number) => `${n} emote`,
    label: (name: string) => `${name} emote`,
  },

  accessories: {
    title: "Mga Accessory",
    subtitle: "Cap, sapatos at panghuling detalye",
  },

  notFound: {
    outfit: "Hindi nahanap ang outfit",
    character: "Hindi nahanap ang character",
    emote: "Hindi nahanap ang emote",
    accessory: "Hindi nahanap ang accessory",
    message: "Maaaring naalis na ang item na ito.",
  },

  details: {
    shareMessage: (name: string, app: string) =>
      `Tingnan ang ${name} sa ${app} ✨`,
    download: "I-download",
    downloadLabel: "I-download ang larawang ito sa photos",
    saving: "Sine-save…",
    saved: "Na-save sa Photos",
    photosTitle: "Kailangan ang access sa Photos",
    photosMessage: (app: string) =>
      `Payagan ang ${app} na mag-save ng mga larawan sa iyong photo library.`,
    failedTitle: "Hindi na-download",
    failedMessage: "Hindi namin ma-save ang larawang ito. Pakisubukan muli.",
  },

  settings: {
    title: "Mga Setting",
    shareApp: "I-share ang App",
    language: "Wika",
    rateApp: "I-rate ang App",
    version: "Bersyon",
    privacyPolicy: "Patakaran sa Privacy",
    shareMessage: (app: string) =>
      `Tuklasin ang mga outfit, character at skin sa ${app} ✨`,
    comingSoonTitle: "Malapit na",
    comingSoonMessage: (app: string) =>
      `Wala pa ang ${app} sa App Store.`,
    privacySoon: "Malapit nang magamit ang patakaran sa privacy.",
    linkFailedTitle: "Hindi mabuksan ang link",
    linkFailedMessage: "Pakisubukan muli mamaya.",
  },

  language: {
    title: "Wika",
    subtitle: "Piliin ang gusto mong wika",
    confirm: "Kumpirmahin ang wika",
  },

  labels: {
    All: "Lahat",
    HOT: "HOT",
    NEW: "BAGO",
    POPULAR: "SIKAT",
    RARE: "BIHIRA",
    TRENDING: "TRENDING",
    Jacket: "Jacket",
    Top: "Pang-itaas",
    Pants: "Pantalon",
    Shorts: "Shorts",
    Cap: "Cap",
    Shoes: "Sapatos",
    Streetwear: "Streetwear",
    Casual: "Kaswal",
    Anime: "Anime",
    Fantasy: "Fantasy",
    Cyberpunk: "Cyberpunk",
    Cute: "Cute",
  },
};
