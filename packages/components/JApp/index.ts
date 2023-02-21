import JApp from "./src/JApp.vue";
import type { App } from "vue";
export default {
  install(app: App) {
    app.component("JApp", JApp);
  },
};
