<template>
    <h2>我是Home的内容</h2>
</template>

<script>
export default {
    name:'Home',
    // beforeDestroy() {
    //     console.log('Home component will be destoryed')
    // },
    mounted() {
        console.log('Home component mounted',this)
        window.homeRoute = this.$route
        window.homeRouter = this.$router
    },
}
</script>
