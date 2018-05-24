<template>
    <div>
        {{modulename}}
    </div>
</template>

<script>
    import flexModule from '~store/flex' //惰性加载相关代码
    export default {
        name: "flex",
        asyncData({ store, route }){
            store.registerModule('flex', flexModule)
            let name = 'flex'
            return store.dispatch('flex/fetchItem',{name})
        },
        data(){
            return{
                title:'flex div hello'
            }
        },
        computed:{
            modulename () {
                return this.$store.state.flex.modulename //惰性加载相关代码
            }
        },
        destroyed () {  // 避免在客户端重复注册模块。
            this.$store.unregisterModule('flex') //惰性加载相关代码
        },
    }
</script>
