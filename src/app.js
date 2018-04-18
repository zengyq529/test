import Vue from 'vue'
import App from './App.vue'

import createRouter from './router'


let root = document.createElement('div')
document.body.appendChild(root)

const router = createRouter()
new Vue({
    router,
    render(h){
        return h(App)
    }
}).$mount(root)
