<template>
    <div>
        {{modulename}}
        <a href="/parent/children2">/parent/children2/</a>
    </div>

</template>

<script>
    import c1Module from '~store/flex' //惰性加载相关代码
    export default {
        name: "children2",
        asyncData({ store, route }){
            store.registerModule('c1', c1Module)
            let name = 'c1'
            return store.dispatch('c1/fetchItem',{name})
        },
/*        data(){
            return{
                title:'children1'
            }
        },
        created(){
            console.log('create children1')
        },
        mounted(){
            console.log('mounted children1')
        },*/
        computed:{
            modulename () {
                return this.$store.state.c1.modulename //惰性加载相关代码
            }
        },
        destroyed () {  // 避免在客户端重复注册模块。
            this.$store.unregisterModule('c1') //惰性加载相关代码
        },
    }
</script>