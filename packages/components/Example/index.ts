import Example from "./src/Example.vue";
import type { App } from "vue";
export default {
  install(app: App) {
    app.component("Example", Example);
  },
};
