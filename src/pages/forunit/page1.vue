<template>
<div>
    <span id="test1">{{title}}</span>
</div>
</template>

<script>
    export default {
        name: "page1",
        data(){
            return{
                title:'test1 '
            }
        },
        mounted(){
            this.title = this.$route.params.id
        }
    }
</script>
