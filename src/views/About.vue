<template>
  <div class="about">
    <h1>This is an about page{{ count }}</h1>
    <el-button @click="$store.commit('increment', 2)">count+=2</el-button>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {};
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
};
</script>

<style lang="scss" scoped></style>
