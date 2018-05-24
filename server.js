const fs = require('fs')
const path = require('path')
const express = require('express')
const server = express()
const isProd = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 3000
const { createBundleRenderer } = require('vue-server-renderer')

const resolve = file => path.resolve(__dirname, file)

const template = fs.readFileSync(resolve('./src/index.html'), 'utf-8')
function createRenderer (bundle, options) {
    return createBundleRenderer(bundle, Object.assign(options, {
        template,
        runInNewContext: false
    }))
}

let readyPromise
if(isProd){
    const bundle = require('./dist/vue-ssr-server-bundle.json')
    const clientManifest = require('./dist/vue-ssr-client-manifest.json')
    renderer = createRenderer(bundle, {
        clientManifest
    })
}else {
    readyPromise = require('./build/webpack.dev.config')(
        server,
        (bundle, options) => {
            renderer = createRenderer(bundle, options)
        }
    )
}

const serve = (path, cache) => express.static(resolve(path), {
    maxAge: cache && isProd ? '7d' : 0
})

function render (req, res) {
    const s = Date.now()
    res.setHeader("Content-Type", "text/html")
    const handleError = err => {
        if (err.url) {
            res.redirect(err.url)
        } else if(err.code === 404) {
            res.status(404).send('404 | Page Not Found')
        } else {
            res.status(500).send('500 | Internal Server Error')
            console.error(`error during render : ${req.url}`)
            console.error(err.stack)
        }
    }
    renderer.renderToString({title: 'Vue HN 2.0',url: req.url}, (err, html) => {
        if (err) {
            return handleError(err)
        }
        res.send(html)
        if (!isProd) {
            console.log(`whole request: ${Date.now() - s}ms`)
        }
    })
}
server.use('/', serve('./dist',true))
server.use('/', serve('./public',true))

server.get('*', isProd ? render : (req, res) => {
    readyPromise.then(() => render(req, res))
})

server.listen(port,()=>{
    console.log(`server started in localhost:${port}`)
})

