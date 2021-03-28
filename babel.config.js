module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  env: {
    development: {
      // 解决Vue热加载编译速度慢问题
      plugins: ['dynamic-import-node']
    }
  }
};
