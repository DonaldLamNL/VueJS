<template>
    <div class="todo-header">
        <input type="text" placeholder="請輸入你的任務名稱、按Enter確認" v-model="title" @keyup.enter="add"/>
    </div>
</template>

<script>
import {nanoid} from 'nanoid'

export default {
    name:'MyHeader',
    props:['addElements'],
    data(){
        return{
            title:''
        }
    },
    methods:{
        add(){
            // 校驗數據
            if(!this.title) return alert('空輸入')
            // 將用戶的輸入包裝成一個對象
            const newItem = {id:nanoid(), title:this.title, done:false}
            // 通知app組件佢添加一個對象
            this.addElements(newItem)
            this.title=''
        }
    },
}
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}
.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>