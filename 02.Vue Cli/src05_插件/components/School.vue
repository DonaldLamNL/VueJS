<template>
    <div>
        <h2>School Name: {{name | mySlice}}</h2>
        <h2>School Address: {{address}}</h2>
        <button @click="test">Show Hello</button>
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
    methods:{
        test(){
            this.hello()
        }
    }
}
</script>