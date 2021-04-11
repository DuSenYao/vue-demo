<template>
  <div>
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules">
      <el-form-item>
        <el-input
          type="text"
          v-model="loginForm.username"
          ref="username"
          name="username"
          placeholder="用户名称"
        />
      </el-form-item>
      <el-form-item>
        <el-input
          ref="password"
          type="password"
          name="password"
          v-model="loginForm.password"
          placeholder="密码"
        />
      </el-form-item>
      <el-button :loading="loading" type="primary" @click.native.prevent="handleLogin">
        登录
      </el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: function () {
    const validatorUsername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不符合规则'));
      }
      return callback();
    };
    const validatorPassword = (rule, value, callback) => {
      if (value.length > 6) {
        return callback(new Error('密码不能少于六位！'));
      }
      return callback();
    };

    return {
      loginForm: {
        username: 'dsy',
        password: '1234567'
      },
      loginRules: {
        username: {
          required: true,
          trigger: 'blur',
          validator: validatorUsername
        },
        password: {
          required: true,
          trigger: 'blur',
          validator: validatorPassword
        }
      },
      loading: false,
      redirect: null
    };
  },
  watch: {
    $router: {
      handler: function (router) {
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
          console.log('error submit!');
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
// only comments
</style>
