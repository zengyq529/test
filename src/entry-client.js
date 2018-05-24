
import 'es6-promise/auto'
import { createApp } from './app'


const { app, router, store } = createApp()

if (window.__INITIAL_STATE__) {  //同步服务端渲染内容
    store.replaceState(window.__INITIAL_STATE__)
}

router.onReady(() => {
/*

    router.beforeResolve((to, from, next) => {
        console.log('route before resolve')
        const matched = router.getMatchedComponents(to)
        const prevMatched = router.getMatchedComponents(from)

        // 我们只关心非预渲染的组件
        // 所以我们对比它们，找出两个匹配列表的差异组件
        let diffed = false
        const activated = matched.filter((c, i) => {
            return diffed || (diffed = (prevMatched[i] !== c))
        })

        if (!activated.length) {
            return next()
        }

        console.log('start loading')

        Promise.all(activated.map(c => {
            if (c.asyncData) {
                return c.asyncData({ store, route: to })
            }
        })).then(() => {
            console.log('stop loading')
            next()
        }).catch(next)
    })
*/

    app.$mount('#app')
})

