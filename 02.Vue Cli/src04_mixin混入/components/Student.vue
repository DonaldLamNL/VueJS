<template>
    <div>
        <h2 @click="showName">Student Name: {{name}}</h2>
        <h2>Student Gender: {{gender}}</h2>
    </div>
</template>

<script>
// 引入一個混合
// import {mixin1, mixin2} from '../mixin'

export default {
    name:'Student',
    data(){
        return {
            name:'Donald',
            gender:'Male',
            x:666
        }
    },
    // mixins:[mixin1, mixin2]
}
</script>