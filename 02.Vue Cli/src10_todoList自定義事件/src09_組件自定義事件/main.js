// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'

// 關閉Vue的生產提示
Vue.config.productionTip = false

// 創建vm
const vm = new Vue({
    el:'#app',
    render: h => h(App),
    mounted(){
        setInterval(() => {
            this.$destroy()
        }, 3000);
    }
})