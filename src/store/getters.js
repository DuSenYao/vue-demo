// 就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
// Getter 会暴露为 $store.getters 对象，可以以属性的形式访问这些值： $store.getters.doubleCount

const getters = {
  // Getter 接受 state 作为其第一个参数：
  doubleCount: state => state.count * 2
};

export default getters;
