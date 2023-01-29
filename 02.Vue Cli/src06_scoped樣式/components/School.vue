<template>
    <div class="demo">
        <h2 class="title">School Name: {{name}}</h2>
        <h2>School Address: {{address}}</h2>
    </div>
</template>

<script>
export default {
    name:'School',
    data(){
        return {
            name:'The Chinese University of Hong Kong',
            address:'Tai Po'
        }
    },
}
</script>

<style scoped>
    .demo{
        background-color: skyblue;
    }
</style>