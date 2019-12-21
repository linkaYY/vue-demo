import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./plugins/index";

import "element-ui/lib/theme-chalk/index.css";
import "./assets/css/main.css";
import upload from "./utils/uploader";

Vue.config.productionTip = false;

Vue.use(upload);

Vue.mixin({
  data() {
    return {};
  },
  computed: {
    isCn() {
      return this.$store.state.common.lang === "cn-ZH";
    }
  }
});

window._Vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
