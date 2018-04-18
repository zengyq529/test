const path = require('path');
const webpack = require('webpack')
module.exports = {
    entry:'./src/app.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.vue$/,loader: 'vue-loader'}
        ]
    }
};


























