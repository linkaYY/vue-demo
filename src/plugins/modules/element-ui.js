import Vue from "vue";

import { Menu, Submenu, MessageBox, Message } from "element-ui";

const euiComps = [
  Menu,
  Submenu
  // MessageBox,
  // Message,
];

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$message = Message;

euiComps.forEach(comp => {
  Vue.use(comp);
});
