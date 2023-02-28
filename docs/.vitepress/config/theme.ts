export const themeConfig = {
  // logo: "https://www.jackiewongz.com/resources/blog_name_black.png",

  // sidebar
  sidebar: {
    // en-US
    "/": [
      {
        text: "Introduction",
        items: [
          { text: "Overview", link: "/introduction/overview", active: true },
          { text: "Roadmap", link: "/introduction/roadmap" },
        ],
        icon: "mdi-card-text-outline",
      },
      {
        text: "Getting Started",
        items: [
          {
            text: "Installation",
            link: "/getting-started/installation",
            active: true,
          },
        ],
        icon: "mdi-timer-outline",
      },
      {
        text: "Features",
        items: [
          {
            text: "Internationalization",
            link: "/features/internationalization",
          },
          { text: "Theme", link: "/features/theme" },
        ],
        icon: "mdi-feather",
      },
      {
        text: "Styles",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "Elevation", link: "/styles/elevation" },
          { text: "Color", link: "/styles/color" },
          { text: "Text", link: "/styles/text" },
          { text: "Spacing", link: "/styles/spacing" },
          { text: "Flex", link: "/styles/flex" },
          { text: "Border", link: "/styles/border" },
          { text: "Transitions", link: "/styles/transitions" },
        ],
        icon: "mdi-palette-swatch-outline",
      },
      {
        text: "Components",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "Alert", link: "/components/alert" },
          {
            text: "Application",
            link: "/components/application",
          },
          { text: "Avatar", link: "/components/avatar" },
          { text: "Badge", link: "/components/badge" },
          { text: "Button", link: "/components/button" },
          { text: "Card", link: "/components/card" },
          { text: "Carousel", link: "/components/carousel" },
          { text: "Dialog", link: "/components/dialog" },
          { text: "Divider", link: "/components/divider" },
          {
            text: "From & control",
            items: [
              {
                text: "Autocomplete",
                link: "/components/autocomplete",
              },
              {
                text: "Checkbox",
                link: "/components/checkbox",
              },
              {
                text: "Form",
                link: "/components/form",
              },
              {
                text: "Radio",
                link: "/components/radio",
              },
              {
                text: "Rate",
                link: "/components/rate",
              },
              {
                text: "Select",
                link: "/components/select",
              },
              {
                text: "Slider",
                link: "/components/slider",
              },
              {
                text: "Switch",
                link: "/components/switch",
              },
              {
                text: "Upload",
                link: "/components/upload",
              },
            ],
          },
          { text: "Grid", link: "/components/grid" },
          { text: "Image", link: "/components/image" },
          { text: "List", link: "/components/paper" },
          { text: "Menu", link: "/components/menu" },
          { text: "Pagination", link: "/components/pagination" },
          { text: "Paper", link: "/components/list" },
          {
            text: "Picker",
            items: [
              {
                text: "Color picker",
                link: "/components/color-picker",
              },
              {
                text: "Date picker",
                link: "/components/date-control",
              },
              {
                text: "Time picker",
                link: "/components/time-control",
              },
            ],
          },
          { text: "Progress", link: "/components/progress" },
          { text: "Scrollbar", link: "/components/scrollbar" },
          { text: "Tab", link: "/components/tab" },
          { text: "Tag", link: "/components/tag" },
          { text: "Tooltip", link: "/components/tooltip" },
        ],
        icon: "mdi-shape-outline",
      },
      {
        text: "Directives",
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: "Click outside",
            link: "/zh-CN/directives/v-click-outside",
          },
          { text: "Wave", link: "/zh-CN/directives/v-wave" },
        ],
        icon: "mdi-function-variant",
      },
    ],

    "zh-CN": [
      {
        text: "介绍",
        items: [
          {
            text: "JUI简介",
            link: "/zh-CN/introduction/overview",
            active: true,
          },
          { text: "路线图", link: "/zh-CN/introduction/roadmap" },
        ],
        icon: "mdi-card-text-outline",
      },
      {
        text: "快速开始",
        items: [
          {
            text: "安装",
            link: "/zh-CN/getting-started/installation",
            active: true,
          },
        ],
        icon: "mdi-timer-outline",
      },
      {
        text: "特性",
        items: [
          { text: "国际化", link: "/zh-CN/features/internationalization" },
          { text: "主题", link: "/zh-CN/features/theme" },
        ],
        icon: "mdi-feather",
      },
      {
        text: "样式",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "海拔", link: "/zh-CN/styles/elevation" },
          { text: "颜色", link: "/zh-CN/styles/color" },
          { text: "文本", link: "/zh-CN/styles/text" },
          { text: "间距", link: "/zh-CN/styles/spacing" },
          { text: "弹性布局（Flex）", link: "/zh-CN/styles/flex" },
          { text: "边框（Border）", link: "/zh-CN/styles/border" },
          { text: "过度动画", link: "/zh-CN/styles/transitions" },
        ],
        icon: "mdi-palette-swatch-outline",
      },
      {
        text: "组件",
        collapsible: true,
        collapsed: true,
        items: [
          { text: "提示框（Alert）", link: "/zh-CN/components/alert" },
          {
            text: "应用程序（Application）",
            link: "/zh-CN/components/application",
          },
          { text: "头像（Avatar）", link: "/zh-CN/components/avatar" },
          { text: "徽章（Badge）", link: "/zh-CN/components/badge" },
          { text: "按钮（Button）", link: "/zh-CN/components/button" },
          { text: "卡片（Card）", link: "/zh-CN/components/card" },
          { text: "轮播（Carousel）", link: "/zh-CN/components/carousel" },
          { text: "对话框（Dialog）", link: "/zh-CN/components/dialog" },
          { text: "分割线（Divider）", link: "/zh-CN/components/divider" },
          {
            text: "表单和控件",
            items: [
              {
                text: "自动补全（Autocomplete）",
                link: "/zh-CN/components/autocomplete",
              },
              {
                text: "多选框（Checkbox）",
                link: "/zh-CN/components/checkbox",
              },
              {
                text: "表单（Form）",
                link: "/zh-CN/components/form",
              },
              {
                text: "单选框（Radio）",
                link: "/zh-CN/components/radio",
              },
              {
                text: "评分（Rate）",
                link: "/zh-CN/components/rate",
              },
              {
                text: "下拉框（Select）",
                link: "/zh-CN/components/select",
              },
              {
                text: "滑块（Slider）",
                link: "/zh-CN/components/slider",
              },
              {
                text: "开关（Switch）",
                link: "/zh-CN/components/switch",
              },
              {
                text: "上传（Upload）",
                link: "/zh-CN/components/upload",
              },
            ],
          },
          { text: "栅格（Grid）", link: "/zh-CN/components/grid" },
          { text: "图像（Image）", link: "/zh-CN/components/image" },
          { text: "列表（List）", link: "/zh-CN/components/list" },
          { text: "菜单（Menu）", link: "/zh-CN/components/menu" },
          {
            text: "分页（Pagination）",
            link: "/zh-CN/components/pagination",
          },
          { text: "纸张（Paper）", link: "/zh-CN/components/paper" },
          {
            text: "选择器",
            items: [
              {
                text: "颜色选择器(Color（picker）",
                link: "/zh-CN/components/color-picker",
              },
              {
                text: "日期选择器(Date（picker）",
                link: "/zh-CN/components/date-control",
              },
              {
                text: "时间选择器(Time（picker）",
                link: "/zh-CN/components/time-control",
              },
            ],
          },
          { text: "进度条（Progress）", link: "/zh-CN/components/progress" },
          {
            text: "滚动条（Scrollbar）",
            link: "/zh-CN/components/scrollbar",
          },
          { text: "选项卡（Tab）", link: "/zh-CN/components/tab" },
          { text: "标签（Tag）", link: "/zh-CN/components/tag" },
          { text: "提示（Tooltip）", link: "/zh-CN/components/tooltip" },
        ],
        icon: "mdi-shape-outline",
      },
      {
        text: "指令",
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: "外部点击（Click outside）",
            link: "/zh-CN/directives/v-click-outside",
          },
          { text: "点击波纹（Wave）", link: "/zh-CN/directives/v-wave" },
        ],
        icon: "mdi-function-variant",
      },
    ],
  },

  locales: {
    "/": {
      // navbar
      outlineTitle: "Contents",
      nav: [
        {
          text: "Translations",
          items: [{ text: "Chinese", link: "/zh-CN/" }],
        },
        {
          text: "1.0.0-beta",
          items: [],
        },
      ],

      socialLinks: [
        {
          icon: "github",
          link: "https://github.com/bigJackie/jackiew-ui-v3",
        },
      ],

      footer: {
        message: "Released under the GPL-3.0-or-later License.",
        copyright: "Copyright © 2022-present Jackie Wong",
      },
    },

    "/zh-CN/": {
      outlineTitle: "目录",
      // navbar
      nav: [
        {
          text: "多语言",
          items: [{ text: "英文", link: "/" }],
        },
        {
          text: "1.0.0-beta",
          items: [],
        },
      ],

      // sidebar
      sidebar: [],

      socialLinks: [
        {
          icon: "github",
          link: "https://github.com/bigJackie/jackiew-ui-v3",
        },
      ],
      footer: {
        message: "Released under the GPL-3.0-or-later License.",
        copyright: "Copyright © 2022-present Jackie Wong",
      },
    },
  },
};

// editLink: {
//   pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
//   text: "Edit this page on GitHub",
// },
