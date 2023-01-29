<template>
    <div>
        <Student name="Donald" gender="M" :age="19"/>
        <Student name="Tom" gender="M" :age="20"/>
    </div>
</template>

<script>
import Student from './components/Student.vue'

export default {
    name:'App',
    components:{Student},
}
</script>