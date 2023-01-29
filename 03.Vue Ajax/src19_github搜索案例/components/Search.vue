<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
            <button @click="searchUsers">Search</button>
        </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
    name:'Search',
    data(){
        return {
            keyWord:''
        }
    },
    methods:{
        searchUsers(){
            // 請求前更新List數據
            // this.$bus.$emit('updateListData', false, true, '', [])
            this.$bus.$emit('updateListData', {isFirst:false, isLoading:true, errMsg:'', userList:[]})
            axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                response => {
                    console.log('@ success')
                    // 請求成功後更新List數據
                    // this.$bus.$emit('updateListData', false, false, '', response.data.items)
                    this.$bus.$emit('updateListData', {isLoading:false, errMsg:'', userList:response.data.items})
                },
                error => {
                    // 請求失敗後更新List數據
                    console.log('# error')
                    this.$bus.$emit('updateListData', {isLoading:false, errMsg:error.message, userList:[]})
                }
            )
        }
    }
}
</script>
