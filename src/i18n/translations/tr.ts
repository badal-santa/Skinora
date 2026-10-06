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

  outfitFlow: {
    categoriesTitle: "Kıyafet Kategorileri",
    categoriesSubtitle: "Keşfetmek için bir kategori seç",
    clickHere: "BURAYA TIKLA",
    groups: {
      tops: {
        title: "Temel Koleksiyon",
        subtitle: "Öncülük eden oyuncular için tasarlandı.",
      },
      jackets: {
        title: "Yeni Nesil Ekipman",
        subtitle: "Macera doğru ekipmanla başlar.",
      },
      pants: {
        title: "Görev Pantolonları",
        subtitle: "Her adım, bir amacın ifadesi.",
      },
      hats: {
        title: "Oyuncu Şapkaları",
        subtitle: "Tarzını savun, gününü fethet.",
      },
      hair: {
        title: "Dinamik Saç Stilleri",
        subtitle: "Cesur hamleler ve korkusuz görünümler için yapıldı.",
      },
      accessories: {
        title: "Elit Aksesuarlar",
        subtitle: "Her ürün, stilde yeni bir seviye.",
      },
    },
    categoryComingSoon: "Çok yakında",
    categoryComingSoonMessage: "Yeni ürünler yolda. Yakında tekrar kontrol et!",
    count: (n: number) => `${n} kıyafet`,
    collectionSubtitle: (n: number) => `Bu koleksiyonda ${n} kıyafet var`,
    letsGoTitle: "Bu görünüme hazır mısın?",
    letsGoMessage: "Kıyafeti yakından incele ve ürün ID'sinin kilidini aç.",
    letsGo: "Hadi Başlayalım",
    getId: "ID Al",
    scratchTitle: "Kazı ve ID Al",
    scratchSubtitle: "Ürün ID'sini görmek için kartı kazı",
    scratchHint: "Buraya kazı",
    idLabel: "ÜRÜN ID",
    copy: "ID'yi Kopyala",
    copied: "Kopyalandı!",
    comingSoon: "ID yakında",
    comingSoonMessage: "Bu kıyafetin ID'sini ekliyoruz. Yakında tekrar bak!",
    howToUse: "Ürünü bulmak için bu ID'yi oyunun avatar mağazasında ara.",
  },

  calculator: {
    homeTitle: "HESAP MAKİNESİ",
    homeSubtitle: "Saniyeler içinde Robux ⇄ USD",
    title: "Robux Hesap Makinesi",
    subtitle: "Robux ve USD değerlerini tahmin et",
    tabRobuxToUsd: "Robux → $",
    tabUsdToRobux: "$ → Robux",
    tabFee: "Satış Ücreti",
    robuxAmount: "Robux miktarı",
    usdAmount: "USD cinsinden tutar",
    itemPrice: "Robux cinsinden eşya fiyatı",
    purchaseCost: "Satın alma maliyeti",
    devexValue: "Nakde çevirme değeri (DevEx)",
    robuxYouGet: "Alacağın Robux",
    youReceive: (percent: number) => `Eline geçen (%${percent})`,
    marketplaceFee: (percent: number) => `Pazar yeri ücreti (%${percent})`,
    disclaimer:
      "Yalnızca tahmindir, standart oranlara dayanır. Gerçek fiyatlar platforma ve bölgeye göre değişir. Bu uygulama resmi değildir ve sana Robux veremez.",
    inputAmount: "TUTAR",
    liveRate: "GÜNCEL KUR",
    quickSelect: "HIZLI SEÇİM",
    resultTag: "HESAP SONUCU",
    resultTitle: "Tahmini değerin",
    estimated: "TAHMİNİ DEĞER",
    infoTitle: "Önemli bilgi",
  },

  calcHub: {
    title: "Tüm Hesaplayıcılar",
    tileTag: "HESAP MAKİNESİ",
    tapToOpen: "AÇMAK İÇİN DOKUN",
    robuxUsd: "Robux ⇄ USD",
    basic: "Temel",
    pro: "Pro",
    elite: "Elite",
    tierSubtitle: "Premium planlarını karşılaştır",
    months: "Ay",
    monthsOf: (tier: string) => `${tier} ay sayısı`,
    totalRobux: "Toplam Robux",
    sameRobuxAs: (tier: string) => `${tier} ile aynı Robux`,
    monthsValue: (n: string) => `${n} ay`,
    costWith: (tier: string) => `${tier} ile maliyet`,
    difference: "Fiyat farkı",
    perMonth: (robux: string, usd: string) => `${robux} Robux / ay · ${usd}`,
  },
  games: {
    homeTitle: "OYUNLAR",
    homeSubtitle: "Hemen oyna",
    title: "Oyunlar",
    subtitle: "Hemen oyna, indirme gerekmez",
    featured: "ÖNE ÇIKAN",
    play: "Oyna",
    playNow: "Şimdi Oyna",
    emptyTitle: "Oyunlar çok yakında",
    emptyMessage: "Yeni oyunlar yolda. Yakında tekrar bak!",
    playLabel: (title: string) => `${title} oyna`,
  },

  sounds: {
    homeTitle: "SESLER",
    homeSubtitle: "Favori ses efektlerini keşfet",
    title: "Sesler",
    subtitle: "Çalmak için bir sese dokun",
    getSound: "Bu Ses Efektini Al",
    saving: "Kaydediliyor…",
    saved: "Müzik'e kaydedildi",
    volume: "Ses düzeyi",
    play: "Oynat",
    pause: "Duraklat",
    previous: "Önceki ses",
    next: "Sonraki ses",
    permissionTitle: "Depolama erişimi gerekli",
    permissionMessage: (app: string) =>
      `${app} uygulamasının sesleri cihazına kaydetmesine izin ver.`,
    failedTitle: "İndirme başarısız",
    failedMessage: "Bu ses kaydedilemedi. Lütfen tekrar dene.",
    emptyTitle: "Sesler yakında",
    emptyMessage: "Yeni sesler yolda. Yakında tekrar bak!",
  },

  promo: {
    ad: "REKLAM",
    cta: "Daha fazla bilgi",
  },
  update: {
    title: "Güncelleme mevcut",
    message: "Uygulamanın düzeltmeler ve yeni özellikler içeren yeni sürümü hazır.",
    /** Shown when this version is below `min_version` (no "Later"). */
    forcedTitle: "Güncelleme gerekli",
    forcedMessage: "Bu sürüm artık desteklenmiyor. Uygulamayı kullanmaya devam etmek için lütfen güncelleyin.",
    newVersion: (v) => `Sürüm ${v}`,
    update: "Şimdi güncelle",
    later: "Sonra",
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
    Hair: "Saç",
    Streetwear: "Sokak Stili",
    Casual: "Günlük",
    Anime: "Anime",
    Fantasy: "Fantezi",
    Cyberpunk: "Cyberpunk",
    Cute: "Sevimli",
  },
};
