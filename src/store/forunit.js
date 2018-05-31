function fetchData(name) {
    return new Promise(resolve => {
        // setTimeout(()=>{
        resolve(name)
        //  },3000)
    })
}

export default {
    namespaced: true,
    state: () => {
        data:''
    },
    actions: {
        fetchData ({ commit }, {name}) {
            return fetchData(name).then(data => {
                commit('setData', {data} )
            })
        }
    },
    mutations: {
        setData (state,{data} ) {
            state.data = data
        }
    }
}