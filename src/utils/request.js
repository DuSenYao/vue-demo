import axios from 'axios';
import { Message } from 'element-ui';

axios.defaults.withCredentials = true;
axios.defaults.dataType = 'json';
axios.defaults.headers['cache-control'] = 'no-cache';
axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';

const service = axios.create({
  timeout: 10000
});

// 请求拦截器
service.interceptors.request.use({});

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;

    if (res.code === 404) {
      Message({
        message: '请求的资源不存在！',
        type: 'error',
        duration: 3 * 1000
      });
    }
  },
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 3 * 1000
    });
    return Promise.reject(error);
  }
);

export default service;
