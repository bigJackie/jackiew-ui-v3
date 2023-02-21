export * from "../packages/components";

import type { App } from "vue";
import JApp from "../packages/components/JApp";

/* Doc */
import JDoc from "./.vitepress/theme/src/JDoc";

const components = [JApp];

const install = function (app: App) {
  components.map(component => {
    app.use(component);
  });
};

export default {
  install,
  JApp,
};

export { JApp };
