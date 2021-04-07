import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css';
import Home from '@/views/Home';

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
    path: '/user',
    component: () =>
      import(/* webpackChunkName: "layout" */ '@/layout/UserLayout'),
    children: [
      {
        path: '',
        redirect: 'login'
      },
      {
        path: 'login',
        name: 'Login',
        component: () =>
          // /* webpackChunkName: "user" */ 是webpack特殊注释语法，会把相同名称的统一打包
          import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'Register',
        component: () =>
          import(/* webpackChunkName: 'user' */ '@/views/user/Register')
      }
    ]
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
    path: '/upload',
    component: () => import('@/components/utils/Upload')
  },
  {
    path: '*',
    redirect: '/404'
  }
];

const createRouter = () =>
  new VueRouter({
    // mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes
  });

const router = createRouter();

// 全局前置守卫
router.beforeEach((to, from, next) => {
  NProgress.start();
  console.log({ to, from });
  next();
});

// 全局后置钩子
router.afterEach(() => {
  NProgress.done();
});

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
// 重置路由
export function resetRouter() {
  const newRouter = createRouter();

  router.matcher = newRouter.matcher; // reset router
}

export default router;
