import JAppBar from "./src/JAppBar.vue";
import JAppBarNavIcon from "./src/JAppBarNavIcon.vue";
import JAppBarTitle from "./src/JAppBarTitle.vue";
import type { App } from "vue";
export default {
  install(app: App) {
    app.component("JAppBar", JAppBar);
    app.component("JAppBarNavIcon", JAppBarNavIcon);
    app.component("JAppBarTitle", JAppBarTitle);
  },
};
