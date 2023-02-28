import JForm from "./src/JForm.vue";
import type { App } from "vue";
export default {
  install(app: App) {
    app.component("JForm", JForm);
  },
};
