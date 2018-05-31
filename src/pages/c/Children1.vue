<template>
    <div>
        {{modulename}}
        <a href="/parent/children2">/parent/children2/</a>
    </div>

</template>

<script>
    import c1Module from '~store/flex'
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
                return this.$store.state.c1.modulename
            }
        },
        destroyed () {
            this.$store.unregisterModule('c1')
        },
    }
</script>