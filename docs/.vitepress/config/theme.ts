export const themeConfig = {
  // logo: "https://www.jackiewongz.com/resources/blog_name_black.png",
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

      // sidebar
      sidebar: [
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

      socialLinks: [
        {
          icon: "github",
          link: "https://github.com/bigJackie/jackiew-ui-v3",
        },
      ],

      footer: {
        message: "Released under the GPL-3.0-or-later License.",
        copyright: "Copyright ?? 2022-present Jackie Wong",
      },
    },

    "/zh-CN/": {
      outlineTitle: "??????",
      // navbar
      nav: [
        {
          text: "?????????",
          items: [{ text: "??????", link: "/" }],
        },
        {
          text: "1.0.0-beta",
          items: [],
        },
      ],

      // sidebar
      sidebar: [
        {
          text: "??????",
          items: [
            {
              text: "JUI??????",
              link: "/zh-CN/introduction/overview",
              active: true,
            },
            { text: "?????????", link: "/zh-CN/introduction/roadmap" },
          ],
          icon: "mdi-card-text-outline",
        },
        {
          text: "????????????",
          items: [
            {
              text: "??????",
              link: "/zh-CN/getting-started/installation",
              active: true,
            },
          ],
          icon: "mdi-timer-outline",
        },
        {
          text: "??????",
          items: [
            { text: "?????????", link: "/zh-CN/features/internationalization" },
            { text: "??????", link: "/zh-CN/features/theme" },
          ],
          icon: "mdi-feather",
        },
        {
          text: "??????",
          collapsible: true,
          collapsed: true,
          items: [
            { text: "??????", link: "/zh-CN/styles/elevation" },
            { text: "??????", link: "/zh-CN/styles/color" },
            { text: "??????", link: "/zh-CN/styles/text" },
            { text: "??????", link: "/zh-CN/styles/spacing" },
            { text: "???????????????Flex???", link: "/zh-CN/styles/flex" },
            { text: "?????????Border???", link: "/zh-CN/styles/border" },
            { text: "????????????", link: "/zh-CN/styles/transitions" },
          ],
          icon: "mdi-palette-swatch-outline",
        },
        {
          text: "??????",
          collapsible: true,
          collapsed: true,
          items: [
            { text: "????????????Alert???", link: "/zh-CN/components/alert" },
            {
              text: "???????????????Application???",
              link: "/zh-CN/components/application",
            },
            { text: "?????????Avatar???", link: "/zh-CN/components/avatar" },
            { text: "?????????Badge???", link: "/zh-CN/components/badge" },
            { text: "?????????Button???", link: "/zh-CN/components/button" },
            { text: "?????????Card???", link: "/zh-CN/components/card" },
            { text: "?????????Carousel???", link: "/zh-CN/components/carousel" },
            { text: "????????????Dialog???", link: "/zh-CN/components/dialog" },
            { text: "????????????Divider???", link: "/zh-CN/components/divider" },
            {
              text: "???????????????",
              items: [
                {
                  text: "???????????????Autocomplete???",
                  link: "/zh-CN/components/autocomplete",
                },
                {
                  text: "????????????Checkbox???",
                  link: "/zh-CN/components/checkbox",
                },
                {
                  text: "?????????Form???",
                  link: "/zh-CN/components/form",
                },
                {
                  text: "????????????Radio???",
                  link: "/zh-CN/components/radio",
                },
                {
                  text: "?????????Rate???",
                  link: "/zh-CN/components/rate",
                },
                {
                  text: "????????????Select???",
                  link: "/zh-CN/components/select",
                },
                {
                  text: "?????????Slider???",
                  link: "/zh-CN/components/slider",
                },
                {
                  text: "?????????Switch???",
                  link: "/zh-CN/components/switch",
                },
                {
                  text: "?????????Upload???",
                  link: "/zh-CN/components/upload",
                },
              ],
            },
            { text: "?????????Grid???", link: "/zh-CN/components/grid" },
            { text: "?????????Image???", link: "/zh-CN/components/image" },
            { text: "?????????List???", link: "/zh-CN/components/list" },
            { text: "?????????Menu???", link: "/zh-CN/components/menu" },
            {
              text: "?????????Pagination???",
              link: "/zh-CN/components/pagination",
            },
            { text: "?????????Paper???", link: "/zh-CN/components/paper" },
            {
              text: "?????????",
              items: [
                {
                  text: "???????????????(Color???picker???",
                  link: "/zh-CN/components/color-picker",
                },
                {
                  text: "???????????????(Date???picker???",
                  link: "/zh-CN/components/date-control",
                },
                {
                  text: "???????????????(Time???picker???",
                  link: "/zh-CN/components/time-control",
                },
              ],
            },
            { text: "????????????Progress???", link: "/zh-CN/components/progress" },
            {
              text: "????????????Scrollbar???",
              link: "/zh-CN/components/scrollbar",
            },
            { text: "????????????Tab???", link: "/zh-CN/components/tab" },
            { text: "?????????Tag???", link: "/zh-CN/components/tag" },
            { text: "?????????Tooltip???", link: "/zh-CN/components/tooltip" },
          ],
          icon: "mdi-shape-outline",
        },
        {
          text: "??????",
          collapsible: true,
          collapsed: true,
          items: [
            {
              text: "???????????????Click outside???",
              link: "/zh-CN/directives/v-click-outside",
            },
            { text: "???????????????Wave???", link: "/zh-CN/directives/v-wave" },
          ],
          icon: "mdi-function-variant",
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
        copyright: "Copyright ?? 2022-present Jackie Wong",
      },
    },
  },
};

// editLink: {
//   pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
//   text: "Edit this page on GitHub",
// },
