const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  css: {
    // extract: true,
    // modules: true,
    // sourceMap: true,
    extract: true, // 是否使用css分离插件 ExtractTextPlugin
    sourceMap: false, // 开启 CSS source maps?
    loaderOptions: {
      css: {}, // 这里的选项会传递给 css-loader
      postcss: {}, // 这里的选项会传递给 postcss-loader
    }, // css预设器配置项
    requireModuleExtension: true, // 启用 CSS modules for all css / pre-processor files.
  },

  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    // name: name,
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
  },
  chainWebpack(config) {
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap((options) => {
        options.compilerOptions.preserveWhitespace = true;
        return options;
      })
      .end();
  },
};
