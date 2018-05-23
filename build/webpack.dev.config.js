const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpack = require('webpack')
const path = require('path')
const fs = require('fs')
const MFS = require('memory-fs')

const clientConfig = require('./webpack.client.config')
const serverConfig = require('./webpack.server.config')
const readFile = (fs, file) => {
    try {
        return fs.readFileSync(path.join(clientConfig.output.path, file), 'utf-8')
    } catch (e) {}
}

module.exports = function setupDevServer (app, cb) {
    let bundle
    let clientManifest

    let ready
    const readyPromise = new Promise(r => { ready = r })

    const update = () => {
        if (bundle && clientManifest) {
            ready()
            cb(bundle, {
                clientManifest
            })
        }
    }

    clientConfig.entry.app = ["webpack-hot-middleware/client",  clientConfig.entry.app]

    clientConfig.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
    const clientCompiler = webpack(clientConfig)
    devMiddleware = webpackDevMiddleware(clientCompiler,{
        publicPath: clientConfig.output.publicPath,
        quiet: true , //向控制台显示任何内容
        noInfo:true,
        reload:true
    })
    app.use(devMiddleware)

    clientCompiler.plugin('done',stats=>{
        stats = stats.toJson()
        stats.errors.forEach(err => console.error(err))
        stats.warnings.forEach(err => console.warn(err))
        if (stats.errors.length) return
        clientManifest = JSON.parse(readFile(
            devMiddleware.fileSystem,
            'vue-ssr-client-manifest.json'
        ))
        update()
    })

    app.use(webpackHotMiddleware(clientCompiler))

    const serverCompiler = webpack(serverConfig)
    const mfs = new MFS()
    serverCompiler.outputFileSystem = mfs
    serverCompiler.watch({}, (err, stats) => {
        if (err) throw err
        stats = stats.toJson()
        if (stats.errors.length) return
        bundle = JSON.parse(readFile(mfs, 'vue-ssr-server-bundle.json'))
        update()
    })

    return readyPromise
}
