<template>
  <div class="side-menu">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#c8e6c6"
      @open="handleOpen"
      @close="handleClose"
    >
    </el-menu>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
.side-menu,
.el-menu {
  width: 210px;
  height: 100%;
  overflow-x: hidden;
}
</style>
