const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, './', dir);
}

const name = 'demo';

const NODE_ENV = process.env.NODE_ENV;

const port = process.env.port || process.env.npm_config_port || 9217;

// 配置项说明 https://cli.vuejs.org/config/
module.exports = {
  publicPath: NODE_ENV === 'development' ? '/' : '/vue-demo',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  runtimeCompiler: true,
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true, //默认false   true自动打开网页
    overlay: {
      warnings: false,
      errors: true
    }
    // 跨域配置
    // proxy: {
    //   '/api': {
    //     target: 'http://192.168.5.5:20088/',
    //     changOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  },
  css: {
    loaderOptions: {
      scss: {
        // 为 scss 配置共享全局变量
        additionalData: '@import "./src/styles/variables.scss";' //注意
      }
    }
  },
  configureWebpack: {
    name: name,
    // 配置路径别名
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    devtool: NODE_ENV === 'development' ? 'source-map' : '',
    // stylelint 配置
    plugins: [
      new StyleLintPlugin({
        files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
        fix: false, // 是否自动修复
        cache: true, // 是否缓存
        emitErrors: true,
        failOnError: false
      })
    ]
  },
  chainWebpack(config) {
    // 启用预加载，提高首屏加载速度
    config.plugin('preload').tap(() => [
      {
        rel: 'preload',
        // 忽略 runtime.js
        // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: 'initial'
      }
    ]);

    // 当页面很多时，它将导致太多无意义的请求
    // config.plugins.delete('prefetch');

    // 设置 svg-sprite-loader
    config.module.rule('svg').exclude.add(resolve('src/icons')).end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end();

    config.when(NODE_ENV !== 'development', () => {
      config
        .plugin('ScriptExtHtmlWebpackPlugin')
        .after('html')
        .use('script-ext-html-webpack-plugin', [
          {
            // `runtime`必须与runtimeChunk名称相同。默认是“运行时”
            inline: /runtime\..*\.js$/
          }
        ])
        .end();

      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial' // 仅打包最初依赖的第三方
          },
          elementUI: {
            name: 'chunk-elementUI', // 将elementUI拆分为一个包
            priority: 20, // 权重必须大于libs和app，否则将被打包到libs或app中
            test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
          },
          commons: {
            name: 'chunk-commons',
            test: resolve('src/components'), // 可以自定义规则
            minChunks: 3, // 最小公用数
            priority: 5,
            reuseExistingChunk: true
          }
        }
      });

      // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
      config.optimization.runtimeChunk('single');
    });
  }
};
