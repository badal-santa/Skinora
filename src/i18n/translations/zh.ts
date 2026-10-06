import type { Strings } from "./en";

export const zh: Strings = {
  common: {
    goBack: "返回",
    back: "返回",
    share: "分享",
    settings: "设置",
    cancel: "取消",
    ok: "好",
    openSettings: "打开设置",
    explore: "探索",
  },

  splash: {
    tagline: "你的世界，你的风格。",
    loading: "正在加载你的世界",
    footer: "发现 • 定制 • 探索",
  },

  home: {
    brandTagline: "服装与皮肤",
    exploreCategories: "探索分类",
  },

  categories: {
    outfits: {
      title: "服装",
      subtitle: "找到你的完美造型",
      featuredTag: "精选",
      featuredSubtitle: "时尚穿搭，\n适合每种造型",
    },
    characters: {
      title: "角色",
      subtitle: "认识你的风格偶像",
      featuredTag: "新品",
      featuredSubtitle: "遇见你的下一位\n风格偶像",
    },
    emotes: {
      title: "表情动作",
      subtitle: "展现你的态度",
      featuredTag: "热门",
      featuredSubtitle: "潮流十足地\n展现你的态度",
    },
    skins: {
      title: "配饰",
      subtitle: "完善你的造型",
      featuredTag: "火爆",
      featuredSubtitle: "帽子、项链、包包\n等更多配饰",
    },
  },

  outfits: {
    title: "全部服装",
    subtitle: "发现你的下一个心头好",
    empty: "未找到服装",
    emptySaved: "没有符合此筛选条件的已收藏服装。",
    emptyAll: "暂无符合这些筛选条件的服装。",
    emptyFilter: (filter: string) => `暂无${filter}服装。`,
    showAll: "显示全部服装",
    save: (name: string) => `收藏${name}`,
    unsave: (name: string) => `从收藏中移除${name}`,
  },

  outfitFlow: {
    categoriesTitle: "服装分类",
    categoriesSubtitle: "选择一个分类开始探索",
    clickHere: "点击这里",
    groups: {
      tops: {
        title: "核心系列",
        subtitle: "为引领潮流的玩家而设计。",
      },
      jackets: {
        title: "新世代装备",
        subtitle: "冒险从合适的装备开始。",
      },
      pants: {
        title: "任务裤装",
        subtitle: "每一步，都是目标的宣言。",
      },
      hats: {
        title: "玩家帽子",
        subtitle: "守护你的风格，征服你的每一天。",
      },
      hair: {
        title: "动感发型",
        subtitle: "为大胆动作与无畏造型而生。",
      },
      accessories: {
        title: "精英配饰",
        subtitle: "每件单品，都是全新的风格等级。",
      },
    },
    categoryComingSoon: "即将推出",
    categoryComingSoonMessage: "新物品即将上线，敬请期待！",
    count: (n: number) => `${n} 套服装`,
    collectionSubtitle: (n: number) => `此合集共有 ${n} 套服装`,
    letsGoTitle: "准备好穿上这套造型了吗?",
    letsGoMessage: "近距离预览服装,解锁物品 ID。",
    letsGo: "出发",
    getId: "获取 ID",
    scratchTitle: "刮开获取 ID",
    scratchSubtitle: "刮开卡片查看物品 ID",
    scratchHint: "在此刮开",
    idLabel: "物品 ID",
    copy: "复制 ID",
    copied: "已复制!",
    comingSoon: "ID 即将上线",
    comingSoonMessage: "我们正在添加这套服装的 ID,请稍后再来!",
    howToUse: "在游戏的头像商店中搜索此 ID 即可找到物品。",
  },

  calculator: {
    homeTitle: "计算器",
    homeSubtitle: "几秒换算 Robux ⇄ USD",
    title: "Robux 计算器",
    subtitle: "估算 Robux 和 USD 价值",
    tabRobuxToUsd: "Robux → $",
    tabUsdToRobux: "$ → Robux",
    tabFee: "销售手续费",
    robuxAmount: "Robux 数量",
    usdAmount: "美元金额",
    itemPrice: "物品价格(Robux)",
    purchaseCost: "购买花费",
    devexValue: "提现价值 (DevEx)",
    robuxYouGet: "可获得的 Robux",
    youReceive: (percent: number) => `你将收到 (${percent}%)`,
    marketplaceFee: (percent: number) => `市场手续费 (${percent}%)`,
    disclaimer:
      "仅为基于标准汇率的估算,实际价格因平台和地区而异。本应用为非官方应用,无法提供 Robux。",
    inputAmount: "输入金额",
    liveRate: "当前汇率",
    quickSelect: "快速选择",
    resultTag: "计算结果",
    resultTitle: "你的估算值",
    estimated: "估算值",
    infoTitle: "重要信息",
  },

  calcHub: {
    title: "全部计算器",
    tileTag: "计算器",
    tapToOpen: "点击打开",
    robuxUsd: "Robux ⇄ USD",
    basic: "基础",
    pro: "专业",
    elite: "精英",
    tierSubtitle: "比较 Premium 方案",
    months: "月数",
    monthsOf: (tier: string) => `${tier}的月数`,
    totalRobux: "Robux 总数",
    sameRobuxAs: (tier: string) => `与${tier}相同的 Robux`,
    monthsValue: (n: string) => `${n} 个月`,
    costWith: (tier: string) => `使用${tier}的费用`,
    difference: "价格差异",
    perMonth: (robux: string, usd: string) => `${robux} Robux / 月 · ${usd}`,
  },
  games: {
    homeTitle: "游戏",
    homeSubtitle: "即点即玩",
    title: "游戏",
    subtitle: "即点即玩,无需下载",
    featured: "精选",
    play: "开始",
    playNow: "立即开始",
    emptyTitle: "游戏即将上线",
    emptyMessage: "新游戏即将推出,敬请期待!",
    playLabel: (title: string) => `玩${title}`,
  },

  sounds: {
    homeTitle: "音效",
    homeSubtitle: "探索热门音效",
    title: "音效",
    subtitle: "点按音效即可播放",
    getSound: "获取此音效",
    saving: "保存中…",
    saved: "已保存到音乐",
    volume: "音量",
    play: "播放",
    pause: "暂停",
    previous: "上一个音效",
    next: "下一个音效",
    permissionTitle: "需要存储权限",
    permissionMessage: (app: string) =>
      `请允许${app}将音效保存到您的设备。`,
    failedTitle: "下载失败",
    failedMessage: "无法保存此音效，请重试。",
    emptyTitle: "音效即将上线",
    emptyMessage: "新音效即将到来，敬请期待!",
  },

  promo: {
    ad: "广告",
    cta: "了解更多",
  },
  update: {
    title: "有可用更新",
    message: "新版本已推出，包含问题修复和新功能。",
    /** Shown when this version is below `min_version` (no "Later"). */
    forcedTitle: "需要更新",
    forcedMessage: "此版本已不再支持。请更新后继续使用应用。",
    newVersion: (v) => `版本 ${v}`,
    update: "立即更新",
    later: "稍后",
  },

  characters: {
    title: "角色",
    subtitle: "发现你的下一个经典造型",
  },

  emotes: {
    title: "表情动作",
    subtitle: "展现你的态度",
    all: "全部表情动作",
    count: (n: number) => `${n} 个表情动作`,
    label: (name: string) => `${name}表情动作`,
  },

  accessories: {
    title: "配饰",
    subtitle: "帽子、鞋子和点睛之笔",
  },

  notFound: {
    outfit: "未找到该服装",
    character: "未找到该角色",
    emote: "未找到该表情动作",
    accessory: "未找到该配饰",
    message: "此物品可能已被移除。",
  },

  details: {
    shareMessage: (name: string, app: string) =>
      `快来 ${app} 看看 ${name} ✨`,
    download: "下载",
    downloadLabel: "将此图片下载到相册",
    saving: "正在保存…",
    saved: "已保存到相册",
    photosTitle: "需要相册权限",
    photosMessage: (app: string) =>
      `允许 ${app} 将图片保存到你的相册。`,
    failedTitle: "下载失败",
    failedMessage: "无法保存此图片，请重试。",
  },

  settings: {
    title: "设置",
    shareApp: "分享应用",
    language: "语言",
    rateApp: "评价应用",
    version: "版本",
    privacyPolicy: "隐私政策",
    shareMessage: (app: string) =>
      `在 ${app} 发现服装、角色和皮肤 ✨`,
    comingSoonTitle: "即将上线",
    comingSoonMessage: (app: string) => `${app} 尚未上架 App Store。`,
    privacySoon: "隐私政策即将发布。",
    linkFailedTitle: "无法打开链接",
    linkFailedMessage: "请稍后重试。",
  },

  language: {
    title: "语言",
    subtitle: "选择你的首选语言",
    confirm: "确认语言",
  },

  labels: {
    All: "全部",
    HOT: "火爆",
    NEW: "新品",
    POPULAR: "热门",
    RARE: "稀有",
    TRENDING: "潮流",
    Jacket: "夹克",
    Top: "上衣",
    Pants: "长裤",
    Shorts: "短裤",
    Cap: "帽子",
    Shoes: "鞋子",
    Hair: "发型",
    Streetwear: "街头",
    Casual: "休闲",
    Anime: "动漫",
    Fantasy: "奇幻",
    Cyberpunk: "赛博朋克",
    Cute: "可爱",
  },
};
