import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from './pages/Index.vue'
import Flex from './pages/Flex.vue'
export default function createRouter() {
    return new VueRouter({
        routes:[
            { path: '/index', component: Index },
            { path: '/flex', component: Flex }
        ]
    })
}