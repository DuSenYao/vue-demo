<template>
  <div class="basic-header">
    <el-page-header v-auth="['admin']" title="关闭" content="详情页面" @back="collapseOrUnfold"></el-page-header>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    collapseOrUnfold() {}
  }
};
</script>

<style lang="scss" scoped>
.basic-header {
  height: 100%;

  & div {
    height: 100%;
    line-height: 60px;
    border-bottom: 1px solid $border-color;
  }
}
</style>
