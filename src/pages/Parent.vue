<template>
    <div>
        {{modulename}}
        <a href="/parent/children1">/parent/children1/</a>
        <a href="/parent/children2">/parent/children2/</a>
        <router-view></router-view>
    </div>
</template>

<script>
    import pModule from '~store/flex' //惰性加载相关代码
    export default {
        name: "parent",
        asyncData({ store, route }){
            store.registerModule('parent', pModule)
            let name = 'parent'
            return store.dispatch('parent/fetchItem',{name})
        },
        data(){
            return{
                title:'parent'
            }
        },
/*      created(){
            console.log('create cparent')
        },
        mounted(){
            console.log('mounted cparent')
        },*/
        computed:{
            modulename () {
                return this.$store.state.parent.modulename //惰性加载相关代码
            }
        },
        destroyed () {  // 避免在客户端重复注册模块。
            this.$store.unregisterModule('parent') //惰性加载相关代码
        },
    }
</script>
