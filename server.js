const express = require('express')
const server = express()
const path = require('path')
const isProd = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 3000


let readyPromise
if(isProd){

}else {
    const webpackDevMiddleware = require('webpack-dev-middleware')
    const webpackHotMiddleware = require('webpack-hot-middleware')
    const webpack = require('webpack')

    const clientConfig = require('./build/webpack.client.config')
    clientConfig.entry.app = ["webpack-hot-middleware/client",  clientConfig.entry.app]

    clientConfig.plugins.push(
        new webpack.HotModuleReplacementPlugin()
    )
    const complier = webpack(clientConfig)
    server.use(webpackDevMiddleware(complier,{
        publicPath: clientConfig.output.publicPath,
        quiet: true , //向控制台显示任何内容
        //  noInfo:true,
        reload:true
    }))
    server.use(webpackHotMiddleware(complier))
}

server.use(express.static(path.resolve(__dirname, 'dist')))
server.use(express.static(path.resolve(__dirname, 'public')))



server.listen(port,()=>{
    console.log(`server started in localhost:${port}`)
})

