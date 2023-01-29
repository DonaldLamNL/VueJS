<template>
    <div>
        <button @click="getStudents">Get Students Information</button>
        <button @click="getCars">Get Cars Information</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'App',
    methods:{
        getStudents(){
            axios.get('http://localhost:8080/test1/students').then(
                response => {
                    console.log('success', response.data)
                },
                error => {
                    console.log('fail', error.message)
                }
            )
        },
        getCars(){
            axios.get('http://localhost:8080/test2/cars').then(
                response => {
                    console.log('success', response.data)
                },
                error => {
                    console.log('fail', error.message)
                }
            )
        }
    }
}
</script>