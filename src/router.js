import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//¶èÐÔ¼ÓÔØ
const Index = ()=>import('./pages/Index.vue')
const Flex = ()=>import('./pages/Flex.vue')

export  function createRouter() {
    return new VueRouter({
        routes:[
            { path: '/index', component: Index },
            { path: '/flex', component: Flex }
        ]
    })
}