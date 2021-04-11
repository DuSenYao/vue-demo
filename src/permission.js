import router from './router';
// import store from './store';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css';
import { getToken } from '@/utils/auth';

NProgress.configure({ showSpinner: false });

const whiteList = ['/login']; // 重定向白名单

// 全局前置守卫
router.beforeEach(async (to, from, next) => {
  NProgress.start();

  const hasToken = getToken();

  if (hasToken) {
    if (to.path === '/login') {
      // 如果已登录，重定向到主页
      next({ path: '/' });
    } else {
      next();
    }
  } else if (whiteList.indexOf(to.path) !== -1) {
    // 在登录白名单中，直接进入
    next();
  } else {
    // 其他无权访问的页面将重定向到登录页面
    next(`/login?redirect=${to.path}`);
  }
});

// 全局后置钩子
router.afterEach(() => {
  NProgress.done();
});
