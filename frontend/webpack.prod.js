const webpack = require("webpack");
const merge = require("webpack-merge");
const path = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const common = require("./webpack.common.js");
const ServiceWorkerWebpackPlugin = require("serviceworker-webpack-plugin");

module.exports = merge(common, {
    // devtool: "cheap-module-source-map",
    plugins: [
        new CleanWebpackPlugin(["dist"]),
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new ServiceWorkerWebpackPlugin({
            entry: path.join(__dirname, 'sw.js')
        })
    ]
});
