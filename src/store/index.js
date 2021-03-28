import Vue from 'vue';
import Vuex from 'vuex';

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
  // Vuex 的 actions 应该避免直接操作 state，state 的更改应该由 mutations 去修改，不然 vue-devtools 插件记录不到 state 变更，actions 可以根据当前 state进一步处理数据，计算或请求后端接口，然后通过 commit 的形式提交给 mutations 去处理。
  actions: {
    increment(context) {
      setTimeout(() => {
        context.commit('increment');
      }, 2000);
    }
  },
  modules: {}
});
