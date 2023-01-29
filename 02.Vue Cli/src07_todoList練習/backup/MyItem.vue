<template>
    <li>
        <label>
            <!-- <input type="checkbox" :checked="item.done" @change="handleCheck(item.id)"/> -->
            <input type="checkbox" v-model="item.done"/>
            <span>{{item.title}}</span>
        </label>
        <button class="btn btn-danger" style="display:none">刪除</button>
    </li>
</template>

<script>
export default {
    name:'MyItem',
    // 接收item對象
    props:['item'],
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
</style>