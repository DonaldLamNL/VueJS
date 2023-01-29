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
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">If sum is an odd number, then +</button>
        <button @click="incrementWait(n)">+ after 0.5s</button>
    </div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
export default {
    name:'Count',
    data() {
        return {
            n:1,    // selected number
        }
    },
    computed: {
        // 借助 mapState 生成計算屬性，從state中讀取數據（對象寫法）
        // ...mapState({a:'sum', b:'school', c:'major'}),

        // 借助 mapState 生成計算屬性，從state中讀取數據（數組寫法）
        ...mapState(['sum', 'school', 'major']),

        /***************************************************/

        // 借助 mapGetters 生成計算屬性，從getters中讀取數據（對象寫法）
        // ...mapGetters({tenTimes:'tenTimes'})

        // 借助 mapGetters 生成計算屬性，從getters中讀取數據（數組寫法）
        ...mapGetters(['tenTimes'])
    },
    methods: {
        // 親自配置方法
        // increment(){
        //     this.$store.commit('ADD', this.n)
        // },
        // decrement(){
            //     this.$store.commit('MINUS', this.n)
        // },


        //親自配置與map配置的區別
        // increment(){
        //     this.$store.commit('ADD', this.n)
        // },
        // increment(value){
        //     this.$store.commit('ADD', value)
        // },


        // 借助 mapMutations 生成對應的方法，方法中會調用commit去聯繫mutations（對象的寫法）
        ...mapMutations({increment:'ADD', decrement:'MINUS'}),

        // 借助 mapMutations 生成對應的方法，方法中會調用commit去聯繫mutations（數組的寫法）
        // ...mapMutations(['ADD', 'MINUS']),

        /***************************************************/

        // 親自配置方法
        // incrementOdd(){
        //     this.$store.dispatch('addOdd', this.n),
        // },
        // incrementWait(){
        //     this.$store.dispatch('addWait', this.n),
        // },

        // 借助 mapActions 生成對應的方法，方法中會調用dispatch去聯繫actions（對象的寫法）
        ...mapActions({incrementOdd:'addOdd', incrementWait:'addWait'}),

        // 借助 mapActions 生成對應的方法，方法中會調用dispatch去聯繫actions（對象的寫法）
        // ...mapActions(['addOdd', 'addWait']),

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