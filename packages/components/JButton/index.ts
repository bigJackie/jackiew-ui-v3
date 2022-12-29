import JButton from "./src/JButton.vue";
import type { App } from "vue";
export default {
  install(app: App) {
    app.component("JButton", JButton);
  },
};
