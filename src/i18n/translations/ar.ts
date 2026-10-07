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

  outfitFlow: {
    categoriesTitle: "فئات الأزياء",
    categoriesSubtitle: "اختر فئة لاستكشافها",
    clickHere: "اضغط هنا",
    groups: {
      tops: {
        title: "المجموعة الأساسية",
        subtitle: "مصممة للاعبين القياديين.",
      },
      jackets: {
        title: "عتاد الجيل الجديد",
        subtitle: "تبدأ المغامرة بالعتاد المناسب.",
      },
      pants: {
        title: "بناطيل المهام",
        subtitle: "كل خطوة، إعلان عن هدف.",
      },
      hats: {
        title: "قبعات اللاعبين",
        subtitle: "دافع عن أسلوبك، واكسب يومك.",
      },
      hair: {
        title: "تسريحات ديناميكية",
        subtitle: "مصممة للحركات الجريئة والإطلالات الجريئة.",
      },
      accessories: {
        title: "إكسسوارات النخبة",
        subtitle: "كل قطعة، مستوى جديد من الأناقة.",
      },
    },
    categoryComingSoon: "قريباً",
    categoryComingSoonMessage: "عناصر جديدة في الطريق. تحقق مرة أخرى قريباً!",
    count: (n: number) => {
      if (n === 1) return "زي واحد";
      if (n === 2) return "زيان";
      if (n >= 3 && n <= 10) return `${n} أزياء`;
      return `${n} زياً`;
    },
    collectionSubtitle: (n: number) => {
      if (n === 1) return "زي واحد في هذه المجموعة";
      if (n === 2) return "زيان في هذه المجموعة";
      if (n >= 3 && n <= 10) return `${n} أزياء في هذه المجموعة`;
      return `${n} زياً في هذه المجموعة`;
    },
    letsGoTitle: "جاهز لتجربة هذه الإطلالة؟",
    letsGoMessage: "شاهد الزي عن قرب وافتح معرّف العنصر.",
    letsGo: "هيا بنا",
    getId: "احصل على المعرّف",
    scratchTitle: "اكشط واحصل على المعرّف",
    scratchSubtitle: "اكشط البطاقة لكشف معرّف العنصر",
    scratchHint: "اكشط هنا",
    idLabel: "معرّف العنصر",
    copy: "نسخ المعرّف",
    copied: "تم النسخ!",
    comingSoon: "المعرّف قريباً",
    comingSoonMessage: "نضيف معرّف هذا الزي الآن. عاود الزيارة قريباً!",
    howToUse: "ابحث عن هذا المعرّف في متجر الأفاتار داخل اللعبة للعثور على العنصر.",
  },

  calculator: {
    homeTitle: "الحاسبة",
    homeSubtitle: "Robux ⇄ USD في ثوانٍ",
    title: "حاسبة Robux",
    subtitle: "قدّر قيم Robux وUSD",
    tabRobuxToUsd: "Robux → $",
    tabUsdToRobux: "$ → Robux",
    tabFee: "رسوم البيع",
    robuxAmount: "كمية Robux",
    usdAmount: "المبلغ بـ USD",
    itemPrice: "سعر العنصر بـ Robux",
    purchaseCost: "تكلفة الشراء",
    devexValue: "قيمة السحب (DevEx)",
    robuxYouGet: "Robux التي ستحصل عليها",
    youReceive: (percent: number) => `ستستلم (${percent}%)`,
    marketplaceFee: (percent: number) => `رسوم المتجر (${percent}%)`,
    disclaimer:
      "تقديرات فقط، بناءً على الأسعار القياسية. تختلف الأسعار الفعلية حسب المنصة والمنطقة. هذا التطبيق غير رسمي ولا يمكنه منحك Robux.",
    inputAmount: "أدخل المبلغ",
    liveRate: "السعر الحالي",
    quickSelect: "اختيار سريع",
    resultTag: "نتيجة الحساب",
    resultTitle: "القيمة التقديرية",
    estimated: "قيمة تقديرية",
    infoTitle: "معلومات مهمة",
  },

  calcHub: {
    title: "كل الحاسبات",
    tileTag: "حاسبة",
    tapToOpen: "اضغط للفتح",
    robuxUsd: "Robux ⇄ USD",
    basic: "أساسي",
    pro: "برو",
    elite: "إيليت",
    tierSubtitle: "قارن بين خطط بريميوم",
    months: "الأشهر",
    monthsOf: (tier: string) => `أشهر ${tier}`,
    totalRobux: "إجمالي Robux",
    sameRobuxAs: (tier: string) => `نفس Robux الخاصة بـ ${tier}`,
    monthsValue: (n: string) => `${n} أشهر`,
    costWith: (tier: string) => `التكلفة مع ${tier}`,
    difference: "فرق السعر",
    perMonth: (robux: string, usd: string) => `${robux} Robux / شهر · ${usd}`,
  },
  games: {
    homeTitle: "الألعاب",
    homeSubtitle: "العب فورًا",
    title: "الألعاب",
    subtitle: "العب فورًا دون الحاجة إلى تنزيل",
    featured: "مميز",
    play: "العب",
    playNow: "العب الآن",
    emptyTitle: "الألعاب قريبًا",
    emptyMessage: "ألعاب جديدة في الطريق. عد قريبًا!",
    playLabel: (title: string) => `العب ${title}`,
  },

  sounds: {
    homeTitle: "الأصوات",
    homeSubtitle: "استكشف المؤثرات الصوتية المفضلة",
    title: "الأصوات",
    subtitle: "اضغط على صوت لتشغيله",
    getSound: "احصل على هذا المؤثر الصوتي",
    saving: "جارٍ الحفظ…",
    saved: "تم الحفظ في الموسيقى",
    volume: "مستوى الصوت",
    play: "تشغيل",
    pause: "إيقاف مؤقت",
    previous: "الصوت السابق",
    next: "الصوت التالي",
    permissionTitle: "مطلوب الوصول إلى التخزين",
    permissionMessage: (app: string) =>
      `اسمح لـ ${app} بحفظ الأصوات على جهازك.`,
    failedTitle: "فشل التنزيل",
    failedMessage: "تعذّر حفظ هذا الصوت. يرجى المحاولة مرة أخرى.",
    emptyTitle: "الأصوات قريبًا",
    emptyMessage: "أصوات جديدة في الطريق. عد قريبًا!",
  },

  promo: {
    ad: "إعلان",
    cta: "اعرف المزيد",
  },
  update: {
    title: "تحديث متوفر",
    message: "إصدار جديد من التطبيق جاهز مع إصلاحات وميزات جديدة.",
    /** Shown when this version is below `min_version` (no "Later"). */
    forcedTitle: "التحديث مطلوب",
    forcedMessage: "لم يعد هذا الإصدار مدعومًا. يُرجى التحديث لمواصلة استخدام التطبيق.",
    newVersion: (v) => `الإصدار ${v}`,
    update: "حدّث الآن",
    later: "لاحقًا",
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
    next: "التالي",
    save: "حفظ",
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
    Hair: "الشعر",
    Streetwear: "ستريت وير",
    Casual: "كاجوال",
    Anime: "أنمي",
    Fantasy: "فانتازيا",
    Cyberpunk: "سايبربانك",
    Cute: "لطيف",
  },
};
