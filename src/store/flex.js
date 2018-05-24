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
    // ��Ҫ��Ϣ��state ������һ��������
    // ��˿��Դ������ʵ������ģ��
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