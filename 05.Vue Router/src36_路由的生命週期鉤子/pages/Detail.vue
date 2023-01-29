<template>
    <ul>
        <li>Message No. {{id}}</li>
        <li>Message Title: {{title}}</li>
    </ul>
</template>

<script>
export default {
    name:'Detail',
    props:['id', 'title'],
}
</script>
