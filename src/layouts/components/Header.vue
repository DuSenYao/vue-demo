<template>
  <div>
    <el-page-header
      v-auth="['admin']"
      @back="collapseOrUnfold"
      title="展开"
      content="详情页面"
    ></el-page-header>
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
// only
</style>
