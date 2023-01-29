<template>
    <div class="app">
        <h1>{{msg}}, Student Name is {{studentName}}</h1>

        <!-- 通過父組件給子組件傳遞函數類型的props實現：子給父傳遞數據 -->
        <School :getSchoolName="getSchoolName"/>

        <!-- 第一種寫法，使用@或者v-on：通過父組件給子組件綁定一個自定義事件：子給父傳遞數據 -->
        <!-- <Student @event="getStudentName" @demo="m1"/> -->

        <!-- 第二種寫法，使用ref：通過父組件給子組件綁定一個自定義事件：子給父傳遞數據 -->
        <Student ref="student" @click.native="show"/>
    </div>
</template>

<script>
// 樣式重疊根據引入的順序
import Student from './components/Student.vue'
import School from './components/School.vue'

export default {
    name:'App',
    components:{School, Student},
    data(){
        return{
            msg:'Hello World',
            studentName:''
        }
    },
    methods:{
        // props實現
        getSchoolName(name){
            console.log('school name is ', name);
        },
        getStudentName(name, ...params){
            console.log('student name is', name, params)
            this.studentName = name
        },
        m1(){
            console.log('demo event')
        },
        show(){
            alert('123')
        }
    },
    mounted(){
        this.$refs.student.$on('event', (name, ...params) => {
            console.log('student name is', name, params)
            console.log(this)
            this.studentName = name
        })
        // this.$refs.student.$on('event', this.getStudentName)     // 綁定自定義事件
        // this.$refs.student.$once('event', this.getStudentName)      // 綁定一次性自定義事件
    },
}
</script>

<style>
    .app{
        background-color: gray;
        padding: 5px;
    }
</style>