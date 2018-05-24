const path = require('path')
const isProd = process.env.NODE_ENV === 'production'
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const vConsolePlugin = require('vconsole-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
module.exports = {
    devtool: isProd?false:'source-map',
   // mode:isProd?'production':'development',  webpack 4
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: "/",
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '~': path.resolve(__dirname, '../src'),
            'public': path.resolve(__dirname, '../public'),
            '~assets': path.resolve(__dirname, '../src/assets'),
            '~common': path.resolve(__dirname, '../src/common'),
            '~components': path.resolve(__dirname, '../src/components'),
            '~store': path.resolve(__dirname, '../src/store'),
            '~pages': path.resolve(__dirname, '../src/pages'),
        }
    },
    module: {
        noParse: /jquery|chartjs/,
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.vue$/,loader: 'vue-loader'},
            { test: /\.css$/,use: ['vue-style-loader', 'css-loader']} // vue-style-loader import 的css显示在页面中
        ]
    },plugins: isProd
        ? [
            new webpack.optimize.UglifyJsPlugin({
                compress: {warnings: false}
            }),
            process.env.VUE_ENV === 'app' ? new ExtractTextPlugin({
                filename: 'style.css'
            }) : new ExtractTextPlugin({
                filename: 'style.[chunkhash].css'
            })
        ]
        : [
            new FriendlyErrorsPlugin(),
            new vConsolePlugin({
                enable: false   //客户端测试插件 手机测试方便调试看结果
            })

        ]

};