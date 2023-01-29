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
    props:['elements'],
    computed:{
      total(){
        return this.elements.length
      },
      numOfChecked(){
        return this.elements.reduce((pre, curElement)=> pre + (curElement.done ? 1 : 0), 0)
      },
      allFinished:{
        get(){
          return (this.numOfChecked === this.total) && (this.total > 0)
        },
        set(value){
          this.$emit('checkAllElements', value)
        }
      }
    },
    methods:{
      checkAll(e){
        this.$emit('checkAllElements', e.target.checked)
      },
      clearAll(){
        this.$emit('clearAllElements')
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