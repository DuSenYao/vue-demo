<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" label-position="left">
      <div class="title-container">
        <h3 class="title">
          系统登录
        </h3>
      </div>

      <el-form-item prop="username">
        <el-input
          ref="username"
          v-model.trim="loginForm.username"
          type="text"
          name="username"
          auto-complete="on"
          placeholder="用户名称"
        />
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          ref="password"
          v-model.trim="loginForm.password"
          type="password"
          name="password"
          placeholder="密码"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
        />
      </el-form-item>

      <el-button class="login-button" :loading="loading" type="primary" @click.native.prevent="handleLogin">
        登录
      </el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    const validatorPassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能少于六位！'));
      } else {
        callback();
      }
    };

    return {
      loginForm: {
        username: 'dsy',
        password: '1234567'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', message: '用户名不符合规则' }],
        password: [{ required: true, trigger: 'blur', validator: validatorPassword }]
      },
      loading: false,
      redirect: null
    };
  },
  watch: {
    $router: {
      handler(router) {
        this.redirect = router.query && router.query.redirect;
      }
    }
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch('user/login', this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || '/' });
              this.loading = false;
              this.$message.success('登录成功');
            })
            .catch(() => {
              this.loading = false;
              this.$message.error('登录失败');
            });
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss">
.login-container {
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  background-color: #f5f5f5;

  .title-container {
    position: relative;

    .title {
      margin: 0 auto 40px;
      font-size: 26px;
      font-weight: bold;
      color: #999;
      text-align: center;
    }
  }

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .login-button {
    margin: 0 225px;
  }
}
</style>
