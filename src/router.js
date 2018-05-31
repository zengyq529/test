import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Index = ()=>import('./pages/Index.vue')
const Flex = ()=>import('./pages/Flex.vue')
//route test page
const Parent = ()=>import('./pages/Parent.vue')
const Children1 = ()=>import('./pages/c/Children1.vue')
const Children2 = ()=>import('./pages/c/Children2.vue')

//unit test page
const Testpage = ()=>import('./pages/Test.vue')
const Test1 = ()=>import('./pages/forunit/page1')
const Test2 = ()=>import('./pages/forunit/page2')
export  function createRouter() {
    return new VueRouter({
        mode: 'history',
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
            },
            { path: '/fortest',
                component: Testpage,
                name: 'test',
                children:[
                    {path: 'test1', component: Test1},
                    {path: 'test2', component: Test2}
                ]
            },
        ]
    })
}