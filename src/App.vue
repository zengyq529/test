<template>
    <div id="app">
        {{text}}
        <router-view/>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                text:'abc'
            }
        },
        mounted(){
            console.log('app')
        }
    };
</script>