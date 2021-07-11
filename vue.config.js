const path = require('path');

function resolve (dir) {
  return path.join(__dirname, dir);
}



module.exports = {
  publicPath: './', // 基本路径
  outputDir: 'dist', // 输出文件目录
  transpileDependencies: [
    'vuetify'
  ],
  lintOnSave: false, // eslint-loader 是否在保存的时候检查
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  // webpack配置
  chainWebpack: (config) => {
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.mode = 'production'
    } else {
      // 为开发环境修改配置...
      config.mode = 'development'
    }
    Object.assign(config, {
      // 开发生产共同配置
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
          '@c': path.resolve(__dirname, './src/components'),
          '@p': path.resolve(__dirname, './src/pages')
        } // 别名配置
      }
    })
  },
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  parallel: require('os').cpus().length > 1, // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
  pwa: {}, // PWA 插件相关配置 see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  // webpack-dev-server 相关配置
  devServer: {
    open: process.platform === 'darwin',
    host: '127.0.0.1', // 允许外部ip访问
    port: 11451, // 端口
    https: false, // 启用https
    overlay: {
      warnings: true,
      errors: true
    }, // 错误、警告在页面弹出
    proxy: {
      '/api': {
        target: 'http://www.baidu.com/api',
        changeOrigin: true, // 允许websockets跨域
        // ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    } // 代理转发配置，用于调试环境
  },
  // 第三方插件配置
  pluginOptions: {},
  chainWebpack(config) {
    //if (process.env.NODE_ENV == "production") {
    config.optimization.splitChunks({
      minSize: 3000000000000, //依赖包超过300000bit将被单独打包
      minChunks: 1, // 模块的最小被引用次数
      // maxAsyncRequests: 5, // 按需加载的最大并行请求数
      // maxInitialRequests: 3, // 一个入口最大并行请求数
      // automaticNameDelimiter: '~', // 文件名的连接符
      name: true,
      cacheGroups: {
        common: {
          name: 'chunk-common', // 打包后的文件名
          chunks: 'initial', //可选值有：'all'（所有代码块），'async'（按需加载的代码块），'initial'（初始化代码块）
          maxInitialRequests: 5,
          priority: 1,//缓存组打包的先后优先级，数值大的优先
          reuseExistingChunk: true//如果当前代码块包含的模块已经有了，就不在产生一个新的代码块
        },
        vendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          priority: 2,
          reuseExistingChunk: true,
          enforce: true
        },
        antDesignVue: {
          name: 'chunk-ant-design-vue',
          test: /[\\/]node_modules[\\/]ant-design-vue[\\/]/,
          chunks: 'initial',
          priority: 3,
          reuseExistingChunk: true,
          enforce: true
        },
        moment: {
          name: 'moment',
          test: /[\\/]node_modules[\\/]moment[\\/]/,
          chunks: 'initial',
          priority: 4,
          reuseExistingChunk: true,
          enforce: true
        },
        coreJs: {
          name: 'chunk-core-js',
          test: /[\\/]node_modules[\\/]core-js[\\/]/,
          chunks: 'initial',
          priority: 5,
          reuseExistingChunk: true,
          enforce: true
        }
      }
    })
    //}
  }
};