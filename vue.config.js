const { defineConfig } = require('@vue/cli-service')
module.exports = {
  publicPath: '/date/',
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        options.compilerOptions = {
          ...(options.compilerOptions || {}),
          isCustomElement: tag => tag.startsWith('cally-')
        }
        return options
      })
  }
}
