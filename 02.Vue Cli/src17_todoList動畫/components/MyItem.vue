<template>
    <li>
        <label>
            <input type="checkbox" :checked="item.done" @change="handleCheck(item.id)"/>
            <!-- 如下代碼也能實現功能，但是不太推薦，因為有點違反原則，修改了props -->
            <!-- <input type="checkbox" v-model="item.done"/> -->
            <span v-show="!item.isEdit">{{item.title}}</span>
            <input 
                type="text" 
                v-show="item.isEdit" 
                :value="item.title" 
                @blur="handleBlur(item, $event)"
                ref="inputTitle"
            >
        </label>
        <button class="btn btn-danger" @click="handleDelete(item.id)">刪除</button>
        <button class="btn btn-edit" @click="handleEdit(item)" v-show="!item.isEdit">編輯</button>
    </li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'MyItem',
    // 接收item對象
    props:['item'],
    methods:{
        // 通知app組件將對應的對象的done取反
        handleCheck(id){
            this.$bus.$emit('checkElement', id)
        },
        // 刪除
        handleDelete(id){
            if(confirm('確定刪除')){
                // this.$bus.$emit('deleteElement', id)
                pubsub.publish('deleteElement', id)
            }
        },
        // 編輯
        handleEdit(item){
            if(item.hasOwnProperty('isEdit')){
                console.log('有isEdit')
                item.isEdit = true
            }else{
                console.log('沒有isEdit')
                this.$set(item, 'isEdit', true)
            }
            // 獲取焦點
            setInterval(() => {
                this.$refs.inputTitle.focus()
            },);
            // this.$nextTick(function(){
            //     this.$refs.inputTitle.focus()
            // })
        },
        // 失去焦點回調（真正執行修改邏輯）
        handleBlur(item, e){
            item.isEdit = false
            if(!e.target.value.trim()) return alert('The input is empty')
            this.$bus.$emit('updateElement', item.id, e.target.value)
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
    overflow: hidden;
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