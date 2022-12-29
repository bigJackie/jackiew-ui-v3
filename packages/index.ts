import type { App } from "vue";
import "@mdi/font/css/materialdesignicons.css";

import JApp from "@components/JApp";
import JContainer from "@components/JContainer";

import JAppBar from "@components/JAppBar";
import JNavigationBar from "@components/JNavigationBar";
import JIcon from "@components/JIcon";
// import JButton from "@components/JButton";
// import JScorll from "@components/JButton";
import JPaper from "@components/JPaper";

import JList from "@components/JList";
// import JLayout from "@components/JLayout";

// import JDebugger from "../packages/utils/debugger";
// Vue.prototype.$debugger = new JDebugger();
// Vue.prototype.$Eventbus = new Vue();

// import GGIcons from "vue2-css.gg";
// Vue.use(GGIcons);

// import directives from "./directives";
// Vue.use(directives.install);

const components = [
  JApp,
  JContainer,
  JAppBar,
  JNavigationBar,
  JIcon,
  // JButton,
  // JScorll,
  JPaper,
  JList,
  // JLayout,
];

const install = function (app: App) {
  if (install.installed) return;
  components.map((component) => {
    app.use(component);
  });
};
//  全局引用可自动安装
// if (typeof window !== "undefined" && window.Vue) {
//   console.log(window.Vue);
//   install(window.Vue);
// }

export default {
  install,
  JApp,
  JContainer,
  JAppBar,
  JNavigationBar,
  JIcon,
  // JButton,
  // JScorll,
  JPaper,
  JList,
  // JLayout,
};

export {
  JApp,
  JContainer,
  JAppBar,
  JNavigationBar,
  JIcon,
  // JButton,
  // JScorll,
  JPaper,
  JList,
  // JLayout,
};
