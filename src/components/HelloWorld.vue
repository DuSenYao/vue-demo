<template>
  <el-row>
    <el-col :span="12">
      <el-input
        v-model="message"
        style="width: 200px"
        placeholder="请输入内容"
      ></el-input>
      <span>{{ message }}</span>
    </el-col>
    <el-col :span="5">
      <el-button @click="button" type="primary">点击</el-button>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      message: this.msg
    };
  },
  methods: {
    button() {
      let n = 1;

      n = 2;
      console.log(n);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
