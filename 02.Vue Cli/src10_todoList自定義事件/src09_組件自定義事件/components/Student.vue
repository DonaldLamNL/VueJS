<template>
    <div class="student">
        <h2>Student Name: {{name}}</h2>
        <h2>Student Gender: {{gender}}</h2>
        <h2>Number: {{number}}</h2>
        <button @click="add">n++</button>
        <button @click="sendStudentName">Change the student name</button>
        <button @click="unbindEvent">解綁事件</button>
        <button @click="dead">銷毀Student組件實例對象</button>
    </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return {
            name:'Donald',
            gender:'Male',
            number:0
        }
    },
    methods:{
        add(){
            console.log('number++')
            this.number++
        },
        sendStudentName(){
            // 觸發 Student組件實例身上的demo事件
            this.$emit('event', this.name, 100, 200, 300)
            this.$emit('demo')
            // this.$emit('click')
        },
        unbindEvent(){
            // 解綁一個自定義事件
            // this.$off('event')

            // 解綁多個自定義事件
            // this.$off(['event', 'demo'])

            // 解綁所有自定義事件
            this.$off()
        },
        dead(){
            // 銷毀當前Student組件的實例，銷毀後，所有Student實例的自定義事件全部不無效
            this.$destroy()
        }
    }
}
</script>

<style scoped lang="less">
    .student{
        background-color: orange;
        padding: 5px;
        margin-top: 30px;
    }
</style>