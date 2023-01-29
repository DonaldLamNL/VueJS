/*
  此文件是整個項目的入口文件
*/

let person = {name:'Tom', }


// 引入Vue
import Vue from 'vue'
// import Vue from 'vue/dist/vue'

// 引入App組件，它是所有組件的父組件
import App from './App.vue'
// 關閉Vue的生產提示
Vue.config.productionTip = false

// 創建Vue實例對象 vm
new Vue({
  // el:'#app',
  // render(createElement){
  //   return createElement('h1', 'Hello')
  // }
  // render: q => q('h1', 'Hello')
  
  render: h => h(App),
}).$mount('#app')
