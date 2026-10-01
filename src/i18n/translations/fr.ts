import type { Strings } from "./en";

export const fr: Strings = {
  common: {
    goBack: "Retour",
    back: "Retour",
    share: "Partager",
    settings: "Réglages",
    cancel: "Annuler",
    ok: "OK",
    openSettings: "Ouvrir les Réglages",
    explore: "EXPLORER",
  },

  splash: {
    tagline: "TON MONDE. TON STYLE.",
    loading: "CHARGEMENT DE TON MONDE",
    footer: "DÉCOUVRE • PERSONNALISE • EXPLORE",
  },

  home: {
    brandTagline: "TENUES & SKINS",
    exploreCategories: "Explorer les catégories",
  },

  categories: {
    outfits: {
      title: "TENUES",
      subtitle: "Trouve ton look parfait",
      featuredTag: "À LA UNE",
      featuredSubtitle: "Des tenues stylées\npour chaque look.",
    },
    characters: {
      title: "PERSONNAGES",
      subtitle: "Rencontre tes icônes de style",
      featuredTag: "NOUVEAUTÉ",
      featuredSubtitle: "Rencontre ta prochaine\nicône de style.",
    },
    emotes: {
      title: "EMOTES",
      subtitle: "Montre ta vibe",
      featuredTag: "TENDANCE",
      featuredSubtitle: "Montre ta vibe\navec style.",
    },
    skins: {
      title: "ACCESSOIRES",
      subtitle: "Complète ton look",
      featuredTag: "HOT",
      featuredSubtitle: "Casquettes, chaînes, sacs\net plus.",
    },
  },

  outfits: {
    title: "Toutes les tenues",
    subtitle: "Trouve ton prochain look préféré",
    empty: "Aucune tenue trouvée",
    emptySaved: "Aucune tenue enregistrée ne correspond à ce filtre.",
    emptyAll: "Aucune tenue avec ces filtres pour l'instant.",
    emptyFilter: (filter: string) => `Aucune tenue ${filter} pour l'instant.`,
    showAll: "Afficher toutes les tenues",
    save: (name: string) => `Enregistrer ${name}`,
    unsave: (name: string) => `Retirer ${name} des favoris`,
  },

  outfitFlow: {
    categoriesTitle: "Catégories de tenues",
    categoriesSubtitle: "Choisis une catégorie à explorer",
    clickHere: "CLIQUE ICI",
    groups: {
      tops: {
        title: "Collection Essentielle",
        subtitle: "Conçue pour les joueurs qui mènent.",
      },
      jackets: {
        title: "Équipement Next-Gen",
        subtitle: "L'aventure commence avec le bon équipement.",
      },
      pants: {
        title: "Pantalons Mission",
        subtitle: "Chaque pas, une déclaration d'intention.",
      },
      hats: {
        title: "Casquettes de Joueur",
        subtitle: "Défends ton style, conquiers ta journée.",
      },
      hair: {
        title: "Coiffures dynamiques",
        subtitle: "Conçues pour les mouvements audacieux et les looks sans peur.",
      },
      accessories: {
        title: "Accessoires d'élite",
        subtitle: "Chaque objet, un nouveau niveau de style.",
      },
    },
    categoryComingSoon: "Bientôt disponible",
    categoryComingSoonMessage: "De nouveaux objets arrivent. Revenez bientôt !",
    count: (n: number) => `${n} tenues`,
    collectionSubtitle: (n: number) => `${n} tenues dans cette collection`,
    letsGoTitle: "Prêt à porter ce look ?",
    letsGoMessage: "Découvre la tenue de près et débloque son ID d'objet.",
    letsGo: "C'est parti",
    getId: "Obtenir l'ID",
    scratchTitle: "Gratte et obtiens l'ID",
    scratchSubtitle: "Gratte la carte pour révéler l'ID de l'objet",
    scratchHint: "Gratte ici",
    idLabel: "ID DE L'OBJET",
    copy: "Copier l'ID",
    copied: "Copié !",
    comingSoon: "ID bientôt disponible",
    comingSoonMessage: "Nous ajoutons l'ID de cette tenue. Reviens bientôt !",
    howToUse: "Recherche cet ID dans la boutique d'avatars du jeu pour trouver l'objet.",
  },

  calculator: {
    homeTitle: "CALCULATRICE",
    homeSubtitle: "Robux ⇄ USD en un instant",
    title: "Calculatrice Robux",
    subtitle: "Estimez les valeurs en Robux et USD",
    tabRobuxToUsd: "Robux → $",
    tabUsdToRobux: "$ → Robux",
    tabFee: "Frais de vente",
    robuxAmount: "Montant en Robux",
    usdAmount: "Montant en USD",
    itemPrice: "Prix de l'objet en Robux",
    purchaseCost: "Coût d'achat",
    devexValue: "Valeur de retrait (DevEx)",
    robuxYouGet: "Robux obtenus",
    youReceive: (percent: number) => `Vous recevez (${percent}%)`,
    marketplaceFee: (percent: number) => `Frais du marché (${percent}%)`,
    disclaimer:
      "Estimations uniquement, basées sur les tarifs standard. Les prix réels varient selon la plateforme et la région. Cette appli est non officielle et ne peut pas vous donner de Robux.",
    inputAmount: "MONTANT",
    liveRate: "TAUX ACTUEL",
    quickSelect: "CHOIX RAPIDE",
    resultTag: "RÉSULTAT",
    resultTitle: "Votre valeur estimée",
    estimated: "VALEUR ESTIMÉE",
    infoTitle: "Information importante",
  },

  calcHub: {
    title: "Toutes les calculatrices",
    tileTag: "CALCULATRICE",
    tapToOpen: "TOUCHER POUR OUVRIR",
    robuxUsd: "Robux ⇄ USD",
    basic: "Basique",
    pro: "Pro",
    elite: "Elite",
    tierSubtitle: "Comparer les offres Premium",
    months: "Mois",
    monthsOf: (tier: string) => `Mois de ${tier}`,
    totalRobux: "Total de Robux",
    sameRobuxAs: (tier: string) => `Mêmes Robux que ${tier}`,
    monthsValue: (n: string) => `${n} mois`,
    costWith: (tier: string) => `Coût avec ${tier}`,
    difference: "Différence de prix",
    perMonth: (robux: string, usd: string) => `${robux} Robux / mois · ${usd}`,
  },
  games: {
    homeTitle: "JEUX",
    homeSubtitle: "Jouez instantanément",
    title: "Jeux",
    subtitle: "Jouez instantanément, sans téléchargement",
    featured: "À LA UNE",
    play: "Jouer",
    playNow: "Jouer maintenant",
    emptyTitle: "Jeux bientôt disponibles",
    emptyMessage: "De nouveaux jeux arrivent. Revenez bientôt !",
    playLabel: (title: string) => `Jouer à ${title}`,
  },

  sounds: {
    homeTitle: "SONS",
    homeSubtitle: "Découvrez vos effets sonores préférés",
    title: "Sons",
    subtitle: "Appuyez sur un son pour l'écouter",
    getSound: "Obtenir cet effet sonore",
    saving: "Enregistrement…",
    saved: "Enregistré dans Musique",
    volume: "Volume",
    play: "Lecture",
    pause: "Pause",
    previous: "Son précédent",
    next: "Son suivant",
    permissionTitle: "Accès au stockage requis",
    permissionMessage: (app: string) =>
      `Autorisez ${app} à enregistrer des sons sur votre appareil.`,
    failedTitle: "Échec du téléchargement",
    failedMessage: "Impossible d'enregistrer ce son. Veuillez réessayer.",
    emptyTitle: "Sons bientôt disponibles",
    emptyMessage: "De nouveaux sons arrivent. Revenez bientôt !",
  },

  promo: {
    ad: "PUB",
    cta: "En savoir plus",
  },

  characters: {
    title: "Personnages",
    subtitle: "Découvre ton prochain look iconique",
  },

  emotes: {
    title: "Emotes",
    subtitle: "Montre ta vibe",
    all: "Toutes les emotes",
    count: (n: number) => `${n} emotes`,
    label: (name: string) => `Emote ${name}`,
  },

  accessories: {
    title: "Accessoires",
    subtitle: "Casquettes, baskets et touches finales",
  },

  notFound: {
    outfit: "Tenue introuvable",
    character: "Personnage introuvable",
    emote: "Emote introuvable",
    accessory: "Accessoire introuvable",
    message: "Cet élément a peut-être été supprimé.",
  },

  details: {
    shareMessage: (name: string, app: string) =>
      `Découvre ${name} sur ${app} ✨`,
    download: "Télécharger",
    downloadLabel: "Télécharger cette image dans Photos",
    saving: "Enregistrement…",
    saved: "Enregistré dans Photos",
    photosTitle: "Accès aux Photos requis",
    photosMessage: (app: string) =>
      `Autorise ${app} à enregistrer des images dans ta photothèque.`,
    failedTitle: "Échec du téléchargement",
    failedMessage: "Impossible d'enregistrer cette image. Réessaie.",
  },

  settings: {
    title: "Réglages",
    shareApp: "Partager l'app",
    language: "Langue",
    rateApp: "Noter l'app",
    version: "Version",
    privacyPolicy: "Politique de confidentialité",
    shareMessage: (app: string) =>
      `Découvre des tenues, personnages et skins sur ${app} ✨`,
    comingSoonTitle: "Bientôt disponible",
    comingSoonMessage: (app: string) =>
      `${app} n'est pas encore sur l'App Store.`,
    privacySoon: "La politique de confidentialité sera bientôt disponible.",
    linkFailedTitle: "Impossible d'ouvrir le lien",
    linkFailedMessage: "Réessaie plus tard.",
  },

  language: {
    title: "Langue",
    subtitle: "Choisis ta langue préférée",
    confirm: "Confirmer la langue",
  },

  labels: {
    All: "Tout",
    // Tags
    HOT: "HOT",
    NEW: "NOUVEAU",
    POPULAR: "POPULAIRE",
    RARE: "RARE",
    TRENDING: "TENDANCE",
    // Pieces
    Jacket: "Veste",
    Top: "Haut",
    Pants: "Pantalon",
    Shorts: "Short",
    Cap: "Casquette",
    Shoes: "Chaussures",
    Hair: "Cheveux",
    // Styles
    Streetwear: "Streetwear",
    Casual: "Décontracté",
    Anime: "Anime",
    Fantasy: "Fantasy",
    Cyberpunk: "Cyberpunk",
    Cute: "Mignon",
  },
};
