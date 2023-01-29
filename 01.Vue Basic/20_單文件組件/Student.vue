<!-- 組件的結構 -->
<template>
    <div class="demo">
        <h2>Student Name: {{name}}</h2>
        <h2>Student Age: {{age}}</h2>
    </div>
</template>

<!-- 組件交互相關的代碼 -->
<script>
    export default {
        name:'Student',
        data(){
            return{
                name:'Donald',
                age:19
            }
        },
    }
</script>