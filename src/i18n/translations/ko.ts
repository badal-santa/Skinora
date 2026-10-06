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

  outfitFlow: {
    categoriesTitle: "코디 카테고리",
    categoriesSubtitle: "탐색할 카테고리를 선택하세요",
    clickHere: "여기를 클릭",
    groups: {
      tops: {
        title: "코어 컬렉션",
        subtitle: "앞서가는 플레이어를 위해 디자인했어요.",
      },
      jackets: {
        title: "차세대 기어",
        subtitle: "모험은 알맞은 장비에서 시작돼요.",
      },
      pants: {
        title: "미션 팬츠",
        subtitle: "한 걸음마다 목적을 선언해요.",
      },
      hats: {
        title: "플레이어 햇",
        subtitle: "스타일을 지키고 하루를 정복하세요.",
      },
      hair: {
        title: "다이내믹 헤어스타일",
        subtitle: "대담한 움직임과 거침없는 룩을 위해 만들었어요.",
      },
      accessories: {
        title: "엘리트 액세서리",
        subtitle: "모든 아이템이 새로운 스타일 레벨로.",
      },
    },
    categoryComingSoon: "출시 예정",
    categoryComingSoonMessage: "새 아이템이 곧 도착해요. 조금만 기다려 주세요!",
    count: (n: number) => `코디 ${n}개`,
    collectionSubtitle: (n: number) => `이 컬렉션에 코디 ${n}개`,
    letsGoTitle: "이 룩, 준비됐나요?",
    letsGoMessage: "코디를 가까이 살펴보고 아이템 ID를 열어보세요.",
    letsGo: "가보자",
    getId: "ID 받기",
    scratchTitle: "긁어서 ID 받기",
    scratchSubtitle: "카드를 긁어 아이템 ID를 확인하세요",
    scratchHint: "여기를 긁으세요",
    idLabel: "아이템 ID",
    copy: "ID 복사",
    copied: "복사됨!",
    comingSoon: "ID 준비 중",
    comingSoonMessage: "이 코디의 ID를 추가하는 중이에요. 곧 다시 확인해 주세요!",
    howToUse: "게임 아바타 상점에서 이 ID를 검색해 아이템을 찾으세요.",
  },

  calculator: {
    homeTitle: "계산기",
    homeSubtitle: "Robux ⇄ USD 바로 계산",
    title: "Robux 계산기",
    subtitle: "Robux와 USD 가치를 추정해요",
    tabRobuxToUsd: "Robux → $",
    tabUsdToRobux: "$ → Robux",
    tabFee: "판매 수수료",
    robuxAmount: "Robux 수량",
    usdAmount: "USD 금액",
    itemPrice: "아이템 가격 (Robux)",
    purchaseCost: "구매 비용",
    devexValue: "현금화 금액 (DevEx)",
    robuxYouGet: "받는 Robux",
    youReceive: (percent: number) => `받는 금액 (${percent}%)`,
    marketplaceFee: (percent: number) => `마켓 수수료 (${percent}%)`,
    disclaimer:
      "표준 환율 기준의 추정치일 뿐입니다. 실제 가격은 플랫폼과 지역에 따라 다릅니다. 이 앱은 비공식이며 Robux를 지급할 수 없습니다.",
    inputAmount: "금액 입력",
    liveRate: "현재 환율",
    quickSelect: "빠른 선택",
    resultTag: "계산 결과",
    resultTitle: "예상 금액",
    estimated: "예상 금액",
    infoTitle: "중요 안내",
  },

  calcHub: {
    title: "모든 계산기",
    tileTag: "계산기",
    tapToOpen: "탭하여 열기",
    robuxUsd: "Robux ⇄ USD",
    basic: "베이직",
    pro: "프로",
    elite: "엘리트",
    tierSubtitle: "프리미엄 플랜 비교",
    months: "개월",
    monthsOf: (tier: string) => `${tier} 개월 수`,
    totalRobux: "총 Robux",
    sameRobuxAs: (tier: string) => `${tier}와 같은 Robux`,
    monthsValue: (n: string) => `${n}개월`,
    costWith: (tier: string) => `${tier} 이용 시 비용`,
    difference: "가격 차이",
    perMonth: (robux: string, usd: string) => `${robux} Robux / 월 · ${usd}`,
  },
  games: {
    homeTitle: "게임",
    homeSubtitle: "바로 플레이",
    title: "게임",
    subtitle: "다운로드 없이 바로 플레이",
    featured: "추천",
    play: "플레이",
    playNow: "지금 플레이",
    emptyTitle: "게임 준비 중",
    emptyMessage: "새로운 게임이 곧 찾아와요. 곧 다시 확인해 주세요!",
    playLabel: (title: string) => `${title} 플레이`,
  },

  sounds: {
    homeTitle: "사운드",
    homeSubtitle: "마음에 드는 효과음을 찾아보세요",
    title: "사운드",
    subtitle: "사운드를 탭하여 재생하세요",
    getSound: "이 효과음 받기",
    saving: "저장 중…",
    saved: "음악에 저장됨",
    volume: "볼륨",
    play: "재생",
    pause: "일시정지",
    previous: "이전 사운드",
    next: "다음 사운드",
    permissionTitle: "저장소 접근 권한 필요",
    permissionMessage: (app: string) =>
      `${app}이(가) 기기에 사운드를 저장하도록 허용하세요.`,
    failedTitle: "다운로드 실패",
    failedMessage: "이 사운드를 저장하지 못했어요. 다시 시도해 주세요.",
    emptyTitle: "사운드 곧 출시",
    emptyMessage: "새로운 사운드가 곧 나와요. 조금만 기다려 주세요!",
  },

  promo: {
    ad: "광고",
    cta: "자세히 보기",
  },
  update: {
    title: "업데이트 가능",
    message: "버그 수정과 새로운 기능이 포함된 새 버전이 준비되었습니다.",
    /** Shown when this version is below `min_version` (no "Later"). */
    forcedTitle: "업데이트 필요",
    forcedMessage: "이 버전은 더 이상 지원되지 않습니다. 앱을 계속 사용하려면 업데이트해 주세요.",
    newVersion: (v) => `버전 ${v}`,
    update: "지금 업데이트",
    later: "나중에",
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
    Hair: "헤어",
    Streetwear: "스트리트웨어",
    Casual: "캐주얼",
    Anime: "애니메",
    Fantasy: "판타지",
    Cyberpunk: "사이버펑크",
    Cute: "귀여움",
  },
};
