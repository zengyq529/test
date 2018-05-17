const merge = require('webpack-merge')
const baseConfig = require('./webpack.config')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(baseConfig,{
    entry: {
        app: './src/app.js'
    },
    optimization:{
        splitChunks:{
            chunks: 'initial', // ֻ������ļ�����
            cacheGroups: {
                vendor: { // split `node_modules`Ŀ¼�±�����Ĵ��뵽 `page/vendor.js && .css` û�ҵ��ɴ���ļ��Ļ�����û�С�css��Ҫ���� `ExtractTextPlugin`
                    test: /node_modules\//,
                    name: 'page/vendor',
                    priority: 10,
                    enforce: true
                },
                commons: { // split `common`��`components`Ŀ¼�±�����Ĵ��뵽`page/commons.js && .css`
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