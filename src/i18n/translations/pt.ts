import type { Strings } from "./en";

export const pt: Strings = {
  common: {
    goBack: "Voltar",
    back: "Voltar",
    share: "Compartilhar",
    settings: "Configurações",
    cancel: "Cancelar",
    ok: "OK",
    openSettings: "Abrir Configurações",
    explore: "EXPLORAR",
  },

  splash: {
    tagline: "SEU MUNDO. SEU ESTILO.",
    loading: "CARREGANDO SEU MUNDO",
    footer: "DESCUBRA • PERSONALIZE • EXPLORE",
  },

  home: {
    brandTagline: "OUTFITS E SKINS",
    exploreCategories: "Explorar categorias",
  },

  categories: {
    outfits: {
      title: "OUTFITS",
      subtitle: "Encontre seu visual perfeito",
      featuredTag: "DESTAQUE",
      featuredSubtitle: "Looks estilosos para\ntodos os visuais.",
    },
    characters: {
      title: "PERSONAGENS",
      subtitle: "Conheça seus ícones de estilo",
      featuredTag: "NOVIDADE",
      featuredSubtitle: "Conheça seu próximo\nícone de estilo.",
    },
    emotes: {
      title: "EMOTES",
      subtitle: "Mostre sua vibe",
      featuredTag: "EM ALTA",
      featuredSubtitle: "Mostre sua vibe\ncom estilo.",
    },
    skins: {
      title: "ACESSÓRIOS",
      subtitle: "Complete seu visual",
      featuredTag: "HOT",
      featuredSubtitle: "Bonés, correntes, bolsas\ne mais.",
    },
  },

  outfits: {
    title: "Todos os outfits",
    subtitle: "Encontre seu próximo visual favorito",
    empty: "Nenhum outfit encontrado",
    emptySaved: "Nenhum outfit salvo corresponde a este filtro.",
    emptyAll: "Ainda não há outfits com esses filtros.",
    emptyFilter: (filter: string) => `Ainda não há outfits de ${filter}.`,
    showAll: "Mostrar todos os outfits",
    save: (name: string) => `Salvar ${name}`,
    unsave: (name: string) => `Remover ${name} dos favoritos`,
  },

  characters: {
    title: "Personagens",
    subtitle: "Descubra seu próximo visual icônico",
  },

  emotes: {
    title: "Emotes",
    subtitle: "Mostre sua vibe",
    all: "Todos os emotes",
    count: (n: number) => `${n} emotes`,
    label: (name: string) => `Emote ${name}`,
  },

  accessories: {
    title: "Acessórios",
    subtitle: "Bonés, tênis e toques finais",
  },

  notFound: {
    outfit: "Outfit não encontrado",
    character: "Personagem não encontrado",
    emote: "Emote não encontrado",
    accessory: "Acessório não encontrado",
    message: "Este item pode ter sido removido.",
  },

  details: {
    shareMessage: (name: string, app: string) =>
      `Confira ${name} no ${app} ✨`,
    download: "Baixar",
    downloadLabel: "Baixar esta imagem em Fotos",
    saving: "Salvando…",
    saved: "Salvo em Fotos",
    photosTitle: "Acesso às Fotos necessário",
    photosMessage: (app: string) =>
      `Permita que o ${app} salve imagens na sua biblioteca de fotos.`,
    failedTitle: "Falha ao baixar",
    failedMessage: "Não foi possível salvar esta imagem. Tente novamente.",
  },

  settings: {
    title: "Configurações",
    shareApp: "Compartilhar app",
    language: "Idioma",
    rateApp: "Avaliar app",
    version: "Versão",
    privacyPolicy: "Política de Privacidade",
    shareMessage: (app: string) =>
      `Descubra outfits, personagens e skins no ${app} ✨`,
    comingSoonTitle: "Em breve",
    comingSoonMessage: (app: string) => `O ${app} ainda não está na App Store.`,
    privacySoon: "A política de privacidade estará disponível em breve.",
    linkFailedTitle: "Não foi possível abrir o link",
    linkFailedMessage: "Tente novamente mais tarde.",
  },

  language: {
    title: "Idioma",
    subtitle: "Escolha seu idioma preferido",
    confirm: "Confirmar idioma",
  },

  labels: {
    All: "Todos",
    // Tags
    HOT: "HOT",
    NEW: "NOVO",
    POPULAR: "POPULAR",
    RARE: "RARO",
    TRENDING: "EM ALTA",
    // Pieces
    Jacket: "Jaqueta",
    Top: "Top",
    Pants: "Calça",
    Shorts: "Shorts",
    Cap: "Boné",
    Shoes: "Sapatos",
    // Styles
    Streetwear: "Streetwear",
    Casual: "Casual",
    Anime: "Anime",
    Fantasy: "Fantasia",
    Cyberpunk: "Cyberpunk",
    Cute: "Fofo",
  },
};
