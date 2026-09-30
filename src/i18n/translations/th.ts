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
    Streetwear: "สตรีทแวร์",
    Casual: "ลำลอง",
    Anime: "อนิเมะ",
    Fantasy: "แฟนตาซี",
    Cyberpunk: "ไซเบอร์พังก์",
    Cute: "น่ารัก",
  },
};
