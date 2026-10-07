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

  outfitFlow: {
    categoriesTitle: "Categorías de atuendos",
    categoriesSubtitle: "Elige una categoría para explorar",
    clickHere: "HAZ CLIC AQUÍ",
    groups: {
      tops: {
        title: "Colección Esencial",
        subtitle: "Diseñada para los jugadores que lideran.",
      },
      jackets: {
        title: "Equipo Next-Gen",
        subtitle: "La aventura empieza con el equipo adecuado.",
      },
      pants: {
        title: "Pantalones Misión",
        subtitle: "Cada paso, una declaración de propósito.",
      },
      hats: {
        title: "Gorras de Jugador",
        subtitle: "Defiende tu estilo, conquista tu día.",
      },
      hair: {
        title: "Peinados dinámicos",
        subtitle: "Hechos para movimientos audaces y looks sin miedo.",
      },
      accessories: {
        title: "Accesorios élite",
        subtitle: "Cada objeto, un nuevo nivel de estilo.",
      },
    },
    categoryComingSoon: "Próximamente",
    categoryComingSoonMessage: "Pronto llegarán nuevos artículos. ¡Vuelve más tarde!",
    count: (n: number) => `${n} atuendos`,
    collectionSubtitle: (n: number) => `${n} atuendos en esta colección`,
    letsGoTitle: "¿Listo para lucir este look?",
    letsGoMessage: "Mira el atuendo de cerca y desbloquea su ID de artículo.",
    letsGo: "Vamos",
    getId: "Obtener ID",
    scratchTitle: "Rasca y obtén el ID",
    scratchSubtitle: "Rasca la tarjeta para revelar el ID del artículo",
    scratchHint: "Rasca aquí",
    idLabel: "ID DEL ARTÍCULO",
    copy: "Copiar ID",
    copied: "¡Copiado!",
    comingSoon: "ID próximamente",
    comingSoonMessage: "Estamos añadiendo el ID de este atuendo. ¡Vuelve pronto!",
    howToUse: "Busca este ID en la tienda de avatares del juego para encontrar el artículo.",
  },

  calculator: {
    homeTitle: "CALCULADORA",
    homeSubtitle: "Robux ⇄ USD en segundos",
    title: "Calculadora de Robux",
    subtitle: "Estima valores de Robux y USD",
    tabRobuxToUsd: "Robux → $",
    tabUsdToRobux: "$ → Robux",
    tabFee: "Comisión",
    robuxAmount: "Cantidad de Robux",
    usdAmount: "Cantidad en USD",
    itemPrice: "Precio del artículo en Robux",
    purchaseCost: "Costo de compra",
    devexValue: "Valor de retiro (DevEx)",
    robuxYouGet: "Robux que obtienes",
    youReceive: (percent: number) => `Recibes (${percent}%)`,
    marketplaceFee: (percent: number) => `Comisión del mercado (${percent}%)`,
    disclaimer:
      "Solo estimaciones, basadas en tarifas estándar. Los precios reales varían según la plataforma y la región. Esta app no es oficial y no puede darte Robux.",
    inputAmount: "CANTIDAD",
    liveRate: "TASA ACTUAL",
    quickSelect: "SELECCIÓN RÁPIDA",
    resultTag: "RESULTADO",
    resultTitle: "Tu valor estimado",
    estimated: "VALOR ESTIMADO",
    infoTitle: "Información importante",
  },

  calcHub: {
    title: "Todas las calculadoras",
    tileTag: "CALCULADORA",
    tapToOpen: "TOCA PARA ABRIR",
    robuxUsd: "Robux ⇄ USD",
    basic: "Básico",
    pro: "Pro",
    elite: "Elite",
    tierSubtitle: "Compara los planes Premium",
    months: "Meses",
    monthsOf: (tier: string) => `Meses de ${tier}`,
    totalRobux: "Robux totales",
    sameRobuxAs: (tier: string) => `Mismos Robux que ${tier}`,
    monthsValue: (n: string) => `${n} meses`,
    costWith: (tier: string) => `Costo con ${tier}`,
    difference: "Diferencia de precio",
    perMonth: (robux: string, usd: string) => `${robux} Robux / mes · ${usd}`,
  },
  games: {
    homeTitle: "JUEGOS",
    homeSubtitle: "Juega al instante",
    title: "Juegos",
    subtitle: "Juega al instante, sin descargas",
    featured: "DESTACADO",
    play: "Jugar",
    playNow: "Jugar ya",
    emptyTitle: "Juegos próximamente",
    emptyMessage: "Hay juegos nuevos en camino. ¡Vuelve pronto!",
    playLabel: (title: string) => `Jugar a ${title}`,
  },

  sounds: {
    homeTitle: "SONIDOS",
    homeSubtitle: "Explora tus efectos de sonido favoritos",
    title: "Sonidos",
    subtitle: "Toca un sonido para reproducirlo",
    getSound: "Obtener este efecto de sonido",
    saving: "Guardando…",
    saved: "Guardado en Música",
    volume: "Volumen",
    play: "Reproducir",
    pause: "Pausar",
    previous: "Sonido anterior",
    next: "Siguiente sonido",
    permissionTitle: "Se necesita acceso al almacenamiento",
    permissionMessage: (app: string) =>
      `Permite que ${app} guarde sonidos en tu dispositivo.`,
    failedTitle: "Error en la descarga",
    failedMessage: "No pudimos guardar este sonido. Inténtalo de nuevo.",
    emptyTitle: "Sonidos próximamente",
    emptyMessage: "Hay nuevos sonidos en camino. ¡Vuelve pronto!",
  },

  promo: {
    ad: "ANUNCIO",
    cta: "Más información",
  },
  update: {
    title: "Actualización disponible",
    message: "Hay una nueva versión de la app con correcciones y novedades.",
    /** Shown when this version is below `min_version` (no "Later"). */
    forcedTitle: "Actualización necesaria",
    forcedMessage: "Esta versión ya no es compatible. Actualiza para seguir usando la app.",
    newVersion: (v) => `Versión ${v}`,
    update: "Actualizar ahora",
    later: "Más tarde",
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
    next: "Siguiente",
    save: "Guardar",
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
    Hair: "Pelo",
    // Styles
    Streetwear: "Streetwear",
    Casual: "Casual",
    Anime: "Anime",
    Fantasy: "Fantasía",
    Cyberpunk: "Cyberpunk",
    Cute: "Tierno",
  },
};
