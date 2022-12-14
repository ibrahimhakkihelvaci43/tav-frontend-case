import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import vClickOutside from "click-outside-vue3";

// @ts-ignore
import router from "./router.js";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(vClickOutside);
app.mount("#app");
