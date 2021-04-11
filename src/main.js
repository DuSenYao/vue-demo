import Vue from 'vue';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import uploader from 'vue-simple-uploader';

import '@/styles/index.scss'; // global css

import App from './App.vue';
import router from './router';
import store from './store';

import '@/permission'; //权限控制

Vue.use(ElementUI);
Vue.use(uploader);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
