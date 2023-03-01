import { defineConfig } from "vitepress";
import { themeConfig } from "./config/theme";
import { mdPlugin } from "./config/plugins";

export default {
  title: "Jackiew UI",
  cleanUrls: "without-subfolders",
  rewrites: {
    "en-US/introduction/:page": "introduction/:page*",
    "en-US/getting-started/:page": "getting-started/:page*",
    "en-US/features/:page": "features/:page*",
    "en-US/styles/:page": "styles/:page*",
    "en-US/components/:page": "components/:page*",
    "en-US/directives/:page": "directives/:page*",
  },
  themeConfig: themeConfig,
  markdown: {
    config: md => mdPlugin(md),
  },
  locales: {
    root: {
      lang: "en-US",
      label: "English",
      title: "Jackiew UI",
      description: "Jackiew-ui a Vue 3 based component library for designers and developers",
    },
    "zh-CN": {
      lang: "zh-CN",
      label: "Chinese",
      title: "Jackiew UI",
      description: "Jackiew-ui, 一个基于Vue3的UI组件库",
    },
  },
};
