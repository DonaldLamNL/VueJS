<template>
    <h2>我是About的内容</h2>
</template>

<script>
export default {
    name:'About',
    // beforeDestroy() {
    //     console.log('About component will be destoryed')
    // },
    // mounted() {
    //     console.log('About component mounted',this)
    //     window.aboutRoute = this.$route
    //     window.aboutRouter = this.$router
    // },

    // 通過路由規則，進入該組件時被調用
    beforeRouteEnter (to, from, next) {
        console.log('About --- beforeRouteEnter',to,from)
        if(to.meta.isAuth){     // 判斷是否需要鑒定權限
            if(localStorage.getItem('school') === 'CUHK'){
                next()
            }else{
                alert('No auth to enter!')
            }
        }else{
            next()
        }
    },

    // 通過路由規則，離開該組件時被調用
    beforeRouteLeave (to, from, next) {
        console.log('About --- beforeRouteLeave',to,from)
        next()
    }
}
</script>
