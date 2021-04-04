<template>
  <div class="about">
    <el-row :gutter="6">
      <el-col :span="6" :offset="9"> count: {{ count }} </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" :offset="9"> countAlias: {{ countAlias }} </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" :offset="9">
        doubleCount: {{ $store.getters.doubleCount }}
      </el-col>
    </el-row>
    <el-button @click="$store.commit('increment', 1)"> count++ </el-button>
    <!-- <el-button @click="increment(1)">count++</el-button> -->
    <!-- .dispatch 调用 vuex actions 中的方法 -->
    <el-button @click="$store.dispatch('increment', { n: 2 })">
      count+=2 2s
    </el-button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'About',
  data() {
    return {};
  },
  methods: {
    // 将组件中的 methods 映射为 store.commit 调用
    ...mapMutations(['increment'])
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    // 使用对象展开符，将 mapState 与局部计算属性混合使用
    ...mapState({
      countAlias: 'count'
    })
  },
  // 当一个组件需要获取多个状态的时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，可以使用 `mapState` 辅助函数帮助生成计算属性
  // computed: mapState({
  //   count: state => state.count
  // })
  beforeRouteLeave(to, from, next) {
    const answer = window.confirm('您确定要退出当前页面吗？您有未保存的更改！');

    if (answer) {
      return next();
    }
    next(false);
  }
};
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
  font-size: 24px;
  border: 1px solid #ccc;
  background: #e5e9f2;
}
</style>
