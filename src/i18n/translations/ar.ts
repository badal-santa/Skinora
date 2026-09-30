import type { Strings } from "./en";

export const ar: Strings = {
  common: {
    goBack: "رجوع",
    back: "رجوع",
    share: "مشاركة",
    settings: "الإعدادات",
    cancel: "إلغاء",
    ok: "حسنًا",
    openSettings: "فتح الإعدادات",
    explore: "استكشف",
  },

  splash: {
    tagline: "عالمك. أسلوبك.",
    loading: "جارٍ تحميل عالمك",
    footer: "اكتشف • خصّص • استكشف",
  },

  home: {
    brandTagline: "أزياء وسكنات",
    exploreCategories: "استكشف الفئات",
  },

  categories: {
    outfits: {
      title: "الأزياء",
      subtitle: "اعثر على إطلالتك المثالية",
      featuredTag: "مميز",
      featuredSubtitle: "أزياء أنيقة لكل\nإطلالة.",
    },
    characters: {
      title: "الشخصيات",
      subtitle: "تعرّف على أيقونات أسلوبك",
      featuredTag: "جديد",
      featuredSubtitle: "تعرّف على أيقونة\nأسلوبك التالية.",
    },
    emotes: {
      title: "الإيماءات",
      subtitle: "أظهر مزاجك",
      featuredTag: "رائج",
      featuredSubtitle: "أظهر مزاجك\nبأسلوب.",
    },
    skins: {
      title: "الإكسسوارات",
      subtitle: "أكمل إطلالتك",
      featuredTag: "الأكثر طلبًا",
      featuredSubtitle: "قبعات وسلاسل وحقائب\nوالمزيد.",
    },
  },

  outfits: {
    title: "كل الأزياء",
    subtitle: "اعثر على إطلالتك المفضلة التالية",
    empty: "لم يتم العثور على أزياء",
    emptySaved: "لا توجد أزياء محفوظة تطابق هذا التصفية.",
    emptyAll: "لا توجد أزياء بهذه التصفيات بعد.",
    emptyFilter: (filter: string) => `لا توجد أزياء ${filter} بعد.`,
    showAll: "عرض كل الأزياء",
    save: (name: string) => `حفظ ${name}`,
    unsave: (name: string) => `إزالة ${name} من المفضلة`,
  },

  characters: {
    title: "الشخصيات",
    subtitle: "اكتشف إطلالتك المميزة التالية",
  },

  emotes: {
    title: "الإيماءات",
    subtitle: "أظهر مزاجك",
    all: "كل الإيماءات",
    count: (n: number) => {
      if (n === 1) return "إيماءة واحدة";
      if (n === 2) return "إيماءتان";
      if (n >= 3 && n <= 10) return `${n} إيماءات`;
      return `${n} إيماءة`;
    },
    label: (name: string) => `إيماءة ${name}`,
  },

  accessories: {
    title: "الإكسسوارات",
    subtitle: "قبعات وأحذية ولمسات أخيرة",
  },

  notFound: {
    outfit: "الزي غير موجود",
    character: "الشخصية غير موجودة",
    emote: "الإيماءة غير موجودة",
    accessory: "الإكسسوار غير موجود",
    message: "ربما تمت إزالة هذا العنصر.",
  },

  details: {
    shareMessage: (name: string, app: string) =>
      `شاهد ${name} على ${app} ✨`,
    download: "تنزيل",
    downloadLabel: "تنزيل هذه الصورة إلى الصور",
    saving: "جارٍ الحفظ…",
    saved: "تم الحفظ في الصور",
    photosTitle: "مطلوب الوصول إلى الصور",
    photosMessage: (app: string) =>
      `اسمح لتطبيق ${app} بحفظ الصور في مكتبة الصور لديك.`,
    failedTitle: "فشل التنزيل",
    failedMessage: "تعذّر حفظ هذه الصورة. يرجى المحاولة مرة أخرى.",
  },

  settings: {
    title: "الإعدادات",
    shareApp: "مشاركة التطبيق",
    language: "اللغة",
    rateApp: "قيّم التطبيق",
    version: "الإصدار",
    privacyPolicy: "سياسة الخصوصية",
    shareMessage: (app: string) =>
      `اكتشف الأزياء والشخصيات والسكنات على ${app} ✨`,
    comingSoonTitle: "قريبًا",
    comingSoonMessage: (app: string) =>
      `تطبيق ${app} غير متوفر في App Store بعد.`,
    privacySoon: "ستتوفر سياسة الخصوصية قريبًا.",
    linkFailedTitle: "تعذّر فتح الرابط",
    linkFailedMessage: "يرجى المحاولة لاحقًا.",
  },

  language: {
    title: "اللغة",
    subtitle: "اختر لغتك المفضلة",
    confirm: "تأكيد اللغة",
  },

  labels: {
    All: "الكل",
    HOT: "الأكثر طلبًا",
    NEW: "جديد",
    POPULAR: "شائع",
    RARE: "نادر",
    TRENDING: "رائج",
    Jacket: "جاكيت",
    Top: "قميص",
    Pants: "بنطلون",
    Shorts: "شورت",
    Cap: "قبعة",
    Shoes: "حذاء",
    Streetwear: "ستريت وير",
    Casual: "كاجوال",
    Anime: "أنمي",
    Fantasy: "فانتازيا",
    Cyberpunk: "سايبربانك",
    Cute: "لطيف",
  },
};
