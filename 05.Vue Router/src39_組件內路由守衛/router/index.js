// 此文件專門用於創建整個應用的路由器
import VueRouter from 'vue-router'

// 引入組件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message';
import Detail from '../pages/Detail';

// 創建並暴露一個路由器
const router = new VueRouter({
    routes:[
        {
            name:'aboutRouter',
            path:'/about',
            component:About,
            meta:{isAuth:true, title:'About Page'},
        },
        {
            name:'homeRouter',
            path:'/home',
            component:Home,
            meta:{title:'Home Page'},
            children:[
                {
                    name:'newsRouter',
                    path:'news',
                    component:News,
                    meta:{isAuth:true, title:'News Page'},
                },
                {
                    name:'messageRouter',
                    path:'message',
                    component:Message,
                    meta:{isAuth:true, title:'Message Page'},
                    children:[
                        {
                            name:'detailRouter',
                            path:'detail',
                            component:Detail,
                            meta:{isAuth:true, title:'Detail Page'},

                            // props第一種寫法：對象，該對象中的所欲key-value都會以props的形式傳給Detail組件
                            // props:{a:1,b:'hello'}

                            // props第二種寫法：值為布爾值，若布爾值為真，則把該路由組件收到的所有params參數，以props的形式傳給Detail組件
                            // props:true

                            // props第三種寫法：值為函數，
                            props($route){
                                return{id:$route.query.id, title:$route.query.title}
                            }
                            // props({query}){
                            //     return{id:query.id, title:query.title}
                            // }
                        },
                    ]
                },
            ]
        },
    ]
})

// 全局前置路由守衛 ———— 初始化的時候被調用、每次路由切換之前被調用
// router.beforeEach((to, from, next) => {
//     console.log('前置路由守衛', to, from, next)
//     // if(to.name === 'newsRouter' || to.name === 'messageRouter'){
//     if(to.meta.isAuth){     // 判斷是否需要鑒定權限
//         if(localStorage.getItem('school') === 'CUHK'){
//             next()
//         }else{
//             alert('No auth to enter!')
//         }
//     }else{
//         next()
//     }
// })

// 全局後置路由守衛 ———— 初始化的時候被調用、每次路由切換之後被調用
router.afterEach((to, from) => {
    console.log('後置路由守衛', to, from)
    document.title = to.meta.title || 'Main Page'
})


export default router