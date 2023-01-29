<template>
    <div class="student">
        <h2>Student Name: {{name}}</h2>
        <h2>Student Gender: {{gender}}</h2>
        <button @click="sendStudentName">Send the student name to School Component</button>
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
    mounted(){
        console.log('@x', this.x)
    },
    methods:{
        sendStudentName(){
            this.$bus.$emit('hello', this.name)
        }
    }
}
</script>

<style scoped lang="less">
    .student{
        background-color: orange;
        padding: 5px;
        margin-top: 30px;
    }
</style>