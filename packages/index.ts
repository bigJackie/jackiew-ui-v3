import "./styles";

import type { App } from "vue";

import JApp from "./components/JApp";
import JAppBar from "./components/JAppBar";
import JContainer from "./components/JContainer";
import JIcon from "./components/JIcon";
import JLayout from "./components/JLayout";
import JList from "./components/JList";
import JPaper from "./components/JPaper";
import JNavigationBar from "./components/JNavigationBar";
import directives from "./directives";

/* Doc */

const components = [JApp, JAppBar, JContainer, JIcon, JLayout, JList, JPaper, JNavigationBar];

const install = function (app: App) {
  components.map(component => {
    app.use(component);
  });

  // Object.keys(directives).forEach(key => {
  //   app.directive(key, directives[key]);
  // });
};

export default {
  install,
  JApp,
  JAppBar,
  JContainer,
  JIcon,
  JLayout,
  JList,
  JPaper,
  JNavigationBar,
};

export { JApp, JAppBar, JContainer, JIcon, JLayout, JList, JPaper, JNavigationBar };
