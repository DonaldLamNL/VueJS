<template>
    <div class="school">
        <h2>School Name: {{name}}</h2>
        <h2>School Address: {{address}}</h2>
        <button @click="sendSchoolName">Change the school name</button>
    </div>
</template>

<script>
export default {
    name:'School',
    props:['getSchoolName'],
    data(){
        return {
            name:'The Chinese University of Hong Kong',
            address:'Tai Po'
        }
    },
    methods:{
        // props實現
        sendSchoolName(){
            this.getSchoolName(this.name)
        }
    }
}
</script>

<style scoped>
    .school{
        background-color: skyblue;
        padding: 5px;
    }
</style>