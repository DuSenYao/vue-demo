<template>
  <div>
    <button @click="login">login</button>
  </div>
</template>

<script>
export default {
  name: 'Websdk',
  data() {
    return {
      rtc: null
    };
  },
  created() {
    this.createdLoca();
  },
  mounted() {},
  methods: {
    createdLoca() {
      let script = document.createElement('script');

      script.type = 'text/javascript';
      script.src = 'https://class.csslcloud.net/static/dist/js/websdk_4.0.js';
      document.getElementsByTagName('body')[0].appendChild(script);
    },
    login() {
      this.rtc = new Rtc({
        userid: 'userid', // 获得场景视频账号Id
        sessionid: 'sessionid', //  通过api获取
        roomid: 'roomid' // 房间ID
      });
    }
  }
};
</script>

<style lang="scss" scoped>
// only comments
</style>
