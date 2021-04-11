import user from '../mutation-types';
import { getToken, setToken, removeToken } from '@/utils/auth';
// import { login } from '@/api/user';

const state = {
  name: 'user',
  token: getToken(),
  isReg: false
};

const mutations = {
  [user.UPDATE_USER_NAME]: (state, { newUsername }) => {
    state.name = newUsername;
  },

  [user.UPDATE_REGISTER_STATE]: (state, isReg) => {
    state.isReg = isReg;
  },

  [user.SET_TOKEN]: (state, token) => {
    state.token = token;
  }
};

const actions = {
  // 用户登录
  login({ commit }, userInfo) {
    const { username, password } = userInfo;
    // return new Promise((resolve, reject) => {
    //   login({ username: username.trim(), password: password })
    //     .then(response => {
    //       const { data } = response;
    //       commit(user.SET_TOKEN, data.success);
    //       resolve();
    //     })
    //     .catch(error => {
    //       reject(error);
    //     });
    // });
    return new Promise(reslove => {
      // commit(user.SET_TOKEN, `token-${username}-${password}`);
      setToken(`token-${username}-${password}`);
      reslove();
    });
  },

  // 移除 token
  removeToken({ commit }) {
    return new Promise(reslove => {
      removeToken();
      commit(user.REMOVE_TOKEN);
      reslove();
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
