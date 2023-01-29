<template>
    <div class="container">
        <Category title="Games">
            <template scope="test">
                <ul>
                    <li v-for="(item,index) in test.games" :key="index">{{item}}</li>
                </ul>
                <h4>{{test.msg}}</h4>
            </template>
        </Category>

        <Category title="Games">
            <template scope="{games}">
                <ol>
                    <li v-for="(item,index) in games" :key="index">{{item}}</li>
                </ol>
            </template>
        </Category>

        <Category title="Games">
            <template slot-scope="{games}">
                <h4 v-for="(item,index) in games" :key="index">{{item}}</h4>
            </template>
        </Category>
    </div>
</template>

<script>
import Category from './components/Category.vue'

export default {
    name:'App',
    components:{Category},
}
</script>

<style>
    .container,.foot{
        display: flex;
        justify-content: space-around;
    }
    h4{
        text-align: center;
    }
</style>
