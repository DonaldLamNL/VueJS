// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'

// 引入插件
import plugins from './plugins'

// 關閉Vue的生產提示
Vue.config.productionTip = false

// 應用插件
Vue.use(plugins, 1, 2, 3)

// 創建vm
const vm = new Vue({
    el:'#app',
    render: h => h(App)
})