<template>
    <div>
        <button @click="isShow = !isShow">顯示/隱藏</button>
        <transition name="hello" appear>
            <h1 v-show="isShow">Hello World</h1>
        </transition>
    </div>
</template>

<script>
export default {
    name:'Test',
    data(){
        return{
            isShow:true
        }
    }
}
</script>

<style scoped>
    h1{
        background-color: orange;
    }

    .hello-enter-active{
        animation: test 1s;
    }

    .hello-leave-active{
        animation: test 1s reverse;
    }

    @keyframes test{
        from{
            transform: translateX(-100%);
            opacity: 0;
        }
        to{
            transform: translateX(0px);
            opacity: 1;
        }
    }
</style>