<template>
    <div>
        <h1>Current sum is, {{sum}}</h1>
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
            sum:0,  // current sum
        }
    },
    methods: {
        increment(){
            this.sum += this.n
        },
        decrement(){
            this.sum -= this.n
        },
        incrementOdd(){
            if(this.sum % 2)
            this.sum += this.n
        },
        incrementWait(){
            setTimeout(() => {
                this.sum += this.n
            }, 500);
        },
    },
}
</script>

<style scoped>
    button{
        margin-left: 5px;
    }
</style>