<template>
  <div class="basic-layout">
    <el-container class="basic-container">
      <el-aside :style="asideStyle">
        <SideMenu />
      </el-aside>

      <el-container>
        <el-header>
          <Header />
        </el-header>

        <el-main>
          <router-view></router-view>
        </el-main>

        <el-footer>
          <Footer />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { Footer, Header, SideMenu } from './components';

export default {
  name: 'BasicLayout',
  components: {
    Header,
    Footer,
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
