<template>
    <ul>
        <li>Message No. {{$route.params.id}}</li>
        <li>Message Title: {{$route.params.title}}</li>
    </ul>
</template>

<script>
export default {
    name:'Detail',
    mounted() {
        console.log(this.$route)
    },
}
</script>
