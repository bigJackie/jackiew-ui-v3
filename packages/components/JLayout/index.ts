import JRow from "./src/JRow.vue";
import JCol from "./src/JCol.vue";
import type { App } from "vue";
export default {
  install(app: App) {
    app.component("JRow", JRow);
    app.component("JCol", JCol);
  },
};
