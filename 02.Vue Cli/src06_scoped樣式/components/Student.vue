<template>
    <div class="demo">
        <h2 class="title">Student Name: {{name}}</h2>
        <h2 class="less_test">Student Gender: {{gender}}</h2>
    </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return {
            name:'Donald',
            gender:'Male',
        }
    },
}
</script>

<style scoped lang="less">
    .demo{
        background-color: orange;
        color: aqua;
        .less_test{
            font-size: 40px;
        }
    }
</style>