<template>
    <div>
        <img src="./assets/logo.png" alt="logo">
        <School/>
        <Student/>
    </div>
</template>

<script>
    // 引入組件
    import School from './School.vue'
    import Student from './Student.vue'

    export default {
        name:'App',
        components:{
            School,
            Student
        }
    }
</script>