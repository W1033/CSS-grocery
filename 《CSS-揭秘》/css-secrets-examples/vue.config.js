const path = require("path");
const debug = process.env.NODE_ENV !== "production";

module.exports = {
    publicPath: "./",
    productionSourceMap: false,
    lintOnSave: true,
    css: {
        // 是否使用 css 插件分离代码
        extract: true,
        sourceMap: true,
        modules: false,
    },

    devServer: {
        open: true,
        port: 6600,
        host: "0.0.0.0",
        https: false,
        hotOnly: false,
    }
};