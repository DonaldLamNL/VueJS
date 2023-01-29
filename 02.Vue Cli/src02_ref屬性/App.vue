<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button @click="showDOM" ref="btn">Click Me output element</button>
        <School ref="sch"/>
        <!-- <School id="sch"/> -->
    </div>
</template>

<script>
import School from './components/School.vue'

export default {
    name:'App',
    data() {
        return {
            msg:'Hello World'
        }
    },
    components:{School},
    methods: {
        showDOM(){
            console.log(this.$refs.title)   // 真實DOM元素
            console.log(this.$refs.btn)     // 真實DOM元素
            console.log(this.$refs.sch)     // School組件的實例對象 vc
            // console.log(document.getElementById('sch'))     
        }
    },
}
</script>