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
                text:'app div'
            }
        },
        mounted(){
            console.log('app')
        }
    };
</script>