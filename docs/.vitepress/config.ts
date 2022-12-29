import { themeConfig } from "./config/theme";
import { mdPlugin } from "./config/plugins";

export default {
  title: "Jackiew UI",
  description:
    "Jackiew-ui a Vue 3 based component library for designers and developers",
  cleanUrls: "without-subfolders",
  themeConfig: themeConfig,
  markdown: {
    config: (md) => mdPlugin(md),
  },
  locales: {
    "/": {
      lang: "en-US",
      title: "Jackiew UI",
      description:
        "Jackiew-ui a Vue 3 based component library for designers and developers",
    },
    "/zh-CN/": {
      lang: "zh-CN",
      title: "Jackiew UI",
      description: "Jackiew-ui, 一个基于Vue3的UI组件库",
    },
  },
};
