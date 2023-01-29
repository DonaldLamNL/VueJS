// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'

// 引入混合
import {mixin1, mixin2} from './mixin'

// 關閉Vue的生產提示
Vue.config.productionTip = false
Vue.mixin(mixin1)
Vue.mixin(mixin2)

// 創建vm
const vm = new Vue({
    el:'#app',
    render: h => h(App)
})