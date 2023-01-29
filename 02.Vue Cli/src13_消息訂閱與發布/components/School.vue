<template>
    <div class="school">
        <h2>School Name: {{name}}</h2>
        <h2>School Address: {{address}}</h2>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
    name:'School',
    data(){
        return {
            name:'The Chinese University of Hong Kong',
            address:'Tai Po'
        }
    },
    methods:{
        demo(msgName, data){
            console.log('Hello', msgName, data)
        }
    },
    mounted(){
        this.pubId = pubsub.subscribe('hello', this.demo)
        this.pubId = pubsub.subscribe('hello', (msgName, data) => {
            console.log('發布hello消息 hello消息的回調執行了', msgName, data)
        })
    },
    beforeDestroy(){
        pubsub.unsubscribe(this.pubId)
    }
}
</script>

<style scoped>
    .school{
        background-color: skyblue;
        padding: 5px;
    }
</style>