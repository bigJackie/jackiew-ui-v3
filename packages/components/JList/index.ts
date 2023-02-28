import JList from "./src/JList.vue";
import JListItem from "./src/JListItem.vue";
import JListGroup from "./src/JListGroup.vue";
import JListItemGroup from "./src/JListItemGroup.vue";
import JListItemContent from "./src/JListItemContent.vue";

import JListItemIcon from "./src/JListItemIcon.vue";
import JListItemTitle from "./src/JListItemTitle.vue";
import JListItemSubtitle from "./src/JListItemSubtitle.vue";
import type { App } from "vue";

export default {
  install(app: App) {
    app.component("JList", JList);
    app.component("JListItem", JListItem);
    app.component("JListGroup", JListGroup);
    app.component("JListItemGroup", JListItemGroup);
    app.component("JListItemContent", JListItemContent);
    app.component("JListItemIcon", JListItemIcon);
    app.component("JListItemTitle", JListItemTitle);
    app.component("JListItemSubtitle", JListItemSubtitle);
  },
};
