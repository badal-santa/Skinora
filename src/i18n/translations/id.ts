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
    Streetwear: "Streetwear",
    Casual: "Kasual",
    Anime: "Anime",
    Fantasy: "Fantasi",
    Cyberpunk: "Cyberpunk",
    Cute: "Imut",
  },
};
