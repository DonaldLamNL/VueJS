<template>
    <div class="row">
        <!-- 展示用戶列表 -->
        <div v-show="userInfo.userList.length" class="card" v-for="user in userInfo.userList" :key="user.id">
            <a :href="user.html_url" target="_blank">
            <img :src="user.avatar_url" style='width: 100px'/>
            </a>
            <p class="card-text">{{user.login}}</p>
        </div>
        <!-- 展示歡迎詞 -->
        <h1 v-show="userInfo.isFirst">Hello</h1>
        <!-- 展示加載中 -->
        <h1 v-show="userInfo.isLoading">Loading</h1>
        <!-- 展示錯誤信息 -->
        <h1 v-show="userInfo.errMsg">{{userInfo.errMsg}}</h1>
    </div>
</template>

<script>
export default {
    name:'List',
    data(){
        return {
            userInfo:{
                isFirst:true,
                isLoading:false,
                errMsg:'',
                userList:[]
            }
        }
    },
    mounted(){
        this.$bus.$on('updateListData', (dataObj) => {
            // console.log('Here is list component, got the data: ', userList)
            this.userInfo = {...this.userInfo,...dataObj}
            console.log(this)
        })
    }
}
</script>

<style scoped>
.album {
    min-height: 50rem; /* Can be removed; just added for demo purposes */
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
}

.card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
}

.card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
}

.card-text {
    font-size: 85%;
}
</style>