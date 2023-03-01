export * from "../packages/components";
import "../packages/styles";

import type { App } from "vue";

import JApp from "../packages/components/JApp";
import JAppBar from "../packages/components/JAppBar";
import JContainer from "../packages/components/JContainer";
import JIcon from "../packages/components/JIcon";
import JLayout from "../packages/components/JLayout";
import JList from "../packages/components/JList";
import JNavigationBar from "../packages/components/JNavigationBar";
import JPaper from "../packages/components/JPaper";

import directives from "../packages/directives";

/* Doc */
import JDoc from "./.vitepress/theme/src/JDoc";

const components = [JApp, JAppBar, JContainer, JIcon, JLayout, JList, JNavigationBar, JPaper, JDoc];

const install = function (app: App) {
  components.map(component => {
    app.use(component);
  });

  Object.keys(directives).forEach(key => {
    app.directive(key, directives[key]);
  });
};

export default {
  install,
  JApp,
  JAppBar,
  JContainer,
  JIcon,
  JLayout,
  JList,
  JNavigationBar,
  JPaper,
  JDoc,
};
