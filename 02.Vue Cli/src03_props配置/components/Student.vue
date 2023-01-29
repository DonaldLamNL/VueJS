<template>
    <div>
        <h1>{{msg}}</h1>
        <h2>Student Name: {{name}}</h2>
        <h2>Student Gender: {{gender}}</h2>
        <h2>Student Age: {{myAge+1}}</h2>
        <button @click="EditAge">Edit the recieved age</button>
    </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return {
            msg:'I am a CUHK student',
            myAge:this.age,
        }
    },
    methods:{
        EditAge(){
            this.myAge++
        }
    },
    props:['name', 'gender', 'age']      // 簡單聲明接收
    
    // 接收的同時，對數據進行類型限制
    // props:{
    //     name:String,
    //     gender:String,
    //     age:Number
    // }

    // 接收的同時，對數據進行類型限制 + 默認值的指定 + 必要性的限制
    // props:{
    //     name:{
    //         type:String,    // name的類型必須是字符串
    //         required:true   // name是必須的
    //     },
    //     gender:{
    //         type:String,    // gender的類型必須是字符串
    //         required:true   // gender是必須的
    //     },
    //     age:{
    //         type:Number,    // age的類型必須是數字
    //         default:99      // 默認值
    //     }
    // }
}
</script>