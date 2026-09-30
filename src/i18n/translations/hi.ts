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
    // Styles
    Streetwear: "स्ट्रीटवियर",
    Casual: "कैज़ुअल",
    Anime: "एनीमे",
    Fantasy: "फ़ैंटेसी",
    Cyberpunk: "साइबरपंक",
    Cute: "क्यूट",
  },
};
