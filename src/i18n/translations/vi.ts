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

  outfitFlow: {
    categoriesTitle: "Danh mục trang phục",
    categoriesSubtitle: "Chọn một danh mục để khám phá",
    clickHere: "BẤM VÀO ĐÂY",
    groups: {
      tops: {
        title: "Bộ Sưu Tập Cốt Lõi",
        subtitle: "Dành cho những người chơi dẫn đầu.",
      },
      jackets: {
        title: "Trang Bị Thế Hệ Mới",
        subtitle: "Cuộc phiêu lưu bắt đầu từ trang bị phù hợp.",
      },
      pants: {
        title: "Quần Nhiệm Vụ",
        subtitle: "Mỗi bước đi, một tuyên ngôn mục tiêu.",
      },
      hats: {
        title: "Mũ Người Chơi",
        subtitle: "Bảo vệ phong cách, chinh phục ngày mới.",
      },
      hair: {
        title: "Kiểu tóc năng động",
        subtitle: "Dành cho những pha chuyển động táo bạo và phong cách không sợ hãi.",
      },
      accessories: {
        title: "Phụ kiện tinh hoa",
        subtitle: "Mỗi món đồ, một cấp độ phong cách mới.",
      },
    },
    categoryComingSoon: "Sắp ra mắt",
    categoryComingSoonMessage: "Vật phẩm mới đang trên đường tới. Hãy quay lại sớm nhé!",
    count: (n: number) => `${n} trang phục`,
    collectionSubtitle: (n: number) => `${n} trang phục trong bộ sưu tập này`,
    letsGoTitle: "Sẵn sàng diện phong cách này?",
    letsGoMessage: "Xem kỹ trang phục và mở khóa ID vật phẩm.",
    letsGo: "Bắt đầu",
    getId: "Lấy ID",
    scratchTitle: "Cào & Lấy ID",
    scratchSubtitle: "Cào thẻ để hiện ID vật phẩm",
    scratchHint: "Cào ở đây",
    idLabel: "ID VẬT PHẨM",
    copy: "Sao chép ID",
    copied: "Đã sao chép!",
    comingSoon: "ID sắp có",
    comingSoonMessage: "Chúng tôi đang thêm ID cho trang phục này. Hãy quay lại sau nhé!",
    howToUse: "Tìm ID này trong cửa hàng avatar của game để tìm vật phẩm.",
  },

  calculator: {
    homeTitle: "MÁY TÍNH",
    homeSubtitle: "Robux ⇄ USD trong vài giây",
    title: "Máy tính Robux",
    subtitle: "Ước tính giá trị Robux và USD",
    tabRobuxToUsd: "Robux → $",
    tabUsdToRobux: "$ → Robux",
    tabFee: "Phí bán",
    robuxAmount: "Số Robux",
    usdAmount: "Số tiền USD",
    itemPrice: "Giá vật phẩm bằng Robux",
    purchaseCost: "Chi phí mua",
    devexValue: "Giá trị rút tiền (DevEx)",
    robuxYouGet: "Robux bạn nhận",
    youReceive: (percent: number) => `Bạn nhận (${percent}%)`,
    marketplaceFee: (percent: number) => `Phí chợ (${percent}%)`,
    disclaimer:
      "Chỉ là ước tính, dựa trên tỷ giá tiêu chuẩn. Giá thực tế thay đổi theo nền tảng và khu vực. Ứng dụng này không chính thức và không thể tặng bạn Robux.",
    inputAmount: "NHẬP SỐ LƯỢNG",
    liveRate: "TỶ GIÁ HIỆN TẠI",
    quickSelect: "CHỌN NHANH",
    resultTag: "KẾT QUẢ",
    resultTitle: "Giá trị ước tính của bạn",
    estimated: "GIÁ TRỊ ƯỚC TÍNH",
    infoTitle: "Thông tin quan trọng",
  },

  calcHub: {
    title: "Tất cả máy tính",
    tileTag: "MÁY TÍNH",
    tapToOpen: "CHẠM ĐỂ MỞ",
    robuxUsd: "Robux ⇄ USD",
    basic: "Cơ bản",
    pro: "Pro",
    elite: "Elite",
    tierSubtitle: "So sánh các gói Premium",
    months: "Số tháng",
    monthsOf: (tier: string) => `Số tháng ${tier}`,
    totalRobux: "Tổng Robux",
    sameRobuxAs: (tier: string) => `Cùng số Robux với ${tier}`,
    monthsValue: (n: string) => `${n} tháng`,
    costWith: (tier: string) => `Chi phí với ${tier}`,
    difference: "Chênh lệch giá",
    perMonth: (robux: string, usd: string) => `${robux} Robux / tháng · ${usd}`,
  },
  games: {
    homeTitle: "TRÒ CHƠI",
    homeSubtitle: "Chơi ngay",
    title: "Trò chơi",
    subtitle: "Chơi ngay, không cần tải về",
    featured: "NỔI BẬT",
    play: "Chơi",
    playNow: "Chơi ngay",
    emptyTitle: "Trò chơi sắp ra mắt",
    emptyMessage: "Trò chơi mới đang đến. Hãy quay lại sớm nhé!",
    playLabel: (title: string) => `Chơi ${title}`,
  },

  sounds: {
    homeTitle: "ÂM THANH",
    homeSubtitle: "Khám phá các hiệu ứng âm thanh yêu thích",
    title: "Âm thanh",
    subtitle: "Chạm vào âm thanh để phát",
    getSound: "Lấy hiệu ứng âm thanh này",
    saving: "Đang lưu…",
    saved: "Đã lưu vào Nhạc",
    volume: "Âm lượng",
    play: "Phát",
    pause: "Tạm dừng",
    previous: "Âm thanh trước",
    next: "Âm thanh tiếp theo",
    permissionTitle: "Cần quyền truy cập bộ nhớ",
    permissionMessage: (app: string) =>
      `Cho phép ${app} lưu âm thanh vào thiết bị của bạn.`,
    failedTitle: "Tải xuống thất bại",
    failedMessage: "Không thể lưu âm thanh này. Vui lòng thử lại.",
    emptyTitle: "Âm thanh sắp ra mắt",
    emptyMessage: "Âm thanh mới sắp có. Hãy quay lại sớm!",
  },

  promo: {
    ad: "QUẢNG CÁO",
    cta: "Tìm hiểu thêm",
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
    Hair: "Tóc",
    Streetwear: "Streetwear",
    Casual: "Thường ngày",
    Anime: "Anime",
    Fantasy: "Giả tưởng",
    Cyberpunk: "Cyberpunk",
    Cute: "Dễ thương",
  },
};
