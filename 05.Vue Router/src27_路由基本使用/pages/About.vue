<template>
    <h2>我是About的内容</h2>
</template>

<script>
export default {
    name:'About',
    // beforeDestroy() {
    //     console.log('About component will be destoryed')
    // },
    mounted() {
        console.log('About component mounted',this)
        window.aboutRoute = this.$route
        window.aboutRouter = this.$router
    },
}
</script>
