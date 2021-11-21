import router from './router';

import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css';
import { getToken } from '@/utils/auth';
NProgress.configure({ showSpinner: false });

const whiteList = ['/login']; // 重定向白名单

// 全局前置守卫
router.beforeEach(async (to, from, next) => {
  NProgress.start();

  if (getToken()) {
    if (to.path === '/login') {
      // 如果已登录，重定向到主页
      next({ path: '/' });
      // 这个进度条完成，是防止跳转的是当前页面，全局后置钩子不会被触发
      NProgress.done();
    } else {
      next();
    }
  } else if (whiteList.includes(to.path)) {
    // 在登录白名单中，直接进入
    next();
  } else {
    // 其他无权访问的页面将重定向到登录页面
    next(`/login?redirect=${to.path}`);
    NProgress.done();
  }
});

// 全局后置钩子
router.afterEach(() => {
  NProgress.done();
});
