export default {
  data() {
    return {
      navMenu: [
        {
          title: "Товары",
          icon: "el-icon-star-off",
          path: "products",
          line: false,
          disabled: false,
        },
        {
          title: "Каталог",
          icon: "el-icon-reading",
          path: "catalogs",
          line: false,
          disabled: false,
        },
        {
          title: "Брэнды",
          icon: "el-icon-price-tag",
          path: "brands",
          line: false,
          disabled: false,
        },
        {
          title: "Цвета фильтров",
          icon: "el-icon-brush",
          path: "colors",
          line: true,
          disabled: false,
        },
        {
          title: "Заказы",
          icon: "el-icon-shopping-cart-2",
          path: "orders",
          line: false,
          disabled: false,
        },
        {
          title: "Клиенты",
          icon: "el-icon-tickets",
          path: "clients",
          line: true,
          disabled: false,
        },
        {
          title: "Баннеры",
          icon: "el-icon-files",
          path: "banners",
          line: false,
          disabled: false,
        },
        {
          title: "Сторис",
          icon: "el-icon-copy-document",
          path: "",
          line: false,
          disabled: true,
        },
        {
          title: "Подборки",
          icon: "el-icon-shopping-bag-1",
          path: "compilations",
          line: true,
          disabled: false,
        },
        {
          title: "Рубрики",
          icon: "el-icon-collection-tag",
          path: "rubrics",
          line: false,
          disabled: false,
        },
        {
          title: "Материалы",
          icon: "el-icon-coin",
          path: "contents",
          line: true,
          disabled: false,
        },
        {
          title: "Скидки",
          icon: "el-icon-coin",
          path: "",
          line: false,
          disabled: true,
        },
        {
          title: "Промокоды",
          icon: "el-icon-present",
          path: "promocodes",
          line: false,
          disabled: false,
        },
        {
          title: "Сертификаты",
          icon: "el-icon-bank-card",
          path: "",
          line: true,
          disabled: true,
        },
        {
          title: "Главный экран",
          icon: "el-icon-house",
          path: "main",
          line: false,
          disabled: false,
        },
        {
          title: "Инфостраницы",
          icon: "el-icon-warning-outline",
          path: "",
          line: true,
          disabled: true,
        },
        {
          title: "Пользователи",
          icon: "el-icon-set-up",
          path: "users",
          line: false,
          disabled: false,
        },
        {
          title: "Настройки",
          icon: "el-icon-setting",
          path: "",
          line: false,
          disabled: true,
        },
      ]
    }
  }
}