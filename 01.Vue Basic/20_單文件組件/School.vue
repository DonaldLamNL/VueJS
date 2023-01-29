<!-- 組件的結構 -->
<template>
    <div class="demo">
        <h2>School Name: {{name}}</h2>
        <h2>School Address: {{address}}</h2>
        <button @click="showName">Show Name</button>
    </div>
</template>

<!-- 組件交互相關的代碼 -->
<script>
    export default {
        name:'School',
        data(){
            return{
                name:'The Chinese University of Hong Kong',
                address:'Hong Kong'
            }
        },
        methods:{
            showName(){
                alert(this.name)
            }
        },
    } 
</script>

<!-- 組件的樣式 -->
<style>
    .demo{
        background-color: orange;
    }
</style>

