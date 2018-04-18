const express = require('express')
const server = express()
const path = require('path')
server.use(express.static(path.resolve(__dirname, 'dist')))
server.use(express.static(path.resolve(__dirname, 'public')))

server.get('*',(req,res)=>{
    res.end(require('fs').readFileSync('index.template.html'));
})


server.listen(3000,()=>{
    console.log('started')
})

