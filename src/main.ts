import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import JUI from "../packages/index";

import "./assets/main.scss";
import "../packages/style/index.scss";

const app = createApp(App);
app.use(JUI);
app.use(createPinia());
app.use(router);

app.mount("#app");
