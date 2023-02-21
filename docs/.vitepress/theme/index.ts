import JUI from "../../index";

// import VPApp, { NotFound, globals } from "../vitepress";
// import { define } from "../utils/types";
// import "uno.css";
// import "./style.css";
import type { Theme } from "vitepress";

// import "../../../packages/style/index.scss";
import NotFound from "./src/NotFound.vue";

import Layout from "./src/JDoc/JDocLayout.vue";

export default {
  // root component to wrap each page
  Layout,

  // this is a Vue 3 functional component
  NotFound: NotFound,

  enhanceApp({ app, router, siteData }) {
    app.use(JUI);
    // app is the Vue 3 app instance from `createApp()`.
    // router is VitePress' custom router. `siteData` is
    // a `ref` of current site-level metadata.
  },
};
