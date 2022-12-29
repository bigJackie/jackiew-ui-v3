// directives/index.js
import type { App } from "vue";
import waves from "./waves";
// import highlight from "./highlight";

// 自定义指令 对象，方便注册
const directives = {
  waves,
  // highlight,
};

// >--> 批量注册指令
export default {
  install(app: App) {
    Object.keys(directives).forEach((key) => {
      app.directive(key, directives[key]);
    });
  },
};
