<template>
    <div>
        <h1 class="title">Hello World</h1>
        <School/>
        <hr>
        <Student/>
    </div>
</template>

<script>
// 樣式重疊根據引入的順序
import Student from './components/Student.vue'
import School from './components/School.vue'

export default {
    name:'App',
    components:{School, Student},
}
</script>

<style>
    .title{
        color: red;
    }
</style>