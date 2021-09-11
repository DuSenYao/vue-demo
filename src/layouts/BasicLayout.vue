<template>
  <div class="basic-layout">
    <el-container class="basic-container">
      <el-aside :style="asideStyle">
        <side-menu />
      </el-aside>

      <el-container>
        <el-header>
          <header-area />
        </el-header>

        <el-main>
          <router-view></router-view>
        </el-main>

        <el-footer>
          <footer-area />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { FooterArea, HeaderArea, SideMenu } from './components';

export default {
  name: 'BasicLayout',
  components: {
    FooterArea,
    HeaderArea,
    SideMenu
  },
  data() {
    return {
      asideStyle: {
        width: '210px'
      }
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.basic-layout,
.basic-container {
  height: 100%;
}
</style>
