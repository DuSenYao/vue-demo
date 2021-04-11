<template>
  <uploader
    :options="options"
    :file-status-text="statusText"
    class="uploader-example"
    @complete="complete"
    @file-complete="fileComplete"
    @file-error="fileError"
  >
    <!-- <uploader-unsupport></uploader-unsupport> -->
    <uploader-drop>
      <p>拖拽文件上传</p>
      <uploader-btn>选择文件</uploader-btn>
    </uploader-drop>
    <uploader-list></uploader-list>
  </uploader>
</template>

<script>
export default {
  data() {
    return {
      options: {
        // https://github.com/simple-uploader/Uploader/tree/develop/samples/Node.js
        target: '//localhost:3000/upload',
        testChunks: false,
        chunkSize: 8 * 1024 * 1024 //块大小
      },
      attrs: {
        accept: 'image/*'
      },
      statusText: {
        success: '成功',
        error: '失败',
        uploading: '上传中',
        paused: '暂停中',
        waiting: '等待中'
      }
    };
  },
  methods: {
    uploadStart() {
      console.log('start');
    },
    complete() {
      console.log('complete', arguments);
    },
    fileProgress(rootFile, file, chunk) {
      console.log({ rootFile, file, chunk });
    },
    fileComplete() {
      console.log('file complete', arguments);
      const file = arguments[0].file;

      let url =
        'http://192.168.1.84:8089/upload/merge?filename=' +
        file.name +
        '&guid=' +
        arguments[0].uniqueIdentifier;

      this.$axios
        .get(url)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    fileError(rootFile, file, message, chunk) {
      console.log({ rootFile, file, message, chunk });
    }
  }
};
</script>

<style lang="scss" scope>
.uploader-example {
  width: 880px;
  padding: 15px;
  margin: 40px auto 0;
  font-size: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

  .uploader-btn {
    margin-right: 4px;
  }

  .uploader-list {
    max-height: 440px;
    overflow: auto;
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>
