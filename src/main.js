import Vue from 'vue';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import uploader from 'vue-simple-uploader';

import '@/styles/index.scss'; // global css

import Authorized from '@/common/Authorized'; // 权限组件，更精细的权限控制设计
// 权限指令
// 只在第一次加载时调用，如果权限是动态的，不适合这种方式
import Auth from '@/directives/auth';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/permission'; //权限控制

Vue.use(ElementUI);
Vue.use(uploader);
// 注册全局组件
Vue.component('Authorized', Authorized);
// 注册全局指令
Vue.use(Auth);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
