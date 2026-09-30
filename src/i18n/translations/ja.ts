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
    Streetwear: "ストリート",
    Casual: "カジュアル",
    Anime: "アニメ",
    Fantasy: "ファンタジー",
    Cyberpunk: "サイバーパンク",
    Cute: "キュート",
  },
};
