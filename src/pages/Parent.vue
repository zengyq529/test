<template>
    <div>
        {{modulename}}
        <a href="/parent/children1">/parent/children1/</a>
        <a href="/parent/children2">/parent/children2/</a>
        <router-view></router-view>
    </div>
</template>

<script>
    import pModule from '~store/flex'
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
                return this.$store.state.parent.modulename
            }
        },
        destroyed () {
            this.$store.unregisterModule('parent')
        },
    }
</script>
