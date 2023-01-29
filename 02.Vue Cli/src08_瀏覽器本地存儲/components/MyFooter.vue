<template>
    <div class="todo-footer" v-show="total">
        <label>
            <!-- <input type="checkbox" :checked="allFinished" @change="checkAll"/> -->
            <input type="checkbox" v-model="allFinished"/>
        </label>
        <span>
            <span>已完成 {{numOfChecked}}</span> / 全部 {{total}}
        </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任務</button>
    </div>
</template>

<script>
export default {
    name:'MyFooter',
    props:['elements', 'checkAllElements', 'clearAllElements'],
    computed:{
      total(){
        return this.elements.length
      },
      numOfChecked(){
        // const x = this.elements.reduce((pre, current)=>{
        //   console.log('@', pre, current)
        //   return pre + (current.done ? 1 : 0)
        // }, 0)
        // console.log('###', x)
        return this.elements.reduce((pre, curElement)=> pre + (curElement.done ? 1 : 0), 0)
      },
      // allFinished(){
        //   return (this.numOfChecked === this.total) && (this.total > 0)
      // },
      allFinished:{
        get(){
          return (this.numOfChecked === this.total) && (this.total > 0)
        },
        set(value){
          // console.log(a)
          this.checkAllElements(value)
        }
      }
    },
    methods:{
      checkAll(e){
        // console.log(e.target.checked)
        this.checkAllElements(e.target.checked)
      },
      clearAll(){
        this.clearAllElements()
      }
    }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}
.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}
.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}
.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>