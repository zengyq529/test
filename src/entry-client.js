
import 'es6-promise/auto'
import { createApp } from './app'


const { app, router, store } = createApp()

if (window.__INITIAL_STATE__) {  //ͬ���������Ⱦ����
    store.replaceState(window.__INITIAL_STATE__)
}

router.onReady(() => {
/*

    router.beforeResolve((to, from, next) => {
        console.log('route before resolve')
        const matched = router.getMatchedComponents(to)
        const prevMatched = router.getMatchedComponents(from)

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

