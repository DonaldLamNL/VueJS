<template>
    <li>
        <label>
            <input type="checkbox" :checked="item.done" @change="handleCheck(item.id)"/>
            <!-- 如下代碼也能實現功能，但是不太推薦，因為有點違反原則，修改了props -->
            <!-- <input type="checkbox" v-model="item.done"/> -->
            <span>{{item.title}}</span>
        </label>
        <button class="btn btn-danger" @click="handleDelete(item.id)">刪除</button>
    </li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'MyItem',
    // 接收item對象
    props:['item'],
    methods:{
        handleCheck(id){
            // 通知app組件將對應的對象的done取反
            this.$bus.$emit('checkElement', id)
        },
        handleDelete(id){
            // 刪除
            if(confirm('確定刪除')){
                // this.$bus.$emit('deleteElement', id)
                pubsub.publish('deleteElement', id)
            }
        }
    },
}
</script>

<style scoped>
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}
li label {
    float: left;
    cursor: pointer;
}
li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}
li button {
    float: right;
    display: none;
    margin-top: 3px;
}
li:before {
    content: initial;
}
li:last-child {
    border-bottom: none;
}
li:hover{
    background-color: #ddd;
}
li:hover button{
    display: block;
}
</style>