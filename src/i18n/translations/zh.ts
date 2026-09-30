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
    Streetwear: "街头",
    Casual: "休闲",
    Anime: "动漫",
    Fantasy: "奇幻",
    Cyberpunk: "赛博朋克",
    Cute: "可爱",
  },
};
