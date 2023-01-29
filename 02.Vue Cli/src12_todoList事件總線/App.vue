<template>
<div id="root">
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader @addElements="addElements"/>
      <MyList :elements="elements"/>
      <MyFooter
        :elements="elements"
        @checkAllElements="checkAllElements"
        @clearAllElements="clearAllElements"
      />
    </div>
  </div>
</div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
import MyFooter from './components/MyFooter.vue'

export default {
    name:'App',
    components:{MyHeader, MyList, MyFooter},
    data(){
        return{
            elements:[
                {id:'001', title:'抽菸', done:true},
                {id:'002', title:'喝酒', done:false},
                {id:'003', title:'開車', done:true}
            ]
        }
    },
    methods:{
        // 添加一個element
        addElements(item){
            this.elements.unshift(item)
        },
        // 操作element的done值
        checkElement(id){
            this.elements.forEach((e) => {
                if(e.id === id){
                    e.done = !e.done
                }
            })
        },
        // 刪除一個element
        deleteElement(id){
          this.elements = this.elements.filter((e) => {
            return e.id !== id
          })
        },
        // 全選/取消全選
        checkAllElements(done){
          this.elements.forEach(e => {
            e.done = done
          })
        },
        // 清除所有依家完成的elements
        clearAllElements(){
          this.elements = this.elements.filter(e => {
            return e.done !== true
          })
        }
    },
    mounted(){
      this.$bus.$on('checkElement', this.checkElement)
      this.$bus.$on('deleteElement', this.deleteElement)
    },
    beforeDestroy(){
      this.$bus.$off('checkElement')
      this.$bus.$off('deleteElement')
    }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>