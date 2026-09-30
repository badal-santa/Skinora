import type { Strings } from "./en";

export const ru: Strings = {
  common: {
    goBack: "Назад",
    back: "Назад",
    share: "Поделиться",
    settings: "Настройки",
    cancel: "Отмена",
    ok: "OK",
    openSettings: "Открыть настройки",
    explore: "ОТКРЫТЬ",
  },

  splash: {
    tagline: "ТВОЙ МИР. ТВОЙ СТИЛЬ.",
    loading: "ЗАГРУЗКА ТВОЕГО МИРА",
    footer: "ОТКРЫВАЙ • НАСТРАИВАЙ • ИССЛЕДУЙ",
  },

  home: {
    brandTagline: "ОБРАЗЫ И СКИНЫ",
    exploreCategories: "Категории",
  },

  categories: {
    outfits: {
      title: "ОБРАЗЫ",
      subtitle: "Найди свой идеальный образ",
      featuredTag: "ИЗБРАННОЕ",
      featuredSubtitle: "Стильные наряды на\nлюбой вкус.",
    },
    characters: {
      title: "ПЕРСОНАЖИ",
      subtitle: "Знакомься с иконами стиля",
      featuredTag: "НОВИНКА",
      featuredSubtitle: "Встречай новую\nикону стиля.",
    },
    emotes: {
      title: "ЭМОДЗИ-ДЕЙСТВИЯ",
      subtitle: "Покажи своё настроение",
      featuredTag: "В ТРЕНДЕ",
      featuredSubtitle: "Покажи настроение\nсо стилем.",
    },
    skins: {
      title: "АКСЕССУАРЫ",
      subtitle: "Завершите свой образ",
      featuredTag: "ХИТ",
      featuredSubtitle: "Кепки, цепи, сумки\nи не только.",
    },
  },

  outfits: {
    title: "Все образы",
    subtitle: "Найди свой новый любимый образ",
    empty: "Образы не найдены",
    emptySaved: "Нет сохранённых образов для этого фильтра.",
    emptyAll: "Пока нет образов с такими фильтрами.",
    emptyFilter: (filter: string) => `Пока нет образов: ${filter}.`,
    showAll: "Показать все образы",
    save: (name: string) => `Сохранить ${name}`,
    unsave: (name: string) => `Удалить ${name} из избранного`,
  },

  characters: {
    title: "Персонажи",
    subtitle: "Открой свой следующий культовый образ",
  },

  emotes: {
    title: "Эмоции",
    subtitle: "Покажи своё настроение",
    all: "Все эмоции",
    count: (n: number) => {
      const m10 = n % 10;
      const m100 = n % 100;
      if (m10 === 1 && m100 !== 11) return `${n} эмоция`;
      if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14))
        return `${n} эмоции`;
      return `${n} эмоций`;
    },
    label: (name: string) => `Эмоция ${name}`,
  },

  accessories: {
    title: "Аксессуары",
    subtitle: "Кепки, кроссовки и финальные штрихи",
  },

  notFound: {
    outfit: "Образ не найден",
    character: "Персонаж не найден",
    emote: "Эмоция не найдена",
    accessory: "Аксессуар не найден",
    message: "Возможно, этот предмет был удалён.",
  },

  details: {
    shareMessage: (name: string, app: string) =>
      `Смотри, ${name} в ${app} ✨`,
    download: "Скачать",
    downloadLabel: "Сохранить это изображение в Фото",
    saving: "Сохранение…",
    saved: "Сохранено в Фото",
    photosTitle: "Нужен доступ к фото",
    photosMessage: (app: string) =>
      `Разрешите ${app} сохранять изображения в вашу медиатеку.`,
    failedTitle: "Не удалось скачать",
    failedMessage: "Не удалось сохранить изображение. Попробуйте ещё раз.",
  },

  settings: {
    title: "Настройки",
    shareApp: "Поделиться приложением",
    language: "Язык",
    rateApp: "Оценить приложение",
    version: "Версия",
    privacyPolicy: "Политика конфиденциальности",
    shareMessage: (app: string) =>
      `Открой образы, персонажей и скины в ${app} ✨`,
    comingSoonTitle: "Скоро",
    comingSoonMessage: (app: string) =>
      `${app} пока нет в App Store.`,
    privacySoon: "Политика конфиденциальности скоро появится.",
    linkFailedTitle: "Не удалось открыть ссылку",
    linkFailedMessage: "Повторите попытку позже.",
  },

  language: {
    title: "Язык",
    subtitle: "Выберите предпочитаемый язык",
    confirm: "Подтвердить язык",
  },

  labels: {
    All: "Все",
    HOT: "ХИТ",
    NEW: "НОВОЕ",
    POPULAR: "ПОПУЛЯРНОЕ",
    RARE: "РЕДКОЕ",
    TRENDING: "В ТРЕНДЕ",
    Jacket: "Куртка",
    Top: "Топ",
    Pants: "Штаны",
    Shorts: "Шорты",
    Cap: "Кепка",
    Shoes: "Обувь",
    Streetwear: "Стритвир",
    Casual: "Кэжуал",
    Anime: "Аниме",
    Fantasy: "Фэнтези",
    Cyberpunk: "Киберпанк",
    Cute: "Милый",
  },
};
