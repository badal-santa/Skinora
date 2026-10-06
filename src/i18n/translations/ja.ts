import type { Strings } from "./en";

export const ja: Strings = {
  common: {
    goBack: "戻る",
    back: "戻る",
    share: "共有",
    settings: "設定",
    cancel: "キャンセル",
    ok: "OK",
    openSettings: "設定を開く",
    explore: "探す",
  },

  splash: {
    tagline: "あなたの世界。あなたのスタイル。",
    loading: "ワールドを読み込み中",
    footer: "発見 • カスタマイズ • 探索",
  },

  home: {
    brandTagline: "コーデ & スキン",
    exploreCategories: "カテゴリを探す",
  },

  categories: {
    outfits: {
      title: "コーデ",
      subtitle: "ぴったりのルックを見つけよう",
      featuredTag: "注目",
      featuredSubtitle: "どんなルックにも\nおしゃれな装い",
    },
    characters: {
      title: "キャラクター",
      subtitle: "スタイルアイコンに出会おう",
      featuredTag: "新登場",
      featuredSubtitle: "次のスタイル\nアイコンに出会おう",
    },
    emotes: {
      title: "エモート",
      subtitle: "あなたのノリを見せよう",
      featuredTag: "トレンド",
      featuredSubtitle: "おしゃれに\nノリを見せよう",
    },
    skins: {
      title: "アクセサリー",
      subtitle: "ルックを完成させよう",
      featuredTag: "人気",
      featuredSubtitle: "キャップ、チェーン、\nバッグなど",
    },
  },

  outfits: {
    title: "すべてのコーデ",
    subtitle: "次のお気に入りを見つけよう",
    empty: "コーデが見つかりません",
    emptySaved: "このフィルターに一致する保存済みコーデはありません。",
    emptyAll: "このフィルターのコーデはまだありません。",
    emptyFilter: (filter: string) => `${filter}のコーデはまだありません。`,
    showAll: "すべてのコーデを表示",
    save: (name: string) => `${name}を保存`,
    unsave: (name: string) => `${name}をお気に入りから削除`,
  },

  outfitFlow: {
    categoriesTitle: "コーデカテゴリー",
    categoriesSubtitle: "探索するカテゴリを選ぼう",
    clickHere: "ここをタップ",
    groups: {
      tops: {
        title: "コアコレクション",
        subtitle: "先頭に立つプレイヤーのためにデザイン。",
      },
      jackets: {
        title: "次世代ギア",
        subtitle: "冒険は最適なギアから始まる。",
      },
      pants: {
        title: "ミッションパンツ",
        subtitle: "一歩ごとに、目的を示す。",
      },
      hats: {
        title: "プレイヤーハット",
        subtitle: "スタイルを守り、一日を制そう。",
      },
      hair: {
        title: "ダイナミックヘア",
        subtitle: "大胆な動きと恐れ知らずのルックのために。",
      },
      accessories: {
        title: "エリートアクセサリー",
        subtitle: "すべてのアイテムが、新たなスタイルレベルへ。",
      },
    },
    categoryComingSoon: "近日公開",
    categoryComingSoonMessage: "新しいアイテムが近日登場！お楽しみに！",
    count: (n: number) => `${n}件のコーデ`,
    collectionSubtitle: (n: number) => `このコレクションに${n}件のコーデ`,
    letsGoTitle: "このコーデでキメる?",
    letsGoMessage: "コーデを間近でチェックして、アイテムIDをゲットしよう。",
    letsGo: "いくぞ",
    getId: "IDを取得",
    scratchTitle: "削ってIDをゲット",
    scratchSubtitle: "カードを削ってアイテムIDを表示",
    scratchHint: "ここを削る",
    idLabel: "アイテムID",
    copy: "IDをコピー",
    copied: "コピーしました!",
    comingSoon: "ID準備中",
    comingSoonMessage: "このコーデのIDを追加中です。もうしばらくお待ちください!",
    howToUse: "ゲームのアバターショップでこのIDを検索してアイテムを見つけよう。",
  },

  calculator: {
    homeTitle: "電卓",
    homeSubtitle: "Robux ⇄ USD を一瞬で",
    title: "Robux電卓",
    subtitle: "RobuxとUSDの価値を見積もり",
    tabRobuxToUsd: "Robux → $",
    tabUsdToRobux: "$ → Robux",
    tabFee: "販売手数料",
    robuxAmount: "Robux数",
    usdAmount: "USD金額",
    itemPrice: "アイテム価格(Robux)",
    purchaseCost: "購入コスト",
    devexValue: "換金額 (DevEx)",
    robuxYouGet: "もらえるRobux",
    youReceive: (percent: number) => `受取額 (${percent}%)`,
    marketplaceFee: (percent: number) => `マーケットプレイス手数料 (${percent}%)`,
    disclaimer:
      "標準レートに基づく目安です。実際の価格はプラットフォームや地域で異なります。このアプリは非公式で、Robuxを提供することはできません。",
    inputAmount: "金額を入力",
    liveRate: "現在のレート",
    quickSelect: "クイック選択",
    resultTag: "計算結果",
    resultTitle: "あなたの推定額",
    estimated: "推定額",
    infoTitle: "重要なお知らせ",
  },

  calcHub: {
    title: "すべての計算機",
    tileTag: "計算機",
    tapToOpen: "タップして開く",
    robuxUsd: "Robux ⇄ USD",
    basic: "ベーシック",
    pro: "プロ",
    elite: "エリート",
    tierSubtitle: "プレミアムプランを比較",
    months: "月数",
    monthsOf: (tier: string) => `${tier}の月数`,
    totalRobux: "合計Robux",
    sameRobuxAs: (tier: string) => `${tier}と同じRobux`,
    monthsValue: (n: string) => `${n}か月`,
    costWith: (tier: string) => `${tier}の場合の費用`,
    difference: "価格の差",
    perMonth: (robux: string, usd: string) => `${robux} Robux / 月 · ${usd}`,
  },
  games: {
    homeTitle: "ゲーム",
    homeSubtitle: "すぐに遊べる",
    title: "ゲーム",
    subtitle: "ダウンロード不要ですぐ遊べる",
    featured: "注目",
    play: "プレイ",
    playNow: "今すぐプレイ",
    emptyTitle: "ゲームは近日公開",
    emptyMessage: "新しいゲームが登場予定です。お楽しみに!",
    playLabel: (title: string) => `${title}をプレイ`,
  },

  sounds: {
    homeTitle: "サウンド",
    homeSubtitle: "お気に入りの効果音を探そう",
    title: "サウンド",
    subtitle: "タップして再生",
    getSound: "この効果音を入手",
    saving: "保存中…",
    saved: "ミュージックに保存しました",
    volume: "音量",
    play: "再生",
    pause: "一時停止",
    previous: "前のサウンド",
    next: "次のサウンド",
    permissionTitle: "ストレージへのアクセスが必要です",
    permissionMessage: (app: string) =>
      `${app}がサウンドをデバイスに保存することを許可してください。`,
    failedTitle: "ダウンロードに失敗しました",
    failedMessage: "このサウンドを保存できませんでした。もう一度お試しください。",
    emptyTitle: "サウンドは近日公開",
    emptyMessage: "新しいサウンドを準備中です。またのぞいてね!",
  },

  promo: {
    ad: "広告",
    cta: "詳細を見る",
  },
  update: {
    title: "アップデートがあります",
    message: "不具合の修正と新機能を含む新しいバージョンが利用できます。",
    /** Shown when this version is below `min_version` (no "Later"). */
    forcedTitle: "アップデートが必要です",
    forcedMessage: "このバージョンはサポートが終了しました。引き続きご利用いただくにはアップデートしてください。",
    newVersion: (v) => `バージョン ${v}`,
    update: "今すぐアップデート",
    later: "あとで",
  },

  characters: {
    title: "キャラクター",
    subtitle: "次の注目ルックを発見",
  },

  emotes: {
    title: "エモート",
    subtitle: "あなたのノリを見せよう",
    all: "すべてのエモート",
    count: (n: number) => `${n}個のエモート`,
    label: (name: string) => `${name}エモート`,
  },

  accessories: {
    title: "アクセサリー",
    subtitle: "キャップ、シューズ、仕上げの小物",
  },

  notFound: {
    outfit: "コーデが見つかりません",
    character: "キャラクターが見つかりません",
    emote: "エモートが見つかりません",
    accessory: "アクセサリーが見つかりません",
    message: "このアイテムは削除された可能性があります。",
  },

  details: {
    shareMessage: (name: string, app: string) =>
      `${app}で${name}をチェック ✨`,
    download: "ダウンロード",
    downloadLabel: "この画像を写真に保存",
    saving: "保存中…",
    saved: "写真に保存しました",
    photosTitle: "写真へのアクセスが必要です",
    photosMessage: (app: string) =>
      `${app}が写真ライブラリに画像を保存することを許可してください。`,
    failedTitle: "ダウンロードに失敗しました",
    failedMessage: "画像を保存できませんでした。もう一度お試しください。",
  },

  settings: {
    title: "設定",
    shareApp: "アプリを共有",
    language: "言語",
    rateApp: "アプリを評価",
    version: "バージョン",
    privacyPolicy: "プライバシーポリシー",
    shareMessage: (app: string) =>
      `${app}でコーデ、キャラクター、スキンを見つけよう ✨`,
    comingSoonTitle: "近日公開",
    comingSoonMessage: (app: string) => `${app}はまだApp Storeにありません。`,
    privacySoon: "プライバシーポリシーは近日公開予定です。",
    linkFailedTitle: "リンクを開けませんでした",
    linkFailedMessage: "後でもう一度お試しください。",
  },

  language: {
    title: "言語",
    subtitle: "使用する言語を選択",
    confirm: "言語を確定",
  },

  labels: {
    All: "すべて",
    HOT: "人気",
    NEW: "新着",
    POPULAR: "人気上昇",
    RARE: "レア",
    TRENDING: "トレンド",
    Jacket: "ジャケット",
    Top: "トップス",
    Pants: "パンツ",
    Shorts: "ショートパンツ",
    Cap: "キャップ",
    Shoes: "シューズ",
    Hair: "ヘア",
    Streetwear: "ストリート",
    Casual: "カジュアル",
    Anime: "アニメ",
    Fantasy: "ファンタジー",
    Cyberpunk: "サイバーパンク",
    Cute: "キュート",
  },
};
