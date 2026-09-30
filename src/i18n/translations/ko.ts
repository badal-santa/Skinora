import type { Strings } from "./en";

export const ko: Strings = {
  common: {
    goBack: "돌아가기",
    back: "뒤로 가기",
    share: "공유",
    settings: "설정",
    cancel: "취소",
    ok: "확인",
    openSettings: "설정 열기",
    explore: "둘러보기",
  },

  splash: {
    tagline: "나의 세계. 나의 스타일.",
    loading: "세계를 불러오는 중",
    footer: "발견 • 커스터마이즈 • 탐험",
  },

  home: {
    brandTagline: "의상 & 스킨",
    exploreCategories: "카테고리 둘러보기",
  },

  categories: {
    outfits: {
      title: "의상",
      subtitle: "나에게 딱 맞는 룩을 찾아보세요",
      featuredTag: "추천",
      featuredSubtitle: "어떤 룩에도 어울리는\n스타일리시한 핏",
    },
    characters: {
      title: "캐릭터",
      subtitle: "스타일 아이콘을 만나보세요",
      featuredTag: "신규",
      featuredSubtitle: "다음 스타일 아이콘을\n만나보세요",
    },
    emotes: {
      title: "이모트",
      subtitle: "나만의 분위기를 보여주세요",
      featuredTag: "인기 급상승",
      featuredSubtitle: "스타일리시하게\n분위기를 뽐내보세요",
    },
    skins: {
      title: "액세서리",
      subtitle: "룩을 완성하세요",
      featuredTag: "핫",
      featuredSubtitle: "모자, 체인, 가방\n그리고 더 많은 아이템",
    },
  },

  outfits: {
    title: "모든 의상",
    subtitle: "다음 최애 룩을 찾아보세요",
    empty: "의상을 찾을 수 없습니다",
    emptySaved: "이 필터에 맞는 저장된 의상이 없습니다.",
    emptyAll: "이 필터에 맞는 의상이 아직 없습니다.",
    emptyFilter: (filter: string) => `${filter} 의상이 아직 없습니다.`,
    showAll: "모든 의상 보기",
    save: (name: string) => `${name} 저장`,
    unsave: (name: string) => `즐겨찾기에서 ${name} 삭제`,
  },

  characters: {
    title: "캐릭터",
    subtitle: "다음 아이코닉 룩을 발견하세요",
  },

  emotes: {
    title: "이모트",
    subtitle: "나만의 분위기를 보여주세요",
    all: "모든 이모트",
    count: (n: number) => `이모트 ${n}개`,
    label: (name: string) => `${name} 이모트`,
  },

  accessories: {
    title: "액세서리",
    subtitle: "모자, 신발 그리고 마무리 포인트",
  },

  notFound: {
    outfit: "의상을 찾을 수 없습니다",
    character: "캐릭터를 찾을 수 없습니다",
    emote: "이모트를 찾을 수 없습니다",
    accessory: "액세서리를 찾을 수 없습니다",
    message: "이 아이템은 삭제되었을 수 있습니다.",
  },

  details: {
    shareMessage: (name: string, app: string) =>
      `${app}에서 ${name}을(를) 확인해 보세요 ✨`,
    download: "다운로드",
    downloadLabel: "이 이미지를 사진에 저장",
    saving: "저장 중…",
    saved: "사진에 저장됨",
    photosTitle: "사진 접근 권한 필요",
    photosMessage: (app: string) =>
      `${app}이(가) 사진 보관함에 이미지를 저장하도록 허용해 주세요.`,
    failedTitle: "다운로드 실패",
    failedMessage: "이미지를 저장하지 못했습니다. 다시 시도해 주세요.",
  },

  settings: {
    title: "설정",
    shareApp: "앱 공유",
    language: "언어",
    rateApp: "앱 평가",
    version: "버전",
    privacyPolicy: "개인정보 처리방침",
    shareMessage: (app: string) =>
      `${app}에서 의상, 캐릭터, 스킨을 만나보세요 ✨`,
    comingSoonTitle: "출시 예정",
    comingSoonMessage: (app: string) => `${app}은(는) 아직 App Store에 없습니다.`,
    privacySoon: "개인정보 처리방침은 곧 제공될 예정입니다.",
    linkFailedTitle: "링크를 열 수 없습니다",
    linkFailedMessage: "나중에 다시 시도해 주세요.",
  },

  language: {
    title: "언어",
    subtitle: "원하는 언어를 선택하세요",
    confirm: "언어 확인",
  },

  labels: {
    All: "전체",
    HOT: "핫",
    NEW: "신규",
    POPULAR: "인기",
    RARE: "레어",
    TRENDING: "트렌딩",
    Jacket: "재킷",
    Top: "상의",
    Pants: "바지",
    Shorts: "반바지",
    Cap: "모자",
    Shoes: "신발",
    Streetwear: "스트리트웨어",
    Casual: "캐주얼",
    Anime: "애니메",
    Fantasy: "판타지",
    Cyberpunk: "사이버펑크",
    Cute: "귀여움",
  },
};
