// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'

// 完整引入
// 引入ElementUI組件庫
// import ElementUI from 'element-ui';
// 引入ElementUI全部樣式
// import 'element-ui/lib/theme-chalk/index.css';

import { Button, Row, DatePicker } from 'element-ui'
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);

// 關閉Vue的生產提示
Vue.config.productionTip = false

// 應用ElementUI
// Vue.use(ElementUI);

// 創建vm
const vm = new Vue({
    el:'#app',
    render: h => h(App),
})