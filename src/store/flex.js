import Vue from "vue"
import { mapMutations } from 'vuex'
// https://vuex.vuejs.org/zh/guide/mutations.html
// mapMutations 辅助函数将组件中的 methods 映射为 store.commit

function fetchItem(name) {
    return new Promise(resolve => {
       // setTimeout(()=>{
            resolve(name)
      //  },3000)
    })
}

export default {
    namespaced: true,
    state: () => {
        modulename:''
    },
    actions: { //可以包含异步操作 所以不建议直接 commit  mutatuons 里面的内容
        fetchItem ({ commit }, {name}) {
            return fetchItem(name).then(data => {
                commit('setItem', {data} )
            })
        }
    },
    mutations: { // 都是同步事务
        setItem (state,{data} ) {
            state.modulename = data
        }
    }
}