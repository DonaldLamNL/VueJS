<template>
    <div>
        <h1>Current sum is, {{sum}}</h1>
        <h3>Current sum x10 is, {{tenTimes}}</h3>
        <h3>School {{school}}, Major {{major}}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">If sum is an odd number, then +</button>
        <button @click="incrementWait">+ after 0.5s</button>
    </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
    name:'Count',
    data() {
        return {
            n:1,    // selected number
        }
    },
    computed: {
        // 親自編寫計算屬性
        // sum(){
        //     return this.$store.state.sum
        // },
        // school(){
        //     return this.$store.state.school
        // },
        // major(){
        //     return this.$store.state.major
        // },

        // 借助 mapState 生成計算屬性，從state中讀取數據（對象寫法）
        // ...mapState({a:'sum', b:'school', c:'major'}),

        // 借助 mapState 生成計算屬性，從state中讀取數據（數組寫法）
        ...mapState(['sum', 'school', 'major']),

        /***************************************************/

        // tenTimes(){
        //     return this.$store.getters.tenTimes
        // },

        // 借助 mapGetters 生成計算屬性，從getters中讀取數據（對象寫法）
        // ...mapGetters({tenTimes:'tenTimes'})

        // 借助 mapGetters 生成計算屬性，從getters中讀取數據（數組寫法）
        ...mapGetters(['tenTimes'])
    },
    methods: {
        increment(){
            this.$store.commit('ADD', this.n)
        },
        decrement(){
            this.$store.commit('MINUS', this.n)
        },
        incrementOdd(){
            this.$store.dispatch('addOdd', this.n)
        },
        incrementWait(){
            this.$store.dispatch('addWait', this.n)
        },
    },
    mounted() {
        const x = mapState({a:'sum', b:'school', c:'major'})
        console.log(x)
    },
}
</script>

<style scoped>
    button{
        margin-left: 5px;
    }
</style>