<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <el-upload
      action="/api/GCLSFileServer/WebFileUpload"
      :limit="1"
      :file-list="fileList"
      :before-remove="beforeRemove"
      :on-success="handleUploadSuccess"
    >
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      fileList: []
    };
  },
  components: {
    HelloWorld
  },
  methods: {
    // beforeUpload(file) {
    //   console.log(file);
    // },
    handleUploadSuccess(res, file) {
      console.log(res);
      console.log(file);
    },
    beforeRemove(file) {
      console.log(file);
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    request(params) {
      const file = params.file;

      let data = new FormData();

      data.append('upload', file);
      axios
        .post(params.action, {
          headers: {
            'content-type': 'multipart/form-data',
            withCredentials: true
          },
          data
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
};
</script>
