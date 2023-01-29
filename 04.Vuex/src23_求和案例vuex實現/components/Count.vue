<template>
    <div>
        <h1>Current sum is, {{$store.state.sum}}</h1>
        <h1>Current sum x10 is, {{$store.getters.tenTimes}}</h1>
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
export default {
    name:'Count',
    data() {
        return {
            n:1,    // selected number
        }
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
}
</script>

<style scoped>
    button{
        margin-left: 5px;
    }
</style>