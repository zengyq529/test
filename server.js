const express = require('express')
const server = express()
const path = require('path')
server.use(express.static(path.resolve(__dirname, 'dist')))
server.use(express.static(path.resolve(__dirname, 'public')))
/*const renderer = require('vue-server-renderer').createRenderer({
    template:require('fs').readFileSync('./index.template.html','utf-8')
})
const createApp = require('./src/app')
server.get('*',(req,res)=>{
    let app = createApp()
    renderer.renderToString(app,(err,html)=>{
        if(err){
            if (err.code === 404) {
                res.status(404).end('Page not found')
            } else {
                res.status(500).end('Internal Server Error')
            }
        }else{
            res.end(html)
        }

    })
})
*/

server.get('*',(req,res)=>{
    res.end();
})



server.listen(3000,()=>{
    console.log('started')
})

