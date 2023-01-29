<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <!-- 跳轉路由並攜帶params參數，to的字符串寫法 -->
                <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->
                
                <!-- 跳轉路由並攜帶params參數，to的對象寫法 -->
                <router-link :to="{
                    // path:'home/message/detail',
                    name:'detailRouter',
                    query:{
                        id:m.id,
                        title:m.title
                    }
                }">
                    {{m.title}}    
                </router-link>&nbsp;&nbsp;
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'Message',
    data() {
        return {
            messageList:[
                {id:'001', title:'Message001'},
                {id:'002', title:'Message002'},
                {id:'003', title:'Message003'},
            ]
        }
    },
}
</script>
