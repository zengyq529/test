const path = require('path')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    devtool: isProd?false:'source-map',
    mode:isProd?'production':'development',
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
    },

};