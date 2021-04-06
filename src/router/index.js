import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index')
  },
  {
    path: '/about',
    name: 'About',
    // 路由级代码拆分
    // 这会为此路由生成一个单独的块（about.[hash].js）
    // 在访问路线时被延迟加载。
    component: () => import('@/views/About')
  },
  {
    path: '/Websdk',
    name: 'Websdk',
    component: () => import('@/views/WebSdk')
  },
  {
    path: '/404',
    component: () => import('@/views/404')
  },
  {
    path: '*',
    redirect: '/404'
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

// 全局前置守卫
router.beforeEach((to, from, next) => {
  console.log({ to, from });
  next();
});

// 全局后置钩子
router.afterEach(() => {
  NProgress.done();
});

export default router;
