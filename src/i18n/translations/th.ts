import type { Strings } from "./en";

export const th: Strings = {
  common: {
    goBack: "ย้อนกลับ",
    back: "ย้อนกลับ",
    share: "แชร์",
    settings: "การตั้งค่า",
    cancel: "ยกเลิก",
    ok: "ตกลง",
    openSettings: "เปิดการตั้งค่า",
    explore: "สำรวจ",
  },

  splash: {
    tagline: "โลกของคุณ สไตล์ของคุณ",
    loading: "กำลังโหลดโลกของคุณ",
    footer: "ค้นพบ • ปรับแต่ง • สำรวจ",
  },

  home: {
    brandTagline: "ชุดและสกิน",
    exploreCategories: "สำรวจหมวดหมู่",
  },

  categories: {
    outfits: {
      title: "ชุด",
      subtitle: "ค้นหาลุคที่ใช่",
      featuredTag: "แนะนำ",
      featuredSubtitle: "ชุดสุดสไตลิชสำหรับ\nทุกลุค",
    },
    characters: {
      title: "ตัวละคร",
      subtitle: "พบกับไอคอนสไตล์ของคุณ",
      featuredTag: "มาใหม่",
      featuredSubtitle: "พบกับไอคอนสไตล์\nคนต่อไปของคุณ",
    },
    emotes: {
      title: "อิโมท",
      subtitle: "โชว์ความเท่ของคุณ",
      featuredTag: "กำลังมาแรง",
      featuredSubtitle: "โชว์ความเท่\nอย่างมีสไตล์",
    },
    skins: {
      title: "เครื่องประดับ",
      subtitle: "เติมลุคให้สมบูรณ์",
      featuredTag: "ฮอต",
      featuredSubtitle: "หมวก สร้อย กระเป๋า\nและอื่นๆ",
    },
  },

  outfits: {
    title: "ชุดทั้งหมด",
    subtitle: "ค้นหาลุคโปรดชุดต่อไป",
    empty: "ไม่พบชุด",
    emptySaved: "ไม่มีชุดที่บันทึกไว้ตรงกับตัวกรองนี้",
    emptyAll: "ยังไม่มีชุดที่ตรงกับตัวกรองนี้",
    emptyFilter: (filter: string) => `ยังไม่มีชุด ${filter}`,
    showAll: "แสดงชุดทั้งหมด",
    save: (name: string) => `บันทึก ${name}`,
    unsave: (name: string) => `นำ ${name} ออกจากรายการโปรด`,
  },

  outfitFlow: {
    categoriesTitle: "หมวดหมู่ชุด",
    categoriesSubtitle: "เลือกหมวดหมู่เพื่อสำรวจ",
    clickHere: "คลิกที่นี่",
    groups: {
      tops: {
        title: "คอลเลกชันหลัก",
        subtitle: "ออกแบบมาเพื่อผู้เล่นที่เป็นผู้นำ",
      },
      jackets: {
        title: "เกียร์เจเนอเรชันใหม่",
        subtitle: "การผจญภัยเริ่มต้นด้วยเกียร์ที่ใช่",
      },
      pants: {
        title: "กางเกงภารกิจ",
        subtitle: "ทุกก้าว คือการประกาศเป้าหมาย",
      },
      hats: {
        title: "หมวกผู้เล่น",
        subtitle: "ปกป้องสไตล์ของคุณ พิชิตวันของคุณ",
      },
      hair: {
        title: "ทรงผมไดนามิก",
        subtitle: "สร้างมาเพื่อการเคลื่อนไหวสุดเท่และลุคที่ไม่กลัวใคร",
      },
      accessories: {
        title: "แอคเซสซอรีระดับอีลีท",
        subtitle: "ทุกชิ้น คือสไตล์ในเลเวลใหม่",
      },
    },
    categoryComingSoon: "เร็ว ๆ นี้",
    categoryComingSoonMessage: "ไอเทมใหม่กำลังมา แวะมาดูใหม่เร็ว ๆ นี้นะ!",
    count: (n: number) => `${n} ชุด`,
    collectionSubtitle: (n: number) => `${n} ชุดในคอลเลกชันนี้`,
    letsGoTitle: "พร้อมลุคนี้หรือยัง?",
    letsGoMessage: "ดูชุดใกล้ ๆ แล้วปลดล็อกไอดีไอเทม",
    letsGo: "ไปกันเลย",
    getId: "รับไอดี",
    scratchTitle: "ขูดเพื่อรับไอดี",
    scratchSubtitle: "ขูดการ์ดเพื่อดูไอดีไอเทม",
    scratchHint: "ขูดตรงนี้",
    idLabel: "ไอดีไอเทม",
    copy: "คัดลอกไอดี",
    copied: "คัดลอกแล้ว!",
    comingSoon: "ไอดีเร็ว ๆ นี้",
    comingSoonMessage: "เรากำลังเพิ่มไอดีของชุดนี้ กลับมาดูใหม่เร็ว ๆ นี้!",
    howToUse: "ค้นหาไอดีนี้ในร้านอวาตาร์ของเกมเพื่อหาไอเทม",
  },

  calculator: {
    homeTitle: "เครื่องคิดเลข",
    homeSubtitle: "Robux ⇄ USD ในไม่กี่วินาที",
    title: "เครื่องคิดเลข Robux",
    subtitle: "ประมาณมูลค่า Robux และ USD",
    tabRobuxToUsd: "Robux → $",
    tabUsdToRobux: "$ → Robux",
    tabFee: "ค่าธรรมเนียม",
    robuxAmount: "จำนวน Robux",
    usdAmount: "จำนวนเงิน USD",
    itemPrice: "ราคาไอเทมเป็น Robux",
    purchaseCost: "ค่าใช้จ่ายในการซื้อ",
    devexValue: "มูลค่าการถอนเงิน (DevEx)",
    robuxYouGet: "Robux ที่คุณได้รับ",
    youReceive: (percent: number) => `คุณได้รับ (${percent}%)`,
    marketplaceFee: (percent: number) => `ค่าธรรมเนียมตลาด (${percent}%)`,
    disclaimer:
      "เป็นเพียงการประมาณการตามอัตรามาตรฐาน ราคาจริงแตกต่างกันตามแพลตฟอร์มและภูมิภาค แอปนี้ไม่เป็นทางการและไม่สามารถให้ Robux แก่คุณได้",
    inputAmount: "ใส่จำนวน",
    liveRate: "อัตราปัจจุบัน",
    quickSelect: "เลือกด่วน",
    resultTag: "ผลการคำนวณ",
    resultTitle: "มูลค่าโดยประมาณของคุณ",
    estimated: "มูลค่าโดยประมาณ",
    infoTitle: "ข้อมูลสำคัญ",
  },

  calcHub: {
    title: "เครื่องคิดเลขทั้งหมด",
    tileTag: "เครื่องคิดเลข",
    tapToOpen: "แตะเพื่อเปิด",
    robuxUsd: "Robux ⇄ USD",
    basic: "เบสิก",
    pro: "โปร",
    elite: "อีลิท",
    tierSubtitle: "เปรียบเทียบแพ็กเกจพรีเมียม",
    months: "เดือน",
    monthsOf: (tier: string) => `จำนวนเดือนของ ${tier}`,
    totalRobux: "Robux ทั้งหมด",
    sameRobuxAs: (tier: string) => `Robux เท่ากับ ${tier}`,
    monthsValue: (n: string) => `${n} เดือน`,
    costWith: (tier: string) => `ค่าใช้จ่ายกับ ${tier}`,
    difference: "ส่วนต่างราคา",
    perMonth: (robux: string, usd: string) => `${robux} Robux / เดือน · ${usd}`,
  },
  games: {
    homeTitle: "เกม",
    homeSubtitle: "เล่นได้ทันที",
    title: "เกม",
    subtitle: "เล่นได้ทันที ไม่ต้องดาวน์โหลด",
    featured: "แนะนำ",
    play: "เล่น",
    playNow: "เล่นเลย",
    emptyTitle: "เกมกำลังจะมา",
    emptyMessage: "เกมใหม่กำลังมา กลับมาดูใหม่เร็วๆ นี้!",
    playLabel: (title: string) => `เล่น ${title}`,
  },

  sounds: {
    homeTitle: "เสียง",
    homeSubtitle: "สำรวจเสียงเอฟเฟกต์ที่คุณชอบ",
    title: "เสียง",
    subtitle: "แตะเสียงเพื่อเล่น",
    getSound: "รับเสียงเอฟเฟกต์นี้",
    saving: "กำลังบันทึก…",
    saved: "บันทึกลงเพลงแล้ว",
    volume: "ระดับเสียง",
    play: "เล่น",
    pause: "หยุดชั่วคราว",
    previous: "เสียงก่อนหน้า",
    next: "เสียงถัดไป",
    permissionTitle: "ต้องการสิทธิ์เข้าถึงพื้นที่เก็บข้อมูล",
    permissionMessage: (app: string) =>
      `อนุญาตให้ ${app} บันทึกเสียงลงในอุปกรณ์ของคุณ`,
    failedTitle: "ดาวน์โหลดไม่สำเร็จ",
    failedMessage: "ไม่สามารถบันทึกเสียงนี้ได้ โปรดลองอีกครั้ง",
    emptyTitle: "เสียงเร็วๆ นี้",
    emptyMessage: "เสียงใหม่กำลังมา โปรดกลับมาดูเร็วๆ นี้!",
  },

  promo: {
    ad: "โฆษณา",
    cta: "ดูเพิ่มเติม",
  },
  update: {
    title: "มีอัปเดตใหม่",
    message: "แอปเวอร์ชันใหม่พร้อมแล้ว พร้อมการแก้ไขและฟีเจอร์ใหม่",
    /** Shown when this version is below `min_version` (no "Later"). */
    forcedTitle: "ต้องอัปเดต",
    forcedMessage: "เวอร์ชันนี้ไม่รองรับแล้ว โปรดอัปเดตเพื่อใช้งานแอปต่อ",
    newVersion: (v) => `เวอร์ชัน ${v}`,
    update: "อัปเดตเลย",
    later: "ภายหลัง",
  },

  characters: {
    title: "ตัวละคร",
    subtitle: "ค้นพบลุคสุดไอคอนิกต่อไป",
  },

  emotes: {
    title: "อิโมท",
    subtitle: "โชว์ความเท่ของคุณ",
    all: "อิโมททั้งหมด",
    count: (n: number) => `${n} อิโมท`,
    label: (name: string) => `อิโมท ${name}`,
  },

  accessories: {
    title: "เครื่องประดับ",
    subtitle: "หมวก รองเท้า และไอเทมเสริมลุค",
  },

  notFound: {
    outfit: "ไม่พบชุด",
    character: "ไม่พบตัวละคร",
    emote: "ไม่พบอิโมท",
    accessory: "ไม่พบเครื่องประดับ",
    message: "ไอเทมนี้อาจถูกลบไปแล้ว",
  },

  details: {
    shareMessage: (name: string, app: string) =>
      `ลองดู ${name} บน ${app} ✨`,
    download: "ดาวน์โหลด",
    downloadLabel: "ดาวน์โหลดรูปนี้ลงในรูปภาพ",
    saving: "กำลังบันทึก…",
    saved: "บันทึกลงในรูปภาพแล้ว",
    photosTitle: "ต้องการสิทธิ์เข้าถึงรูปภาพ",
    photosMessage: (app: string) =>
      `อนุญาตให้ ${app} บันทึกรูปลงในคลังรูปภาพของคุณ`,
    failedTitle: "ดาวน์โหลดไม่สำเร็จ",
    failedMessage: "ไม่สามารถบันทึกรูปนี้ได้ โปรดลองอีกครั้ง",
  },

  settings: {
    title: "การตั้งค่า",
    shareApp: "แชร์แอป",
    language: "ภาษา",
    rateApp: "ให้คะแนนแอป",
    version: "เวอร์ชัน",
    privacyPolicy: "นโยบายความเป็นส่วนตัว",
    shareMessage: (app: string) =>
      `ค้นพบชุด ตัวละคร และสกินบน ${app} ✨`,
    comingSoonTitle: "เร็วๆ นี้",
    comingSoonMessage: (app: string) => `${app} ยังไม่มีบน App Store`,
    privacySoon: "นโยบายความเป็นส่วนตัวจะพร้อมให้ดูเร็วๆ นี้",
    linkFailedTitle: "เปิดลิงก์ไม่ได้",
    linkFailedMessage: "โปรดลองอีกครั้งภายหลัง",
  },

  language: {
    title: "ภาษา",
    subtitle: "เลือกภาษาที่คุณต้องการ",
    confirm: "ยืนยันภาษา",
  },

  labels: {
    All: "ทั้งหมด",
    HOT: "ฮอต",
    NEW: "ใหม่",
    POPULAR: "ยอดนิยม",
    RARE: "หายาก",
    TRENDING: "มาแรง",
    Jacket: "แจ็คเก็ต",
    Top: "เสื้อ",
    Pants: "กางเกงขายาว",
    Shorts: "กางเกงขาสั้น",
    Cap: "หมวก",
    Shoes: "รองเท้า",
    Hair: "ผม",
    Streetwear: "สตรีทแวร์",
    Casual: "ลำลอง",
    Anime: "อนิเมะ",
    Fantasy: "แฟนตาซี",
    Cyberpunk: "ไซเบอร์พังก์",
    Cute: "น่ารัก",
  },
};
