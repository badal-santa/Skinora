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

  outfitFlow: {
    categoriesTitle: "Categorias de looks",
    categoriesSubtitle: "Escolha uma categoria para explorar",
    clickHere: "CLIQUE AQUI",
    groups: {
      tops: {
        title: "Coleção Essencial",
        subtitle: "Feita para jogadores que lideram.",
      },
      jackets: {
        title: "Equipamento Next-Gen",
        subtitle: "A aventura começa com o equipamento certo.",
      },
      pants: {
        title: "Calças Missão",
        subtitle: "Cada passo, uma declaração de propósito.",
      },
      hats: {
        title: "Bonés de Jogador",
        subtitle: "Defenda seu estilo, conquiste seu dia.",
      },
      hair: {
        title: "Cabelos dinâmicos",
        subtitle: "Feitos para movimentos ousados e visuais sem medo.",
      },
      accessories: {
        title: "Acessórios de elite",
        subtitle: "Cada item, um novo nível de estilo.",
      },
    },
    categoryComingSoon: "Em breve",
    categoryComingSoonMessage: "Novos itens estão a caminho. Volte em breve!",
    count: (n: number) => `${n} looks`,
    collectionSubtitle: (n: number) => `${n} looks nesta coleção`,
    letsGoTitle: "Pronto para arrasar neste look?",
    letsGoMessage: "Veja o look de perto e desbloqueie o ID do item.",
    letsGo: "Vamos lá",
    getId: "Obter ID",
    scratchTitle: "Raspe e obtenha o ID",
    scratchSubtitle: "Raspe o cartão para revelar o ID do item",
    scratchHint: "Raspe aqui",
    idLabel: "ID DO ITEM",
    copy: "Copiar ID",
    copied: "Copiado!",
    comingSoon: "ID em breve",
    comingSoonMessage: "Estamos adicionando o ID deste look. Volte em breve!",
    howToUse: "Pesquise este ID na loja de avatares do jogo para encontrar o item.",
  },

  calculator: {
    homeTitle: "CALCULADORA",
    homeSubtitle: "Robux ⇄ USD em segundos",
    title: "Calculadora de Robux",
    subtitle: "Estime valores de Robux e USD",
    tabRobuxToUsd: "Robux → $",
    tabUsdToRobux: "$ → Robux",
    tabFee: "Taxa de venda",
    robuxAmount: "Quantidade de Robux",
    usdAmount: "Valor em USD",
    itemPrice: "Preço do item em Robux",
    purchaseCost: "Custo de compra",
    devexValue: "Valor de saque (DevEx)",
    robuxYouGet: "Robux que você recebe",
    youReceive: (percent: number) => `Você recebe (${percent}%)`,
    marketplaceFee: (percent: number) => `Taxa do marketplace (${percent}%)`,
    disclaimer:
      "Apenas estimativas, baseadas em taxas padrão. Os preços reais variam conforme a plataforma e a região. Este app não é oficial e não pode dar Robux a você.",
    inputAmount: "VALOR",
    liveRate: "TAXA ATUAL",
    quickSelect: "SELEÇÃO RÁPIDA",
    resultTag: "RESULTADO",
    resultTitle: "Seu valor estimado",
    estimated: "VALOR ESTIMADO",
    infoTitle: "Informação importante",
  },

  calcHub: {
    title: "Todas as calculadoras",
    tileTag: "CALCULADORA",
    tapToOpen: "TOQUE PARA ABRIR",
    robuxUsd: "Robux ⇄ USD",
    basic: "Básico",
    pro: "Pro",
    elite: "Elite",
    tierSubtitle: "Compare os planos Premium",
    months: "Meses",
    monthsOf: (tier: string) => `Meses de ${tier}`,
    totalRobux: "Total de Robux",
    sameRobuxAs: (tier: string) => `Mesmos Robux que ${tier}`,
    monthsValue: (n: string) => `${n} meses`,
    costWith: (tier: string) => `Custo com ${tier}`,
    difference: "Diferença de preço",
    perMonth: (robux: string, usd: string) => `${robux} Robux / mês · ${usd}`,
  },
  games: {
    homeTitle: "JOGOS",
    homeSubtitle: "Jogue na hora",
    title: "Jogos",
    subtitle: "Jogue na hora, sem baixar nada",
    featured: "EM DESTAQUE",
    play: "Jogar",
    playNow: "Jogar agora",
    emptyTitle: "Jogos em breve",
    emptyMessage: "Novos jogos a caminho. Volte em breve!",
    playLabel: (title: string) => `Jogar ${title}`,
  },

  sounds: {
    homeTitle: "SONS",
    homeSubtitle: "Explore seus efeitos sonoros favoritos",
    title: "Sons",
    subtitle: "Toque em um som para reproduzi-lo",
    getSound: "Obter este efeito sonoro",
    saving: "Salvando…",
    saved: "Salvo em Música",
    volume: "Volume",
    play: "Reproduzir",
    pause: "Pausar",
    previous: "Som anterior",
    next: "Próximo som",
    permissionTitle: "Acesso ao armazenamento necessário",
    permissionMessage: (app: string) =>
      `Permita que o ${app} salve sons no seu dispositivo.`,
    failedTitle: "Falha no download",
    failedMessage: "Não foi possível salvar este som. Tente novamente.",
    emptyTitle: "Sons em breve",
    emptyMessage: "Novos sons estão a caminho. Volte logo!",
  },

  promo: {
    ad: "ANÚNCIO",
    cta: "Saiba mais",
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
    Hair: "Cabelo",
    // Styles
    Streetwear: "Streetwear",
    Casual: "Casual",
    Anime: "Anime",
    Fantasy: "Fantasia",
    Cyberpunk: "Cyberpunk",
    Cute: "Fofo",
  },
};
