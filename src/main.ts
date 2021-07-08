import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router/index";
// import store from "./store";
import { FontAwesomeIcon } from "./plugins/font-awesome";

createApp(App)
  // .use(store)
  .use(router)
  .component("fa", FontAwesomeIcon)
  .mount("#app");
