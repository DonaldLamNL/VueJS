<template>
    <div class="category">
        <h3>{{title}}</h3>
        <!-- 定義一個插槽，待組件的使用者進行填充 -->
        <slot>默認值，當使用者沒有傳遞具體結構時顯示</slot>
    </div>
</template>

<script>
export default {
    name:'Category',
    props:['listData', 'title']
}
</script>

<style>
    .category{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
    h3{
        text-align: center;
        background-color: orange;
    }
    img{
        width: 100%;
    }
    video{
        width: 100%;
    }
</style>