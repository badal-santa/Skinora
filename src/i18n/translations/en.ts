/**
 * English strings — the source of truth. Every other language must provide
 * the same keys (enforced by the `Strings` type).
 *
 * Item names (outfits, characters, emotes) are product names and stay as-is.
 */
export const en = {
  common: {
    goBack: "Go Back",
    back: "Go back",
    share: "Share",
    settings: "Settings",
    cancel: "Cancel",
    ok: "OK",
    openSettings: "Open Settings",
    explore: "EXPLORE",
  },

  splash: {
    tagline: "YOUR WORLD. YOUR STYLE.",
    loading: "LOADING YOUR WORLD",
    footer: "DISCOVER • CUSTOMIZE • EXPLORE",
  },

  home: {
    brandTagline: "OUTFIT & SKIN",
    exploreCategories: "Explore Categories",
  },

  /** Keyed by category id in data.js. */
  categories: {
    outfits: {
      title: "OUTFITS",
      subtitle: "Find your perfect look",
      featuredTag: "FEATURED",
      featuredSubtitle: "Stylish fits for\nevery look.",
    },
    characters: {
      title: "CHARACTERS",
      subtitle: "Meet your style icons",
      featuredTag: "NEW DROP",
      featuredSubtitle: "Meet your next\nstyle icon.",
    },
    emotes: {
      title: "EMOTES",
      subtitle: "Show off your vibe",
      featuredTag: "TRENDING",
      featuredSubtitle: "Show off your\nvibe in style.",
    },
    skins: {
      title: "ACCESSORIES",
      subtitle: "Complete your look",
      featuredTag: "HOT",
      featuredSubtitle: "Caps, chains, bags\n& more.",
    },
  },

  outfits: {
    title: "All Outfits",
    subtitle: "Find your next favorite look",
    empty: "No outfits found",
    emptySaved: "No saved outfits match this filter.",
    emptyAll: "No outfits with these filters yet.",
    emptyFilter: (filter: string) => `No ${filter} outfits yet.`,
    showAll: "Show all outfits",
    save: (name: string) => `Save ${name}`,
    unsave: (name: string) => `Remove ${name} from favorites`,
  },

  characters: {
    title: "Characters",
    subtitle: "Discover your next iconic look",
  },

  emotes: {
    title: "Emotes",
    subtitle: "Show off your vibe",
    all: "All Emotes",
    count: (n: number) => `${n} emotes`,
    label: (name: string) => `${name} emote`,
  },

  accessories: {
    title: "Accessories",
    subtitle: "Caps, kicks & finishing touches",
  },

  notFound: {
    outfit: "Outfit not found",
    character: "Character not found",
    emote: "Emote not found",
    accessory: "Accessory not found",
    message: "This item may have been removed.",
  },

  details: {
    shareMessage: (name: string, app: string) =>
      `Check out ${name} on ${app} ✨`,
    download: "Download",
    downloadLabel: "Download this image to photos",
    saving: "Saving…",
    saved: "Saved to Photos",
    photosTitle: "Photos access needed",
    photosMessage: (app: string) =>
      `Allow ${app} to save images to your photo library.`,
    failedTitle: "Download failed",
    failedMessage: "We couldn't save this image. Please try again.",
  },

  settings: {
    title: "Settings",
    shareApp: "Share App",
    language: "Language",
    rateApp: "Rate App",
    version: "Version",
    privacyPolicy: "Privacy Policy",
    shareMessage: (app: string) =>
      `Discover outfits, characters and skins on ${app} ✨`,
    comingSoonTitle: "Coming soon",
    comingSoonMessage: (app: string) => `${app} isn't on the App Store yet.`,
    privacySoon: "The privacy policy will be available soon.",
    linkFailedTitle: "Couldn't open link",
    linkFailedMessage: "Please try again later.",
  },

  language: {
    title: "Language",
    subtitle: "Choose your preferred language",
    confirm: "Confirm language",
  },

  /**
   * Data values shown in the UI (tags, piece types, styles, filters).
   * Looked up by their English value; unknown values are shown as-is.
   */
  labels: {
    All: "All",
    // Tags
    HOT: "HOT",
    NEW: "NEW",
    POPULAR: "POPULAR",
    RARE: "RARE",
    TRENDING: "TRENDING",
    // Pieces
    Jacket: "Jacket",
    Top: "Top",
    Pants: "Pants",
    Shorts: "Shorts",
    Cap: "Cap",
    Shoes: "Shoes",
    // Styles
    Streetwear: "Streetwear",
    Casual: "Casual",
    Anime: "Anime",
    Fantasy: "Fantasy",
    Cyberpunk: "Cyberpunk",
    Cute: "Cute",
  } as Record<string, string>,
};

export type Strings = typeof en;
