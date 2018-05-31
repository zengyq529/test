<template>
    <div>
        {{modulename}}
        <a href="/parent/children1">/parent/children1/</a>
    </div>

</template>

<script>
    import c2Module from '~store/flex'
    export default {
        name: "children2",
        asyncData({ store, route }){
            store.registerModule('c2', c2Module)
            let name = 'c2'
            return store.dispatch('c2/fetchItem',{name})
        },
/*        data(){
            return{
                title:'children2'
            }
        },
        created(){
            console.log('create2 children2')
        },
        mounted(){
            console.log('mounted children2')
        },*/
        computed:{
            modulename () {
                return this.$store.state.c2.modulename
            }
        },
        destroyed () {
            this.$store.unregisterModule('c2')
        },
    }
</script>
