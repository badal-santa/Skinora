import type { Strings } from "./en";

export const tr: Strings = {
  common: {
    goBack: "Geri Dön",
    back: "Geri dön",
    share: "Paylaş",
    settings: "Ayarlar",
    cancel: "İptal",
    ok: "Tamam",
    openSettings: "Ayarları Aç",
    explore: "KEŞFET",
  },

  splash: {
    tagline: "SENİN DÜNYAN. SENİN TARZIN.",
    loading: "DÜNYAN YÜKLENİYOR",
    footer: "KEŞFET • ÖZELLEŞTİR • GEZ",
  },

  home: {
    brandTagline: "KIYAFET & SKİN",
    exploreCategories: "Kategorileri Keşfet",
  },

  categories: {
    outfits: {
      title: "KIYAFETLER",
      subtitle: "Mükemmel görünümünü bul",
      featuredTag: "ÖNE ÇIKAN",
      featuredSubtitle: "Her görünüm için\nşık kombinler.",
    },
    characters: {
      title: "KARAKTERLER",
      subtitle: "Stil ikonlarınla tanış",
      featuredTag: "YENİ ÇIKAN",
      featuredSubtitle: "Bir sonraki\nstil ikonunla tanış.",
    },
    emotes: {
      title: "EMOTELAR",
      subtitle: "Havanı göster",
      featuredTag: "POPÜLER",
      featuredSubtitle: "Havanı tarzınla\ngöster.",
    },
    skins: {
      title: "AKSESUARLAR",
      subtitle: "Görünümünü tamamla",
      featuredTag: "ÇOK SICAK",
      featuredSubtitle: "Şapka, zincir, çanta\nve daha fazlası.",
    },
  },

  outfits: {
    title: "Tüm Kıyafetler",
    subtitle: "Yeni favori görünümünü bul",
    empty: "Kıyafet bulunamadı",
    emptySaved: "Bu filtreye uyan kayıtlı kıyafet yok.",
    emptyAll: "Bu filtrelerle henüz kıyafet yok.",
    emptyFilter: (filter: string) => `Henüz ${filter} kıyafet yok.`,
    showAll: "Tüm kıyafetleri göster",
    save: (name: string) => `${name} kaydet`,
    unsave: (name: string) => `${name} favorilerden kaldır`,
  },

  characters: {
    title: "Karakterler",
    subtitle: "Bir sonraki ikonik görünümünü keşfet",
  },

  emotes: {
    title: "Emotelar",
    subtitle: "Havanı göster",
    all: "Tüm Emotelar",
    count: (n: number) => `${n} emote`,
    label: (name: string) => `${name} emote`,
  },

  accessories: {
    title: "Aksesuarlar",
    subtitle: "Şapkalar, ayakkabılar ve son dokunuşlar",
  },

  notFound: {
    outfit: "Kıyafet bulunamadı",
    character: "Karakter bulunamadı",
    emote: "Emote bulunamadı",
    accessory: "Aksesuar bulunamadı",
    message: "Bu öğe kaldırılmış olabilir.",
  },

  details: {
    shareMessage: (name: string, app: string) =>
      `${app} üzerinde ${name} öğesine göz at ✨`,
    download: "İndir",
    downloadLabel: "Bu görseli fotoğraflara indir",
    saving: "Kaydediliyor…",
    saved: "Fotoğraflara kaydedildi",
    photosTitle: "Fotoğraf erişimi gerekli",
    photosMessage: (app: string) =>
      `${app} uygulamasının görselleri fotoğraf kitaplığına kaydetmesine izin ver.`,
    failedTitle: "İndirme başarısız",
    failedMessage: "Bu görsel kaydedilemedi. Lütfen tekrar dene.",
  },

  settings: {
    title: "Ayarlar",
    shareApp: "Uygulamayı Paylaş",
    language: "Dil",
    rateApp: "Uygulamayı Puanla",
    version: "Sürüm",
    privacyPolicy: "Gizlilik Politikası",
    shareMessage: (app: string) =>
      `${app} ile kıyafetleri, karakterleri ve skinleri keşfet ✨`,
    comingSoonTitle: "Çok yakında",
    comingSoonMessage: (app: string) => `${app} henüz App Store'da değil.`,
    privacySoon: "Gizlilik politikası yakında yayınlanacak.",
    linkFailedTitle: "Bağlantı açılamadı",
    linkFailedMessage: "Lütfen daha sonra tekrar dene.",
  },

  language: {
    title: "Dil",
    subtitle: "Tercih ettiğin dili seç",
    confirm: "Dili onayla",
  },

  labels: {
    All: "Tümü",
    HOT: "SICAK",
    NEW: "YENİ",
    POPULAR: "POPÜLER",
    RARE: "NADİR",
    TRENDING: "TREND",
    Jacket: "Ceket",
    Top: "Üst",
    Pants: "Pantolon",
    Shorts: "Şort",
    Cap: "Şapka",
    Shoes: "Ayakkabı",
    Streetwear: "Sokak Stili",
    Casual: "Günlük",
    Anime: "Anime",
    Fantasy: "Fantezi",
    Cyberpunk: "Cyberpunk",
    Cute: "Sevimli",
  },
};
