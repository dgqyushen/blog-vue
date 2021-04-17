import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios";
import './plugins/iview.js'
import vuetify from './plugins/vuetify';
import "./assets/css/index.css";
import "./assets/css/iconfont.css";
import "./assets/css/markdown.css";
import animate from 'animate.css';



Vue.config.productionTip = false
Vue.prototype.$axios = axios;

Vue.use(ElementUI);
Vue.use(animate);


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
