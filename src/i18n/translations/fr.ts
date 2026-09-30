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
    // Styles
    Streetwear: "Streetwear",
    Casual: "Décontracté",
    Anime: "Anime",
    Fantasy: "Fantasy",
    Cyberpunk: "Cyberpunk",
    Cute: "Mignon",
  },
};
