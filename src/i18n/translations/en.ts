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

  /** Outfits → Category → Collection → Let's Go → Preview → Scratch & Get ID. */
  outfitFlow: {
    categoriesTitle: "Outfit Categories",
    categoriesSubtitle: "Pick a category to explore",
    clickHere: "CLICK HERE",
    /** Keyed by `outfitCategories[].id` in data.js. */
    groups: {
      tops: {
        title: "Core Collection",
        subtitle: "Designed for players who lead.",
      },
      jackets: {
        title: "Next-Gen Gear",
        subtitle: "Adventure starts with the right gear.",
      },
      pants: {
        title: "Mission Pants",
        subtitle: "Every step, a statement of purpose.",
      },
      hats: {
        title: "Player Hats",
        subtitle: "Defend your style, conquer your day.",
      },
      hair: {
        title: "Dynamic Hairstyles",
        subtitle: "Made for bold moves and fearless looks.",
      },
      accessories: {
        title: "Elite Accessories",
        subtitle: "Every item, a new level of style.",
      },
    },
    categoryComingSoon: "Coming soon",
    categoryComingSoonMessage: "New items are on the way. Check back soon!",
    count: (n: number) => `${n} outfits`,
    collectionSubtitle: (n: number) => `${n} outfits in this collection`,
    letsGoTitle: "Ready to rock this look?",
    letsGoMessage: "Preview the outfit up close and unlock its item ID.",
    letsGo: "Let's Go",
    getId: "Get ID",
    scratchTitle: "Scratch & Get ID",
    scratchSubtitle: "Scratch the card to reveal the item ID",
    scratchHint: "Scratch here",
    idLabel: "ITEM ID",
    copy: "Copy ID",
    copied: "Copied!",
    comingSoon: "ID coming soon",
    comingSoonMessage: "We're adding the ID for this outfit. Check back soon!",
    howToUse: "Search this ID in the game's avatar shop to find the item.",
  },

  calculator: {
    homeTitle: "CALCULATOR",
    homeSubtitle: "Robux ⇄ USD in seconds",
    title: "Robux Calculator",
    subtitle: "Estimate Robux and USD values",
    tabRobuxToUsd: "Robux → $",
    tabUsdToRobux: "$ → Robux",
    tabFee: "Sales Fee",
    robuxAmount: "Robux amount",
    usdAmount: "Amount in USD",
    itemPrice: "Item price in Robux",
    purchaseCost: "Cost to buy",
    devexValue: "Cash-out value (DevEx)",
    robuxYouGet: "Robux you get",
    youReceive: (percent: number) => `You receive (${percent}%)`,
    marketplaceFee: (percent: number) => `Marketplace fee (${percent}%)`,
    disclaimer:
      "Estimates only, based on standard rates. Real prices vary by platform and region. This app is unofficial and can't give you Robux.",
    inputAmount: "INPUT AMOUNT",
    liveRate: "LIVE RATE",
    quickSelect: "QUICK SELECT",
    resultTag: "CALCULATION RESULT",
    resultTitle: "Your estimated value",
    estimated: "ESTIMATED VALUE",
    infoTitle: "Important information",
  },

  /** "All Calculator" hub and the Premium plan converters. */
  calcHub: {
    title: "All Calculator",
    tileTag: "CALCULATOR",
    tapToOpen: "TAP TO OPEN",
    robuxUsd: "Robux ⇄ USD",
    basic: "Basic",
    pro: "Pro",
    elite: "Elite",
    tierSubtitle: "Compare Premium plans",
    months: "Months",
    monthsOf: (tier: string) => `Months of ${tier}`,
    totalRobux: "Total Robux",
    sameRobuxAs: (tier: string) => `Same Robux as ${tier}`,
    monthsValue: (n: string) => `${n} months`,
    costWith: (tier: string) => `Cost with ${tier}`,
    difference: "Price difference",
    perMonth: (robux: string, usd: string) => `${robux} Robux / month · ${usd}`,
  },

  games: {
    homeTitle: "GAMES",
    homeSubtitle: "Play instantly",
    title: "Games",
    subtitle: "Play instantly, no download needed",
    featured: "FEATURED",
    play: "Play",
    playNow: "Play Now",
    emptyTitle: "Games coming soon",
    emptyMessage: "New games are on the way. Check back soon!",
    playLabel: (title: string) => `Play ${title}`,
  },

  sounds: {
    homeTitle: "SOUNDS",
    homeSubtitle: "Explore favorite sound effects",
    title: "Sounds",
    subtitle: "Tap a sound to play it",
    getSound: "Get this Sound Effect",
    saving: "Saving…",
    saved: "Saved to Music",
    volume: "Volume",
    play: "Play",
    pause: "Pause",
    previous: "Previous sound",
    next: "Next sound",
    permissionTitle: "Storage access needed",
    permissionMessage: (app: string) =>
      `Allow ${app} to save sounds to your device.`,
    failedTitle: "Download failed",
    failedMessage: "We couldn't save this sound. Please try again.",
    emptyTitle: "Sounds coming soon",
    emptyMessage: "New sounds are on the way. Check back soon!",
  },

  promo: {
    /** Required label so users know the card is an ad. */
    ad: "AD",
    cta: "Learn More",
  },
  update: {
    title: "Update available",
    message: "A new version of the app is ready with fixes and new features.",
    /** Shown when this version is below `min_version` (no "Later"). */
    forcedTitle: "Update required",
    forcedMessage: "This version is no longer supported. Please update to keep using the app.",
    newVersion: (v: string) => `Version ${v}`,
    update: "Update now",
    later: "Later",
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
    /** Header button on first launch (continues to Home). */
    next: "Next",
    /** Header button when opened from Settings. */
    save: "Save",
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
    Hair: "Hair",
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
