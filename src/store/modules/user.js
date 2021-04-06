import { UPDATE_USER_NAME, UPDATE_REGISTER_STATE } from '../mutation-types';
import { login } from '@/api/user';

const state = {
  name: 'user',
  isReg: false
};

const mutations = {
  [UPDATE_USER_NAME](state, { newUsername }) {
    state.name = newUsername;
  },

  [UPDATE_REGISTER_STATE](state, isReg) {
    state.isReg = isReg;
  }
};

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { name, password } = userInfo;

    return new Promise((resolve, reject) => {
      login({ name: name.trim(), password: password })
        .then(response => {
          const { data } = response;

          commit(UPDATE_REGISTER_STATE, data.success);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
