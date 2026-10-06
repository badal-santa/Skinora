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

  outfitFlow: {
    categoriesTitle: "Категории образов",
    categoriesSubtitle: "Выбери категорию для изучения",
    clickHere: "НАЖМИ СЮДА",
    groups: {
      tops: {
        title: "Базовая коллекция",
        subtitle: "Создана для игроков, которые ведут за собой.",
      },
      jackets: {
        title: "Экипировка нового поколения",
        subtitle: "Приключения начинаются с правильной экипировки.",
      },
      pants: {
        title: "Штаны для миссий",
        subtitle: "Каждый шаг — заявление о целях.",
      },
      hats: {
        title: "Кепки игрока",
        subtitle: "Защити свой стиль, покори свой день.",
      },
      hair: {
        title: "Динамичные прически",
        subtitle: "Созданы для смелых движений и дерзких образов.",
      },
      accessories: {
        title: "Элитные аксессуары",
        subtitle: "Каждый предмет — новый уровень стиля.",
      },
    },
    categoryComingSoon: "Скоро",
    categoryComingSoonMessage: "Новые предметы уже в пути. Загляните позже!",
    count: (n: number) => {
      const m10 = n % 10;
      const m100 = n % 100;
      if (m10 === 1 && m100 !== 11) return `${n} образ`;
      if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14))
        return `${n} образа`;
      return `${n} образов`;
    },
    collectionSubtitle: (n: number) => {
      const m10 = n % 10;
      const m100 = n % 100;
      if (m10 === 1 && m100 !== 11) return `${n} образ в этой коллекции`;
      if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14))
        return `${n} образа в этой коллекции`;
      return `${n} образов в этой коллекции`;
    },
    letsGoTitle: "Готов примерить этот образ?",
    letsGoMessage: "Рассмотри образ поближе и открой ID предмета.",
    letsGo: "Поехали",
    getId: "Получить ID",
    scratchTitle: "Сотри и получи ID",
    scratchSubtitle: "Сотри слой на карточке, чтобы увидеть ID предмета",
    scratchHint: "Три здесь",
    idLabel: "ID ПРЕДМЕТА",
    copy: "Копировать ID",
    copied: "Скопировано!",
    comingSoon: "ID скоро появится",
    comingSoonMessage: "Мы добавляем ID для этого образа. Загляни позже!",
    howToUse: "Найди этот ID в магазине аватаров игры, чтобы найти предмет.",
  },

  calculator: {
    homeTitle: "КАЛЬКУЛЯТОР",
    homeSubtitle: "Robux ⇄ USD за секунды",
    title: "Калькулятор Robux",
    subtitle: "Оцените стоимость в Robux и USD",
    tabRobuxToUsd: "Robux → $",
    tabUsdToRobux: "$ → Robux",
    tabFee: "Комиссия",
    robuxAmount: "Количество Robux",
    usdAmount: "Сумма в USD",
    itemPrice: "Цена предмета в Robux",
    purchaseCost: "Стоимость покупки",
    devexValue: "Сумма вывода (DevEx)",
    robuxYouGet: "Вы получите Robux",
    youReceive: (percent: number) => `Вы получите (${percent}%)`,
    marketplaceFee: (percent: number) => `Комиссия магазина (${percent}%)`,
    disclaimer:
      "Только оценочные значения по стандартным курсам. Реальные цены зависят от платформы и региона. Это приложение неофициальное и не может выдать вам Robux.",
    inputAmount: "СУММА",
    liveRate: "ТЕКУЩИЙ КУРС",
    quickSelect: "БЫСТРЫЙ ВЫБОР",
    resultTag: "РЕЗУЛЬТАТ",
    resultTitle: "Ваша примерная сумма",
    estimated: "ПРИМЕРНАЯ СУММА",
    infoTitle: "Важная информация",
  },

  calcHub: {
    title: "Все калькуляторы",
    tileTag: "КАЛЬКУЛЯТОР",
    tapToOpen: "НАЖМИТЕ, ЧТОБЫ ОТКРЫТЬ",
    robuxUsd: "Robux ⇄ USD",
    basic: "Базовый",
    pro: "Pro",
    elite: "Elite",
    tierSubtitle: "Сравните планы Premium",
    months: "Месяцы",
    monthsOf: (tier: string) => `Месяцев ${tier}`,
    totalRobux: "Всего Robux",
    sameRobuxAs: (tier: string) => `Столько же Robux, как у ${tier}`,
    monthsValue: (n: string) => `Месяцев: ${n}`,
    costWith: (tier: string) => `Стоимость с ${tier}`,
    difference: "Разница в цене",
    perMonth: (robux: string, usd: string) => `${robux} Robux / мес. · ${usd}`,
  },
  games: {
    homeTitle: "ИГРЫ",
    homeSubtitle: "Играйте сразу",
    title: "Игры",
    subtitle: "Играйте сразу, без загрузки",
    featured: "ПОПУЛЯРНОЕ",
    play: "Играть",
    playNow: "Играть сейчас",
    emptyTitle: "Игры скоро появятся",
    emptyMessage: "Новые игры уже в пути. Загляните позже!",
    playLabel: (title: string) => `Играть в ${title}`,
  },

  sounds: {
    homeTitle: "ЗВУКИ",
    homeSubtitle: "Любимые звуковые эффекты",
    title: "Звуки",
    subtitle: "Нажмите на звук, чтобы воспроизвести",
    getSound: "Получить этот звуковой эффект",
    saving: "Сохранение…",
    saved: "Сохранено в Музыку",
    volume: "Громкость",
    play: "Играть",
    pause: "Пауза",
    previous: "Предыдущий звук",
    next: "Следующий звук",
    permissionTitle: "Нужен доступ к хранилищу",
    permissionMessage: (app: string) =>
      `Разрешите ${app} сохранять звуки на устройство.`,
    failedTitle: "Не удалось скачать",
    failedMessage: "Не удалось сохранить этот звук. Попробуйте ещё раз.",
    emptyTitle: "Звуки скоро появятся",
    emptyMessage: "Новые звуки уже в пути. Загляните позже!",
  },

  promo: {
    ad: "РЕКЛАМА",
    cta: "Подробнее",
  },
  update: {
    title: "Доступно обновление",
    message: "Вышла новая версия приложения с исправлениями и новыми функциями.",
    /** Shown when this version is below `min_version` (no "Later"). */
    forcedTitle: "Требуется обновление",
    forcedMessage: "Эта версия больше не поддерживается. Обновите приложение, чтобы продолжить.",
    newVersion: (v) => `Версия ${v}`,
    update: "Обновить",
    later: "Позже",
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
    Hair: "Волосы",
    Streetwear: "Стритвир",
    Casual: "Кэжуал",
    Anime: "Аниме",
    Fantasy: "Фэнтези",
    Cyberpunk: "Киберпанк",
    Cute: "Милый",
  },
};
