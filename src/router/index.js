import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // 路由级代码拆分
    // 这会为此路由生成一个单独的块（about.[hash].js）
    // 在访问路线时被延迟加载。
    component: () => import('../views/About.vue')
  },
  {
    path: '/Websdk',
    name: 'Websdk',
    component: () => import('../views/WebSdk.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
