<template>
    <div>
        <div id="mod" data-attr="hah">
            {{modulename}}
        </div>
        <div>aaaaa</div>
        <span id="nonetest" style="display: none">haha</span>
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
        mounted(){
            console.log(this)
        },
        computed:{
            modulename () {
                return this.$store.state.flex.modulename
            }
        },
        destroyed () {
            this.$store.unregisterModule('flex')
        },
        test(){

        }
    }
</script>
