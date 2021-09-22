import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import app from './modules/app';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment(state, n) {
      state.count += n;
    }
  },
  // 修改 state 时的异步操作，放在这里
  // Vuex 的 actions 应该避免直接操作 state，state 的更改应该由 mutations 去修改，不然 vue-devtools 插件记录不到 state 变更
  // actions 可以根据当前 state进一步处理数据，计算或请求后端接口，然后通过 commit 的形式提交给 mutations 去处理。
  actions: {
    increment({ commit }, { n }) {
      setTimeout(() => {
        commit('increment', n);
      }, 2000);
    }
  },
  modules: {
    user,
    app
  },
  getters,
  // 在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误。这能保证所有的状态变更都能被调试工具跟踪到
  strict: process.env.NODE_ENV !== 'production'
});
