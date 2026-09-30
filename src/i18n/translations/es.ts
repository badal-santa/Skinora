import type { Strings } from "./en";

export const es: Strings = {
  common: {
    goBack: "Volver",
    back: "Volver",
    share: "Compartir",
    settings: "Ajustes",
    cancel: "Cancelar",
    ok: "OK",
    openSettings: "Abrir Ajustes",
    explore: "EXPLORAR",
  },

  splash: {
    tagline: "TU MUNDO. TU ESTILO.",
    loading: "CARGANDO TU MUNDO",
    footer: "DESCUBRE • PERSONALIZA • EXPLORA",
  },

  home: {
    brandTagline: "OUTFITS Y SKINS",
    exploreCategories: "Explorar categorías",
  },

  categories: {
    outfits: {
      title: "OUTFITS",
      subtitle: "Encuentra tu look perfecto",
      featuredTag: "DESTACADO",
      featuredSubtitle: "Outfits con estilo\npara cada look.",
    },
    characters: {
      title: "PERSONAJES",
      subtitle: "Conoce a tus íconos de estilo",
      featuredTag: "NOVEDAD",
      featuredSubtitle: "Conoce a tu próximo\nícono de estilo.",
    },
    emotes: {
      title: "EMOTES",
      subtitle: "Muestra tu vibra",
      featuredTag: "TENDENCIA",
      featuredSubtitle: "Muestra tu vibra\ncon estilo.",
    },
    skins: {
      title: "ACCESORIOS",
      subtitle: "Completa tu look",
      featuredTag: "HOT",
      featuredSubtitle: "Gorras, cadenas, bolsos\ny más.",
    },
  },

  outfits: {
    title: "Todos los outfits",
    subtitle: "Encuentra tu próximo look favorito",
    empty: "No se encontraron outfits",
    emptySaved: "Ningún outfit guardado coincide con este filtro.",
    emptyAll: "Aún no hay outfits con estos filtros.",
    emptyFilter: (filter: string) => `Aún no hay outfits de ${filter}.`,
    showAll: "Mostrar todos los outfits",
    save: (name: string) => `Guardar ${name}`,
    unsave: (name: string) => `Quitar ${name} de favoritos`,
  },

  characters: {
    title: "Personajes",
    subtitle: "Descubre tu próximo look icónico",
  },

  emotes: {
    title: "Emotes",
    subtitle: "Muestra tu vibra",
    all: "Todos los emotes",
    count: (n: number) => `${n} emotes`,
    label: (name: string) => `Emote ${name}`,
  },

  accessories: {
    title: "Accesorios",
    subtitle: "Gorras, zapatillas y toques finales",
  },

  notFound: {
    outfit: "Outfit no encontrado",
    character: "Personaje no encontrado",
    emote: "Emote no encontrado",
    accessory: "Accesorio no encontrado",
    message: "Es posible que este elemento haya sido eliminado.",
  },

  details: {
    shareMessage: (name: string, app: string) =>
      `Mira ${name} en ${app} ✨`,
    download: "Descargar",
    downloadLabel: "Descargar esta imagen en Fotos",
    saving: "Guardando…",
    saved: "Guardado en Fotos",
    photosTitle: "Se necesita acceso a Fotos",
    photosMessage: (app: string) =>
      `Permite que ${app} guarde imágenes en tu fototeca.`,
    failedTitle: "Error al descargar",
    failedMessage: "No pudimos guardar esta imagen. Inténtalo de nuevo.",
  },

  settings: {
    title: "Ajustes",
    shareApp: "Compartir app",
    language: "Idioma",
    rateApp: "Valorar app",
    version: "Versión",
    privacyPolicy: "Política de privacidad",
    shareMessage: (app: string) =>
      `Descubre outfits, personajes y skins en ${app} ✨`,
    comingSoonTitle: "Próximamente",
    comingSoonMessage: (app: string) => `${app} aún no está en la App Store.`,
    privacySoon: "La política de privacidad estará disponible pronto.",
    linkFailedTitle: "No se pudo abrir el enlace",
    linkFailedMessage: "Inténtalo de nuevo más tarde.",
  },

  language: {
    title: "Idioma",
    subtitle: "Elige tu idioma preferido",
    confirm: "Confirmar idioma",
  },

  labels: {
    All: "Todos",
    // Tags
    HOT: "HOT",
    NEW: "NUEVO",
    POPULAR: "POPULAR",
    RARE: "RARO",
    TRENDING: "TENDENCIA",
    // Pieces
    Jacket: "Chaqueta",
    Top: "Top",
    Pants: "Pantalón",
    Shorts: "Shorts",
    Cap: "Gorra",
    Shoes: "Zapatos",
    // Styles
    Streetwear: "Streetwear",
    Casual: "Casual",
    Anime: "Anime",
    Fantasy: "Fantasía",
    Cyberpunk: "Cyberpunk",
    Cute: "Tierno",
  },
};
