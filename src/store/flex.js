import Vue from "vue"

function fetchItem(name) {
    return new Promise(resolve => {
       // setTimeout(()=>{
            resolve(name)
      //  },3000)
    })
}

export default {
    namespaced: true,
    // 重要信息：state 必须是一个函数，
    // 因此可以创建多个实例化该模块
    state: () => ({
        modulename:''
    }),
    actions: {
        fetchItem ({ commit }, {name}) {
            return fetchItem(name).then(data => {
                commit('setItem', {data} )
            })
        }
    },
    mutations: {
        setItem (state,{data} ) {
            state.modulename = data
        }
    }
}