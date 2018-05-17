const merge = require('webpack-merge')
const baseConfig = require('./webpack.config')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(baseConfig,{
    entry: {
        app: './src/app.js'
    },
    optimization:{
        splitChunks:{
            chunks: 'initial', // 只对入口文件处理
            cacheGroups: {
                vendor: { // split `node_modules`目录下被打包的代码到 `page/vendor.js && .css` 没找到可打包文件的话，则没有。css需要依赖 `ExtractTextPlugin`
                    test: /node_modules\//,
                    name: 'page/vendor',
                    priority: 10,
                    enforce: true
                },
                commons: { // split `common`和`components`目录下被打包的代码到`page/commons.js && .css`
                    test: /assets\/|components\//,
                    name: 'page/commons',
                    priority: 10,
                    enforce: true
                }
            }
        },
        runtimeChunk: {
            name: 'page/manifest'
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./src/index.html',
            inject:true,
            hash:true,
            minify:{
                removeComments:true,
                collapseWhitespace:false
            }
        })
    ]
})