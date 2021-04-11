import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from '@/views/user/login';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: () => import('@/views/user/register')
  },
  {
    path: '/upload',
    name: 'Upload',
    component: () => import('@/views/WebSdk')
  },
  {
    path: '/',
    component: () => import(/* webpackChunkName: 'layouts'*/ '@/layouts/BasicLayout'),
    children: [
      // dashboard
      {
        path: '/',
        redirect: '/dashboard/analysis'
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: { render: h => h('router-view') },
        children: [
          {
            path: '/dashboard/analysis',
            name: 'analysis',
            component: () =>
              import(/* webpackChunkName: 'dashboard' */ '@/views/Dashboard/Analysis')
          }
        ]
      }
    ]
  },
  // form
  {
    path: '/form',
    name: 'Form',
    component: { render: h => h('router-view') },
    children: [
      {
        path: '/form/basic-form',
        name: 'BasicForm',
        component: () => import(/* webpackChunkName: 'form'*/ '@/views/Forms/BasicForm')
      },
      {
        path: '/form/step-form',
        name: 'StepForm',
        component: () => import(/* webpackChunkName:'form' */ '@/views/Forms/StepForm'),
        children: [
          {
            path: '/form/step-form',
            redirect: '/form/step-form/info'
          },
          {
            path: '/form/step-form/info',
            redirect: 'info',
            component: () =>
              import(/* webpackChunkName: 'form' */ '@/views/Forms/StepForm/StepInfo')
          },
          {
            path: '/form/step-form/confirm',
            name: 'confirm',
            component: () =>
              import(/* webpackChunkName: 'form' */ '@/views/Forms/StepForm/StepConfirm')
          },
          {
            path: '/form/step-form/result',
            name: 'result',
            component: () =>
              import(/* webpackChunkName: 'form'*/ '@/views/Forms/StepForm/StepResult')
          }
        ]
      }
    ]
  },
  {
    path: '/Websdk',
    name: 'Websdk',
    component: () => import('@/views/WebSdk')
  },
  {
    path: '/upload',
    component: () => import('@/components/utils/Upload')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404')
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

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
// 重置路由
export function resetRouter() {
  const newRouter = createRouter();

  router.matcher = newRouter.matcher; // reset router
}

export default router;
