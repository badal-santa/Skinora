import type { Strings } from "./en";

export const vi: Strings = {
  common: {
    goBack: "Quay lại",
    back: "Quay lại",
    share: "Chia sẻ",
    settings: "Cài đặt",
    cancel: "Hủy",
    ok: "OK",
    openSettings: "Mở Cài đặt",
    explore: "KHÁM PHÁ",
  },

  splash: {
    tagline: "THẾ GIỚI CỦA BẠN. PHONG CÁCH CỦA BẠN.",
    loading: "ĐANG TẢI THẾ GIỚI CỦA BẠN",
    footer: "KHÁM PHÁ • TÙY CHỈNH • TRẢI NGHIỆM",
  },

  home: {
    brandTagline: "TRANG PHỤC & SKIN",
    exploreCategories: "Khám phá danh mục",
  },

  categories: {
    outfits: {
      title: "TRANG PHỤC",
      subtitle: "Tìm diện mạo hoàn hảo của bạn",
      featuredTag: "NỔI BẬT",
      featuredSubtitle: "Phong cách thời trang\ncho mọi diện mạo.",
    },
    characters: {
      title: "NHÂN VẬT",
      subtitle: "Gặp gỡ biểu tượng phong cách",
      featuredTag: "MỚI RA MẮT",
      featuredSubtitle: "Gặp biểu tượng phong\ncách tiếp theo.",
    },
    emotes: {
      title: "BIỂU CẢM",
      subtitle: "Thể hiện cá tính của bạn",
      featuredTag: "THỊNH HÀNH",
      featuredSubtitle: "Thể hiện cá tính\nthật phong cách.",
    },
    skins: {
      title: "PHỤ KIỆN",
      subtitle: "Hoàn thiện diện mạo của bạn",
      featuredTag: "HOT",
      featuredSubtitle: "Mũ, dây chuyền, túi\nvà nhiều hơn nữa.",
    },
  },

  outfits: {
    title: "Tất cả trang phục",
    subtitle: "Tìm diện mạo yêu thích tiếp theo",
    empty: "Không tìm thấy trang phục",
    emptySaved: "Không có trang phục đã lưu nào khớp bộ lọc này.",
    emptyAll: "Chưa có trang phục nào với các bộ lọc này.",
    emptyFilter: (filter: string) => `Chưa có trang phục ${filter}.`,
    showAll: "Hiện tất cả trang phục",
    save: (name: string) => `Lưu ${name}`,
    unsave: (name: string) => `Xóa ${name} khỏi mục yêu thích`,
  },

  characters: {
    title: "Nhân vật",
    subtitle: "Khám phá diện mạo đình đám tiếp theo",
  },

  emotes: {
    title: "Biểu cảm",
    subtitle: "Thể hiện cá tính của bạn",
    all: "Tất cả biểu cảm",
    count: (n: number) => `${n} biểu cảm`,
    label: (name: string) => `Biểu cảm ${name}`,
  },

  accessories: {
    title: "Phụ kiện",
    subtitle: "Mũ, giày & điểm nhấn cuối cùng",
  },

  notFound: {
    outfit: "Không tìm thấy trang phục",
    character: "Không tìm thấy nhân vật",
    emote: "Không tìm thấy biểu cảm",
    accessory: "Không tìm thấy phụ kiện",
    message: "Mục này có thể đã bị xóa.",
  },

  details: {
    shareMessage: (name: string, app: string) =>
      `Xem ${name} trên ${app} ✨`,
    download: "Tải xuống",
    downloadLabel: "Tải ảnh này về thư viện ảnh",
    saving: "Đang lưu…",
    saved: "Đã lưu vào Ảnh",
    photosTitle: "Cần quyền truy cập Ảnh",
    photosMessage: (app: string) =>
      `Cho phép ${app} lưu ảnh vào thư viện ảnh của bạn.`,
    failedTitle: "Tải xuống thất bại",
    failedMessage: "Chúng tôi không thể lưu ảnh này. Vui lòng thử lại.",
  },

  settings: {
    title: "Cài đặt",
    shareApp: "Chia sẻ ứng dụng",
    language: "Ngôn ngữ",
    rateApp: "Đánh giá ứng dụng",
    version: "Phiên bản",
    privacyPolicy: "Chính sách bảo mật",
    shareMessage: (app: string) =>
      `Khám phá trang phục, nhân vật và skin trên ${app} ✨`,
    comingSoonTitle: "Sắp ra mắt",
    comingSoonMessage: (app: string) => `${app} chưa có trên App Store.`,
    privacySoon: "Chính sách bảo mật sẽ sớm có mặt.",
    linkFailedTitle: "Không thể mở liên kết",
    linkFailedMessage: "Vui lòng thử lại sau.",
  },

  language: {
    title: "Ngôn ngữ",
    subtitle: "Chọn ngôn ngữ bạn muốn",
    confirm: "Xác nhận ngôn ngữ",
  },

  labels: {
    All: "Tất cả",
    HOT: "HOT",
    NEW: "MỚI",
    POPULAR: "PHỔ BIẾN",
    RARE: "HIẾM",
    TRENDING: "THỊNH HÀNH",
    Jacket: "Áo khoác",
    Top: "Áo",
    Pants: "Quần dài",
    Shorts: "Quần short",
    Cap: "Mũ lưỡi trai",
    Shoes: "Giày",
    Streetwear: "Streetwear",
    Casual: "Thường ngày",
    Anime: "Anime",
    Fantasy: "Giả tưởng",
    Cyberpunk: "Cyberpunk",
    Cute: "Dễ thương",
  },
};
