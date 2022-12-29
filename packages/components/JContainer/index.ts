import JAside from "./src/JAside.vue";
import JFooter from "./src/JFooter.vue";
import JHeader from "./src/JHeader.vue";
import JMain from "./src/JMain.vue";
import JContainer from "./src/JContainer.vue";
import type { App } from "vue";
export default {
  install(app: App) {
    app.component("JAside", JAside);
    app.component("JFooter", JFooter);
    app.component("JHeader", JHeader);
    app.component("JMain", JMain);
    app.component("JContainer", JContainer);
  },
};
