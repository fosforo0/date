const { defineConfig } = require('@vue/cli-service')
import { defineConfig } from '@vue/cli-service'
export default defineConfig ({
  plugins: [vue()],
  base: 'https://fosforo_0.github.io/date/'
})
module.exports = {
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
