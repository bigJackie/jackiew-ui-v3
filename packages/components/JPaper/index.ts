import JPaper from "./src/JPaper.vue";
import type { App } from "vue";
export default {
  install(app: App) {
    app.component("JPaper", JPaper);
  },
};
