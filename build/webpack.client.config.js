const merge = require('webpack-merge')
const baseConfig = require('./webpack.config')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
module.exports = merge(baseConfig,{
    entry: {
        app: './src/entry-client.js'
    },
    /*optimization:{       //4.0 �� �ļ��ϲ���������
        splitChunks:{
            chunks: 'all', // ֻ������ļ�����
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
    },*/
    plugins:[
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
            'process.env.VUE_ENV': '"client"'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                return (
                    /node_modules/.test(module.context) &&
                    !/\.css$/.test(module.request)
                )
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
        }),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./src/index.html',
            inject:true,
            hash:true,
            minify:{
                removeComments:true,
                collapseWhitespace:false
            }
        }),
        new VueSSRClientPlugin()
    ]
})