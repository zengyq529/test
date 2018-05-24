import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//惰性加载
const Index = ()=>import('./pages/Index.vue')
const Flex = ()=>import('./pages/Flex.vue')
const Parent = ()=>import('./pages/Parent.vue')
const Children1 = ()=>import('./pages/c/Children1.vue')
const Children2 = ()=>import('./pages/c/Children2.vue')
export  function createRouter() {
    return new VueRouter({
        mode: 'history', //类型: string //默认值: "hash" (浏览器环境) | "abstract" (Node.js 环境) //可选值: "hash" | "history" | "abstract"
        base: '/',
        routes:[
            { path: '/index', component: Index,name: 'index' },
            { path: '/flex', component: Flex,name:'flex' },
            {
                path: '/parent',
                component: Parent,
                name:'parent',
                children:[
                    {path: 'children1', component: Children1},
                    {path: 'children2', component: Children2}
                ]
            }
        ]
    })
}