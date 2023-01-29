<template>
    <div class="app">
        <h1>{{msg}}</h1>
    <School/>
    <Student/>
    </div>
</template>

<script>
import Student from './components/Student.vue'
import School from './components/School.vue'

export default {
    name:'App',
    components:{School, Student},
    data(){
        return{
            msg:'Hello World',
        }
    },
}
</script>

<style>
    .app{
        background-color: gray;
        padding: 5px;
    }
</style>