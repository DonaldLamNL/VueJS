<template>
    <div class="school">
        <h2>School Name: {{name}}</h2>
        <h2>School Address: {{address}}</h2>
    </div>
</template>

<script>
export default {
    name:'School',
    data(){
        return {
            name:'The Chinese University of Hong Kong',
            address:'Tai Po'
        }
    },
    mounted(){
        // 給 $bus 綁定 hello事件
        this.$bus.$on('hello', (data)=>{
            console.log('I am school component, recieved data ', data)
        })
    },
    beforeDestroy(){
        this.$bus.$off('hello')
    }
}
</script>

<style scoped>
    .school{
        background-color: skyblue;
        padding: 5px;
    }
</style>