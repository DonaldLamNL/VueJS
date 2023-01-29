<template>
    <div class="container">
        <Category title="Foods">
            <img src="https://img-global.cpcdn.com/recipes/60ebc769ceadedf5/1200x630cq70/photo.jpg" alt="">
        </Category>
        <Category title="Games">
            <ul>
                <li v-for="(item,index) in games" :key="index">{{item}}</li>
            </ul>
        </Category>
        <Category title="Films">
            <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
        </Category>
    </div>
</template>

<script>
import Category from './components/Category.vue'

export default {
    name:'App',
    components:{Category},
    data() {
        return {
            foods:['Sandwich', 'Hamburger', 'Stick', 'Ice-cream'],
            games:['LOL', 'APEX', 'PUBG', 'CSGO'],
            films:['Resident Evil', 'The Matrix', 'The Avengers', 'Spider Man']
        }
    },
}
</script>

<style>
    .container{
        display: flex;
        justify-content: space-around;
    }
</style>
