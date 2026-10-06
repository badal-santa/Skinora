import type { Strings } from "./en";

export const hi: Strings = {
  common: {
    goBack: "वापस जाएँ",
    back: "वापस जाएँ",
    share: "शेयर करें",
    settings: "सेटिंग्स",
    cancel: "रद्द करें",
    ok: "ठीक है",
    openSettings: "सेटिंग्स खोलें",
    explore: "एक्सप्लोर करें",
  },

  splash: {
    tagline: "आपकी दुनिया। आपका स्टाइल।",
    loading: "आपकी दुनिया लोड हो रही है",
    footer: "खोजें • कस्टमाइज़ करें • एक्सप्लोर करें",
  },

  home: {
    brandTagline: "आउटफ़िट और स्किन",
    exploreCategories: "श्रेणियाँ देखें",
  },

  categories: {
    outfits: {
      title: "आउटफ़िट",
      subtitle: "अपना परफ़ेक्ट लुक खोजें",
      featuredTag: "खास",
      featuredSubtitle: "हर लुक के लिए\nस्टाइलिश फ़िट।",
    },
    characters: {
      title: "कैरेक्टर",
      subtitle: "अपने स्टाइल आइकन से मिलें",
      featuredTag: "नया ड्रॉप",
      featuredSubtitle: "अपने अगले\nस्टाइल आइकन से मिलें।",
    },
    emotes: {
      title: "इमोट्स",
      subtitle: "अपना अंदाज़ दिखाएँ",
      featuredTag: "ट्रेंडिंग",
      featuredSubtitle: "अपना अंदाज़\nस्टाइल में दिखाएँ।",
    },
    skins: {
      title: "एक्सेसरीज़",
      subtitle: "अपना लुक पूरा करें",
      featuredTag: "हॉट",
      featuredSubtitle: "कैप, चेन, बैग\nऔर बहुत कुछ।",
    },
  },

  outfits: {
    title: "सभी आउटफ़िट",
    subtitle: "अपना अगला पसंदीदा लुक खोजें",
    empty: "कोई आउटफ़िट नहीं मिला",
    emptySaved: "इस फ़िल्टर से कोई सेव किया आउटफ़िट मेल नहीं खाता।",
    emptyAll: "इन फ़िल्टर के साथ अभी कोई आउटफ़िट नहीं है।",
    emptyFilter: (filter: string) => `अभी कोई ${filter} आउटफ़िट नहीं है।`,
    showAll: "सभी आउटफ़िट दिखाएँ",
    save: (name: string) => `${name} सेव करें`,
    unsave: (name: string) => `${name} को पसंदीदा से हटाएँ`,
  },

  outfitFlow: {
    categoriesTitle: "आउटफ़िट श्रेणियाँ",
    categoriesSubtitle: "अन्वेषण के लिए एक कैटेगरी चुनें",
    clickHere: "यहाँ क्लिक करें",
    groups: {
      tops: {
        title: "कोर कलेक्शन",
        subtitle: "लीड करने वाले खिलाड़ियों के लिए बनाया गया।",
      },
      jackets: {
        title: "नेक्स्ट-जेन गियर",
        subtitle: "सही गियर से ही एडवेंचर शुरू होता है।",
      },
      pants: {
        title: "मिशन पैंट्स",
        subtitle: "हर कदम, एक मकसद का ऐलान।",
      },
      hats: {
        title: "प्लेयर हैट्स",
        subtitle: "अपना स्टाइल बचाओ, अपना दिन जीतो।",
      },
      hair: {
        title: "डायनामिक हेयरस्टाइल",
        subtitle: "बोल्ड मूव्स और निडर लुक्स के लिए बने।",
      },
      accessories: {
        title: "एलीट एक्सेसरीज़",
        subtitle: "हर आइटम, स्टाइल का नया लेवल।",
      },
    },
    categoryComingSoon: "जल्द आ रहा है",
    categoryComingSoonMessage: "नए आइटम जल्द आ रहे हैं। थोड़ी देर बाद फिर देखें!",
    count: (n: number) => `${n} आउटफ़िट`,
    collectionSubtitle: (n: number) => `इस कलेक्शन में ${n} आउटफ़िट`,
    letsGoTitle: "यह लुक आज़माने को तैयार?",
    letsGoMessage: "आउटफ़िट को पास से देखें और उसकी आइटम ID अनलॉक करें।",
    letsGo: "चलो",
    getId: "ID पाएँ",
    scratchTitle: "स्क्रैच करें और ID पाएँ",
    scratchSubtitle: "आइटम ID देखने के लिए कार्ड को स्क्रैच करें",
    scratchHint: "यहाँ स्क्रैच करें",
    idLabel: "आइटम ID",
    copy: "ID कॉपी करें",
    copied: "कॉपी हो गया!",
    comingSoon: "ID जल्द आ रही है",
    comingSoonMessage: "हम इस आउटफ़िट की ID जोड़ रहे हैं। जल्द ही दोबारा देखें!",
    howToUse: "आइटम खोजने के लिए गेम की अवतार शॉप में यह ID खोजें।",
  },

  calculator: {
    homeTitle: "कैलकुलेटर",
    homeSubtitle: "सेकंडों में Robux ⇄ USD",
    title: "Robux कैलकुलेटर",
    subtitle: "Robux और USD का अनुमान लगाएँ",
    tabRobuxToUsd: "Robux → $",
    tabUsdToRobux: "$ → Robux",
    tabFee: "बिक्री शुल्क",
    robuxAmount: "Robux की मात्रा",
    usdAmount: "USD में राशि",
    itemPrice: "आइटम की कीमत (Robux में)",
    purchaseCost: "खरीदने की लागत",
    devexValue: "कैश-आउट मूल्य (DevEx)",
    robuxYouGet: "आपको मिलने वाले Robux",
    youReceive: (percent: number) => `आपको मिलेगा (${percent}%)`,
    marketplaceFee: (percent: number) => `मार्केटप्लेस शुल्क (${percent}%)`,
    disclaimer:
      "केवल अनुमान, मानक दरों पर आधारित। असली कीमतें प्लेटफ़ॉर्म और क्षेत्र के अनुसार बदलती हैं। यह ऐप अनौपचारिक है और आपको Robux नहीं दे सकता।",
    inputAmount: "राशि दर्ज करें",
    liveRate: "मौजूदा दर",
    quickSelect: "झटपट चुनें",
    resultTag: "गणना परिणाम",
    resultTitle: "आपका अनुमानित मूल्य",
    estimated: "अनुमानित मूल्य",
    infoTitle: "ज़रूरी जानकारी",
  },

  calcHub: {
    title: "सभी कैलकुलेटर",
    tileTag: "कैलकुलेटर",
    tapToOpen: "खोलने के लिए टैप करें",
    robuxUsd: "Robux ⇄ USD",
    basic: "बेसिक",
    pro: "प्रो",
    elite: "एलीट",
    tierSubtitle: "प्रीमियम प्लान की तुलना करें",
    months: "महीने",
    monthsOf: (tier: string) => `${tier} के महीने`,
    totalRobux: "कुल Robux",
    sameRobuxAs: (tier: string) => `${tier} जितने Robux`,
    monthsValue: (n: string) => `${n} महीने`,
    costWith: (tier: string) => `${tier} के साथ लागत`,
    difference: "कीमत का अंतर",
    perMonth: (robux: string, usd: string) => `${robux} Robux / माह · ${usd}`,
  },
  games: {
    homeTitle: "गेम्स",
    homeSubtitle: "तुरंत खेलें",
    title: "गेम्स",
    subtitle: "तुरंत खेलें, डाउनलोड की ज़रूरत नहीं",
    featured: "फ़ीचर्ड",
    play: "खेलें",
    playNow: "अभी खेलें",
    emptyTitle: "गेम्स जल्द आ रहे हैं",
    emptyMessage: "नए गेम्स आ रहे हैं। जल्द ही वापस देखें!",
    playLabel: (title: string) => `${title} खेलें`,
  },

  sounds: {
    homeTitle: "साउंड",
    homeSubtitle: "पसंदीदा साउंड इफ़ेक्ट देखें",
    title: "साउंड",
    subtitle: "चलाने के लिए किसी साउंड पर टैप करें",
    getSound: "यह साउंड इफ़ेक्ट पाएं",
    saving: "सेव हो रहा है…",
    saved: "म्यूज़िक में सेव हुआ",
    volume: "वॉल्यूम",
    play: "चलाएं",
    pause: "रोकें",
    previous: "पिछला साउंड",
    next: "अगला साउंड",
    permissionTitle: "स्टोरेज एक्सेस चाहिए",
    permissionMessage: (app: string) =>
      `साउंड आपके डिवाइस में सेव करने के लिए ${app} को अनुमति दें।`,
    failedTitle: "डाउनलोड नहीं हो सका",
    failedMessage: "हम यह साउंड सेव नहीं कर सके। कृपया दोबारा कोशिश करें।",
    emptyTitle: "साउंड जल्द आ रहे हैं",
    emptyMessage: "नए साउंड आने वाले हैं। जल्द ही वापस देखें!",
  },

  promo: {
    ad: "विज्ञापन",
    cta: "और जानें",
  },
  update: {
    title: "अपडेट उपलब्ध है",
    message: "ऐप का नया वर्ज़न सुधारों और नई सुविधाओं के साथ तैयार है।",
    /** Shown when this version is below `min_version` (no "Later"). */
    forcedTitle: "अपडेट ज़रूरी है",
    forcedMessage: "यह वर्ज़न अब समर्थित नहीं है। ऐप इस्तेमाल करते रहने के लिए कृपया अपडेट करें।",
    newVersion: (v) => `वर्ज़न ${v}`,
    update: "अभी अपडेट करें",
    later: "बाद में",
  },

  characters: {
    title: "कैरेक्टर",
    subtitle: "अपना अगला आइकॉनिक लुक खोजें",
  },

  emotes: {
    title: "इमोट्स",
    subtitle: "अपना अंदाज़ दिखाएँ",
    all: "सभी इमोट्स",
    count: (n: number) => `${n} इमोट्स`,
    label: (name: string) => `${name} इमोट`,
  },

  accessories: {
    title: "एक्सेसरीज़",
    subtitle: "कैप, जूते और आख़िरी टच",
  },

  notFound: {
    outfit: "आउटफ़िट नहीं मिला",
    character: "कैरेक्टर नहीं मिला",
    emote: "इमोट नहीं मिला",
    accessory: "एक्सेसरी नहीं मिली",
    message: "हो सकता है यह आइटम हटा दिया गया हो।",
  },

  details: {
    shareMessage: (name: string, app: string) =>
      `${app} पर ${name} देखें ✨`,
    download: "डाउनलोड",
    downloadLabel: "इस इमेज को फ़ोटो में डाउनलोड करें",
    saving: "सेव हो रहा है…",
    saved: "फ़ोटो में सेव हो गया",
    photosTitle: "फ़ोटो एक्सेस ज़रूरी है",
    photosMessage: (app: string) =>
      `${app} को अपनी फ़ोटो लाइब्रेरी में इमेज सेव करने की अनुमति दें।`,
    failedTitle: "डाउनलोड विफल",
    failedMessage: "हम यह इमेज सेव नहीं कर सके। कृपया फिर कोशिश करें।",
  },

  settings: {
    title: "सेटिंग्स",
    shareApp: "ऐप शेयर करें",
    language: "भाषा",
    rateApp: "ऐप को रेट करें",
    version: "वर्शन",
    privacyPolicy: "गोपनीयता नीति",
    shareMessage: (app: string) =>
      `${app} पर आउटफ़िट, कैरेक्टर और स्किन खोजें ✨`,
    comingSoonTitle: "जल्द आ रहा है",
    comingSoonMessage: (app: string) => `${app} अभी App Store पर उपलब्ध नहीं है।`,
    privacySoon: "गोपनीयता नीति जल्द उपलब्ध होगी।",
    linkFailedTitle: "लिंक नहीं खुल सका",
    linkFailedMessage: "कृपया बाद में फिर कोशिश करें।",
  },

  language: {
    title: "भाषा",
    subtitle: "अपनी पसंदीदा भाषा चुनें",
    confirm: "भाषा की पुष्टि करें",
  },

  labels: {
    All: "सभी",
    // Tags
    HOT: "हॉट",
    NEW: "नया",
    POPULAR: "लोकप्रिय",
    RARE: "दुर्लभ",
    TRENDING: "ट्रेंडिंग",
    // Pieces
    Jacket: "जैकेट",
    Top: "टॉप",
    Pants: "पैंट",
    Shorts: "शॉर्ट्स",
    Cap: "कैप",
    Shoes: "जूते",
    Hair: "बाल",
    // Styles
    Streetwear: "स्ट्रीटवियर",
    Casual: "कैज़ुअल",
    Anime: "एनीमे",
    Fantasy: "फ़ैंटेसी",
    Cyberpunk: "साइबरपंक",
    Cute: "क्यूट",
  },
};
