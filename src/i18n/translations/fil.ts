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

  outfitFlow: {
    categoriesTitle: "Mga Kategorya ng Outfit",
    categoriesSubtitle: "Pumili ng kategoryang tutuklasin",
    clickHere: "I-CLICK DITO",
    groups: {
      tops: {
        title: "Core Collection",
        subtitle: "Dinisenyo para sa mga manlalarong namumuno.",
      },
      jackets: {
        title: "Next-Gen Gear",
        subtitle: "Nagsisimula ang pakikipagsapalaran sa tamang gear.",
      },
      pants: {
        title: "Mission Pants",
        subtitle: "Bawat hakbang, pahayag ng layunin.",
      },
      hats: {
        title: "Player Hats",
        subtitle: "Ipagtanggol ang istilo mo, sakupin ang araw mo.",
      },
      hair: {
        title: "Dynamic Hairstyles",
        subtitle: "Para sa matatapang na galaw at walang takot na look.",
      },
      accessories: {
        title: "Elite Accessories",
        subtitle: "Bawat item, bagong level ng style.",
      },
    },
    categoryComingSoon: "Malapit na",
    categoryComingSoonMessage: "Paparating na ang mga bagong item. Balik ka agad!",
    count: (n: number) => `${n} outfit`,
    collectionSubtitle: (n: number) => `${n} outfit sa koleksyong ito`,
    letsGoTitle: "Handa ka na ba sa look na ito?",
    letsGoMessage: "Tingnan nang malapitan ang outfit at i-unlock ang item ID nito.",
    letsGo: "Tara Na",
    getId: "Kunin ang ID",
    scratchTitle: "Kaskasin at Kunin ang ID",
    scratchSubtitle: "Kaskasin ang card para makita ang item ID",
    scratchHint: "Kaskasin dito",
    idLabel: "ITEM ID",
    copy: "Kopyahin ang ID",
    copied: "Nakopya!",
    comingSoon: "Paparating pa ang ID",
    comingSoonMessage: "Idinadagdag na namin ang ID ng outfit na ito. Balik ka mamaya!",
    howToUse: "I-search ang ID na ito sa avatar shop ng laro para mahanap ang item.",
  },

  calculator: {
    homeTitle: "CALCULATOR",
    homeSubtitle: "Robux ⇄ USD sa ilang segundo",
    title: "Robux Calculator",
    subtitle: "Tantyahin ang halaga ng Robux at USD",
    tabRobuxToUsd: "Robux → $",
    tabUsdToRobux: "$ → Robux",
    tabFee: "Bayad sa Benta",
    robuxAmount: "Halaga ng Robux",
    usdAmount: "Halaga sa USD",
    itemPrice: "Presyo ng item sa Robux",
    purchaseCost: "Gastos sa pagbili",
    devexValue: "Halaga ng cash-out (DevEx)",
    robuxYouGet: "Robux na makukuha mo",
    youReceive: (percent: number) => `Matatanggap mo (${percent}%)`,
    marketplaceFee: (percent: number) => `Bayad sa marketplace (${percent}%)`,
    disclaimer:
      "Tantya lang ito, batay sa karaniwang rate. Iba-iba ang totoong presyo ayon sa platform at rehiyon. Hindi opisyal ang app na ito at hindi ka nito mabibigyan ng Robux.",
    inputAmount: "HALAGA",
    liveRate: "KASALUKUYANG RATE",
    quickSelect: "MABILIS NA PILI",
    resultTag: "RESULTA",
    resultTitle: "Tinatayang halaga mo",
    estimated: "TINATAYANG HALAGA",
    infoTitle: "Mahalagang impormasyon",
  },

  calcHub: {
    title: "Lahat ng Calculator",
    tileTag: "CALCULATOR",
    tapToOpen: "I-TAP PARA BUKSAN",
    robuxUsd: "Robux ⇄ USD",
    basic: "Basic",
    pro: "Pro",
    elite: "Elite",
    tierSubtitle: "Ihambing ang mga Premium plan",
    months: "Buwan",
    monthsOf: (tier: string) => `Mga buwan ng ${tier}`,
    totalRobux: "Kabuuang Robux",
    sameRobuxAs: (tier: string) => `Parehong Robux ng ${tier}`,
    monthsValue: (n: string) => `${n} buwan`,
    costWith: (tier: string) => `Gastos gamit ang ${tier}`,
    difference: "Pagkakaiba ng presyo",
    perMonth: (robux: string, usd: string) => `${robux} Robux / buwan · ${usd}`,
  },
  games: {
    homeTitle: "MGA LARO",
    homeSubtitle: "Maglaro agad",
    title: "Mga Laro",
    subtitle: "Maglaro agad, hindi kailangan ng download",
    featured: "TAMPOK",
    play: "Laruin",
    playNow: "Laruin Ngayon",
    emptyTitle: "Paparating na ang mga laro",
    emptyMessage: "Paparating na ang mga bagong laro. Balik ka agad!",
    playLabel: (title: string) => `Laruin ang ${title}`,
  },

  sounds: {
    homeTitle: "MGA TUNOG",
    homeSubtitle: "Tuklasin ang mga paboritong sound effect",
    title: "Mga Tunog",
    subtitle: "I-tap ang tunog para patugtugin",
    getSound: "Kunin ang Sound Effect na Ito",
    saving: "Sine-save…",
    saved: "Na-save sa Music",
    volume: "Volume",
    play: "I-play",
    pause: "I-pause",
    previous: "Nakaraang tunog",
    next: "Susunod na tunog",
    permissionTitle: "Kailangan ng access sa storage",
    permissionMessage: (app: string) =>
      `Payagan ang ${app} na mag-save ng mga tunog sa iyong device.`,
    failedTitle: "Hindi nag-download",
    failedMessage: "Hindi namin ma-save ang tunog na ito. Pakisubukan ulit.",
    emptyTitle: "Parating na ang mga tunog",
    emptyMessage: "Parating na ang mga bagong tunog. Bumalik muli!",
  },

  promo: {
    ad: "AD",
    cta: "Alamin pa",
  },
  update: {
    title: "May bagong update",
    message: "Handa na ang bagong bersyon ng app na may mga ayos at bagong feature.",
    /** Shown when this version is below `min_version` (no "Later"). */
    forcedTitle: "Kailangang mag-update",
    forcedMessage: "Hindi na suportado ang bersyong ito. Mag-update para patuloy na magamit ang app.",
    newVersion: (v) => `Bersyon ${v}`,
    update: "I-update ngayon",
    later: "Mamaya",
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
    next: "Susunod",
    save: "I-save",
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
    Hair: "Buhok",
    Streetwear: "Streetwear",
    Casual: "Kaswal",
    Anime: "Anime",
    Fantasy: "Fantasy",
    Cyberpunk: "Cyberpunk",
    Cute: "Cute",
  },
};
