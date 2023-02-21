import JDoc from "./src/JDoc.vue";
import JDocDemo from "./src/JDocDemo.vue";
import JDocHighlight from "./src/JDocHighlight.vue";
import JDocTitle from "./src/JDocTitle.vue";
import JDocContainer from "./src/JDocContainer.vue";
import JDocToc from "./src/JDocToc.vue";

import type { App } from "vue";

export default {
  install(app: App) {
    app.component("JDoc", JDoc);
    app.component("JDocDemo", JDocDemo);
    app.component("JDocHighlight", JDocHighlight);
    app.component("JDocTitle", JDocTitle);
    app.component("JDocContainer", JDocContainer);
    app.component("JDocToc", JDocToc);
  },
};
