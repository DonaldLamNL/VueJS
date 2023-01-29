// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入VueRouter
import VueRouter from 'vue-router'
// 引入路由器
import router from './router'

// 關閉Vue的生產提示
Vue.config.productionTip = false

// 應用插件
Vue.use(VueRouter)

// 創建vm
const vm = new Vue({
    el:'#app',
    render: h => h(App),
    router:router
})