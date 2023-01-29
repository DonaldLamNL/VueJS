// 此文件專門用於創建整個應用的路由器
import VueRouter from 'vue-router'

// 引入組件
import About from '../pages/About'
import Home from '../pages/Home'

// 創建並暴露一個路由器
export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home
        },

    ]
})