import JIcon from "./src/JIcon.vue";
import type { App } from "vue";
export default {
  install(app: App) {
    app.component("JIcon", JIcon);
  },
};
