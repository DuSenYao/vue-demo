<template>
  <div>
    <el-container>
      <el-header>
        <Header />
      </el-header>

      <el-aside :style="aside">
        <SideMenu />
      </el-aside>

      <el-main>
        <router-view></router-view>
      </el-main>

      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import { Footer, Header, SideMenu } from './components';

export default {
  name: 'BasicLayout',
  data() {
    return {
      aside: {}
    };
  },
  components: {
    Header,
    Footer,
    SideMenu
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
// only
</style>
