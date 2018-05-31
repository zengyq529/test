<template>
    <div>
        <div>
            <span id="findtest">hello</span>
            <br/>
            <span id="count">{{count}}</span>
            <button @click="count++">点我</button>

            <input v-model="data"/>
            <div id="vuextest">{{data}}</div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import dataModule from '~store/forunit' //惰性加载相关代码
    export default {
        name: "testpage",
        asyncData({ store, route }){
            store.registerModule('forunit', dataModule)
            let name = 'hello'
            return store.dispatch('forunit/fetchData',{name})
        },
        data(){
            return{
                count:0
            }
        },
        mounted(){
            console.log(this.$store)
        },
        computed:{
            data () {
                return this.$store.state.forunit.data //惰性加载相关代码
            }
        },
        destroyed () {  // 避免在客户端重复注册模块。
            this.$store.unregisterModule('forunit') //惰性加载相关代码
        },
    }
</script>
