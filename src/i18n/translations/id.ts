import type { Strings } from "./en";

export const id: Strings = {
  common: {
    goBack: "Kembali",
    back: "Kembali",
    share: "Bagikan",
    settings: "Pengaturan",
    cancel: "Batal",
    ok: "OK",
    openSettings: "Buka Pengaturan",
    explore: "JELAJAHI",
  },

  splash: {
    tagline: "DUNIAMU. GAYAMU.",
    loading: "MEMUAT DUNIAMU",
    footer: "TEMUKAN • KUSTOMISASI • JELAJAHI",
  },

  home: {
    brandTagline: "OUTFIT & SKIN",
    exploreCategories: "Jelajahi Kategori",
  },

  categories: {
    outfits: {
      title: "OUTFIT",
      subtitle: "Temukan penampilan sempurnamu",
      featuredTag: "UNGGULAN",
      featuredSubtitle: "Gaya keren untuk\nsetiap penampilan.",
    },
    characters: {
      title: "KARAKTER",
      subtitle: "Kenali ikon gayamu",
      featuredTag: "RILIS BARU",
      featuredSubtitle: "Kenali ikon gaya\nberikutnya.",
    },
    emotes: {
      title: "EMOTE",
      subtitle: "Tunjukkan vibe-mu",
      featuredTag: "TREN",
      featuredSubtitle: "Tunjukkan vibe-mu\ndengan gaya.",
    },
    skins: {
      title: "AKSESORIS",
      subtitle: "Lengkapi penampilanmu",
      featuredTag: "HOT",
      featuredSubtitle: "Topi, kalung, tas\ndan lainnya.",
    },
  },

  outfits: {
    title: "Semua Outfit",
    subtitle: "Temukan penampilan favorit berikutnya",
    empty: "Outfit tidak ditemukan",
    emptySaved: "Tidak ada outfit tersimpan yang cocok dengan filter ini.",
    emptyAll: "Belum ada outfit dengan filter ini.",
    emptyFilter: (filter: string) => `Belum ada outfit ${filter}.`,
    showAll: "Tampilkan semua outfit",
    save: (name: string) => `Simpan ${name}`,
    unsave: (name: string) => `Hapus ${name} dari favorit`,
  },

  outfitFlow: {
    categoriesTitle: "Kategori Outfit",
    categoriesSubtitle: "Pilih kategori untuk dijelajahi",
    clickHere: "KLIK DI SINI",
    groups: {
      tops: {
        title: "Koleksi Inti",
        subtitle: "Dirancang untuk pemain yang memimpin.",
      },
      jackets: {
        title: "Perlengkapan Next-Gen",
        subtitle: "Petualangan dimulai dengan perlengkapan yang tepat.",
      },
      pants: {
        title: "Celana Misi",
        subtitle: "Setiap langkah, pernyataan tujuan.",
      },
      hats: {
        title: "Topi Pemain",
        subtitle: "Bela gayamu, taklukkan harimu.",
      },
      hair: {
        title: "Gaya Rambut Dinamis",
        subtitle: "Dibuat untuk gerakan berani dan tampilan tanpa takut.",
      },
      accessories: {
        title: "Aksesori Elit",
        subtitle: "Setiap item, level gaya yang baru.",
      },
    },
    categoryComingSoon: "Segera hadir",
    categoryComingSoonMessage: "Item baru sedang dalam perjalanan. Cek lagi nanti!",
    count: (n: number) => `${n} outfit`,
    collectionSubtitle: (n: number) => `${n} outfit di koleksi ini`,
    letsGoTitle: "Siap tampil dengan gaya ini?",
    letsGoMessage: "Lihat outfit lebih dekat dan buka ID item-nya.",
    letsGo: "Ayo Mulai",
    getId: "Dapatkan ID",
    scratchTitle: "Gosok & Dapatkan ID",
    scratchSubtitle: "Gosok kartu untuk melihat ID item",
    scratchHint: "Gosok di sini",
    idLabel: "ID ITEM",
    copy: "Salin ID",
    copied: "Tersalin!",
    comingSoon: "ID segera hadir",
    comingSoonMessage: "Kami sedang menambahkan ID untuk outfit ini. Cek lagi nanti!",
    howToUse: "Cari ID ini di toko avatar game untuk menemukan item-nya.",
  },

  calculator: {
    homeTitle: "KALKULATOR",
    homeSubtitle: "Robux ⇄ USD dalam hitungan detik",
    title: "Kalkulator Robux",
    subtitle: "Perkirakan nilai Robux dan USD",
    tabRobuxToUsd: "Robux → $",
    tabUsdToRobux: "$ → Robux",
    tabFee: "Biaya Jual",
    robuxAmount: "Jumlah Robux",
    usdAmount: "Jumlah dalam USD",
    itemPrice: "Harga item dalam Robux",
    purchaseCost: "Biaya pembelian",
    devexValue: "Nilai pencairan (DevEx)",
    robuxYouGet: "Robux yang kamu dapat",
    youReceive: (percent: number) => `Kamu terima (${percent}%)`,
    marketplaceFee: (percent: number) => `Biaya marketplace (${percent}%)`,
    disclaimer:
      "Hanya perkiraan, berdasarkan tarif standar. Harga asli berbeda menurut platform dan wilayah. Aplikasi ini tidak resmi dan tidak bisa memberimu Robux.",
    inputAmount: "MASUKKAN JUMLAH",
    liveRate: "KURS SAAT INI",
    quickSelect: "PILIH CEPAT",
    resultTag: "HASIL PERHITUNGAN",
    resultTitle: "Perkiraan nilaimu",
    estimated: "NILAI PERKIRAAN",
    infoTitle: "Informasi penting",
  },

  calcHub: {
    title: "Semua Kalkulator",
    tileTag: "KALKULATOR",
    tapToOpen: "KETUK UNTUK MEMBUKA",
    robuxUsd: "Robux ⇄ USD",
    basic: "Dasar",
    pro: "Pro",
    elite: "Elite",
    tierSubtitle: "Bandingkan paket Premium",
    months: "Bulan",
    monthsOf: (tier: string) => `Bulan ${tier}`,
    totalRobux: "Total Robux",
    sameRobuxAs: (tier: string) => `Robux sama dengan ${tier}`,
    monthsValue: (n: string) => `${n} bulan`,
    costWith: (tier: string) => `Biaya dengan ${tier}`,
    difference: "Selisih harga",
    perMonth: (robux: string, usd: string) => `${robux} Robux / bulan · ${usd}`,
  },
  games: {
    homeTitle: "GAME",
    homeSubtitle: "Main langsung",
    title: "Game",
    subtitle: "Main langsung, tanpa unduh",
    featured: "UNGGULAN",
    play: "Main",
    playNow: "Main Sekarang",
    emptyTitle: "Game segera hadir",
    emptyMessage: "Game baru segera datang. Cek lagi nanti!",
    playLabel: (title: string) => `Main ${title}`,
  },

  sounds: {
    homeTitle: "SUARA",
    homeSubtitle: "Jelajahi efek suara favorit",
    title: "Suara",
    subtitle: "Ketuk suara untuk memutarnya",
    getSound: "Dapatkan Efek Suara Ini",
    saving: "Menyimpan…",
    saved: "Disimpan ke Musik",
    volume: "Volume",
    play: "Putar",
    pause: "Jeda",
    previous: "Suara sebelumnya",
    next: "Suara berikutnya",
    permissionTitle: "Perlu akses penyimpanan",
    permissionMessage: (app: string) =>
      `Izinkan ${app} menyimpan suara ke perangkatmu.`,
    failedTitle: "Unduhan gagal",
    failedMessage: "Kami tidak dapat menyimpan suara ini. Silakan coba lagi.",
    emptyTitle: "Suara segera hadir",
    emptyMessage: "Suara baru segera hadir. Cek lagi nanti!",
  },

  promo: {
    ad: "IKLAN",
    cta: "Pelajari selengkapnya",
  },

  characters: {
    title: "Karakter",
    subtitle: "Temukan penampilan ikonik berikutnya",
  },

  emotes: {
    title: "Emote",
    subtitle: "Tunjukkan vibe-mu",
    all: "Semua Emote",
    count: (n: number) => `${n} emote`,
    label: (name: string) => `Emote ${name}`,
  },

  accessories: {
    title: "Aksesoris",
    subtitle: "Topi, sepatu & sentuhan akhir",
  },

  notFound: {
    outfit: "Outfit tidak ditemukan",
    character: "Karakter tidak ditemukan",
    emote: "Emote tidak ditemukan",
    accessory: "Aksesoris tidak ditemukan",
    message: "Item ini mungkin sudah dihapus.",
  },

  details: {
    shareMessage: (name: string, app: string) =>
      `Lihat ${name} di ${app} ✨`,
    download: "Unduh",
    downloadLabel: "Unduh gambar ini ke foto",
    saving: "Menyimpan…",
    saved: "Tersimpan di Foto",
    photosTitle: "Akses foto diperlukan",
    photosMessage: (app: string) =>
      `Izinkan ${app} menyimpan gambar ke pustaka foto kamu.`,
    failedTitle: "Unduhan gagal",
    failedMessage: "Gambar ini tidak dapat disimpan. Silakan coba lagi.",
  },

  settings: {
    title: "Pengaturan",
    shareApp: "Bagikan Aplikasi",
    language: "Bahasa",
    rateApp: "Beri Nilai Aplikasi",
    version: "Versi",
    privacyPolicy: "Kebijakan Privasi",
    shareMessage: (app: string) =>
      `Temukan outfit, karakter, dan skin di ${app} ✨`,
    comingSoonTitle: "Segera hadir",
    comingSoonMessage: (app: string) => `${app} belum tersedia di App Store.`,
    privacySoon: "Kebijakan privasi akan segera tersedia.",
    linkFailedTitle: "Tidak dapat membuka tautan",
    linkFailedMessage: "Silakan coba lagi nanti.",
  },

  language: {
    title: "Bahasa",
    subtitle: "Pilih bahasa yang kamu inginkan",
    confirm: "Konfirmasi bahasa",
  },

  labels: {
    All: "Semua",
    HOT: "HOT",
    NEW: "BARU",
    POPULAR: "POPULER",
    RARE: "LANGKA",
    TRENDING: "TREN",
    Jacket: "Jaket",
    Top: "Atasan",
    Pants: "Celana",
    Shorts: "Celana Pendek",
    Cap: "Topi",
    Shoes: "Sepatu",
    Hair: "Rambut",
    Streetwear: "Streetwear",
    Casual: "Kasual",
    Anime: "Anime",
    Fantasy: "Fantasi",
    Cyberpunk: "Cyberpunk",
    Cute: "Imut",
  },
};
