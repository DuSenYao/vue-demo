<template>
  <div>
    <el-form>
      <el-input type="text" v-model="name" placeholder="用户名称" />
      <el-input type="password" v-model="password" placeholder="密码" />
      <el-button
        :loading="loading"
        type="primary"
        @click.native.prevent="handleLogin"
      >
        登录
      </el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: function () {
    return {
      name: '',
      password: '',
      loading: false
    };
  },
  methods: {
    handleLogin() {
      this.loading = true;
      this.$store
        .dispatch('user/login', { name: this.name, password: this.password })
        .then(() => {
          this.$router.push({ path: this.redirect || '/' });
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
// only comments
</style>
