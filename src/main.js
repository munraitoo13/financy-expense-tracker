import { createApp } from "vue";
import "./style.css";
import App from "./main.vue";
import Vue3Toastify from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const app = createApp(App);
app.mount("#app");
app.use(Vue3Toastify, {
  autoClose: 3000,
});
