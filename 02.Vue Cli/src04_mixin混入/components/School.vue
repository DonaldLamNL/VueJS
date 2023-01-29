<template>
    <div>
        <h2 @click="showName">School Name: {{name}}</h2>
        <h2>School Address: {{address}}</h2>
    </div>
</template>

<script>
// 引入一個混合
// import {mixin1, mixin2} from '../mixin'

export default {
    name:'School',
    data(){
        return {
            name:'CUHK',
            address:'Tai Po'
        }
    },
    mounted(){
        console.log('Hello 2')
    }
    // mixins:[mixin1, mixin2]
}
</script>