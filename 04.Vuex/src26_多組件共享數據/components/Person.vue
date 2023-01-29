<template>
    <div>
        <h1>Name List</h1>
        <h3 style="color:red">Count component's sum is, {{sum}}</h3>
        <input type="text" placeholder="Please enter the name" v-model="name">
        <button @click="add">Add</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
        </ul>
    </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name:'Person',
    data() {
        return {
            name:''
        }
    },
    computed: {
        personList(){
            return this.$store.state.personList
        },
        sum(){
            return this.$store.state.sum
        }
    },methods: {
        add(){
            const personObj = {id:nanoid(), name:this.name}
            // console.log(personObj)
            this.$store.commit('ADD_PERSON',personObj)
            this.name = ''
        }
    },

}
</script>
