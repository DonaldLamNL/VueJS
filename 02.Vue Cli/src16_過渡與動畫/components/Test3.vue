<template>
    <div>
        <button @click="isShow = !isShow">顯示/隱藏</button>
        <transition-group 
            appear
            name="animate__animated animate__bounce"
            enter-active-class="animate__swing"
            leave-active-class="animate__backOutUp"
        >
            <h1 v-show="!isShow" key="1">Hello World</h1>
            <h1 v-show="isShow" key="2">Donald Lam</h1>
        </transition-group>
    </div>
</template>

<script>
import 'animate.css'

export default {
    name:'Test3',
    data(){
        return{
            isShow:true
        }
    }
}
</script>

<style scoped>
    h1{
        background-color: skyblue;
    }

</style>