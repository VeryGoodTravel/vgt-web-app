const { defineConfig } = require('@vue/cli-service');
const packageJSON = require('./package.json');

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Very Good Travel';
      return args;
    });
    config.plugin('define').tap((args) => {
      args[0]['process.env'].VUE_APP_VERSION = `"${packageJSON.version || '0.0.0'}"`;
      return args;
    });
  },
});
