<template>
    <div>
        {{modulename}}
    </div>
</template>

<script>
    import flexModule from '~store/flex'
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
                return this.$store.state.flex.modulename
            }
        },
        destroyed () {
            this.$store.unregisterModule('flex')
        },
    }
</script>
