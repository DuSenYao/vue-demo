<template>
  <div>
    <Header />
    <SideBar />
    <Footer />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import SideBar from './components/SideBar';

export default {
  components: {
    Header,
    Footer,
    SideBar
  }
};
</script>

<style lang="scss" scoped>
// only
</style>
