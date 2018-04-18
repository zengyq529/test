import Vue from 'vue'
import App from './App.vue'
let root = document.createElement('div')
document.body.appendChild(root)
console.log(root)
new Vue({
    render(h){
        return h(App)
    }
}).$mount(root)
