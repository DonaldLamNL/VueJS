<template>
    <div class="student">
        <h2>Student Name: {{name}}</h2>
        <h2>Student Gender: {{gender}}</h2>
        <button @click="sendStudentName">Send the student name to School Component</button>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
    name:'Student',
    data(){
        return {
            name:'Donald',
            gender:'Male',
        }
    },
    mounted(){

    },
    methods:{
        sendStudentName(){
            pubsub.publish('hello', 666)
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