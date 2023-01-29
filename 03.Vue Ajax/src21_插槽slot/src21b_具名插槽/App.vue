<template>
    <div class="container">
        <Category title="Foods">
            <img slot="center" src="https://img-global.cpcdn.com/recipes/60ebc769ceadedf5/1200x630cq70/photo.jpg" alt="">
            <a slot="footer" href="https://www.google.com">Click Me</a>
        </Category>
        <Category title="Games">
            <ul slot="center">
                <li v-for="(item,index) in games" :key="index">{{item}}</li>
            </ul>
            <div class="foot" slot="footer">
                <a href="https://www.google.com">FPS</a>
                <a href="https://www.google.com">TPS</a>
            </div>
        </Category>
        <Category title="Films">
            <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
            <template slot="footer">
            <!-- <template v-slot:footer> -->
                <div class="foot">
                    <a href="https://www.google.com">May</a>
                    <a href="https://www.google.com">June</a>
                    <a href="https://www.google.com">July</a>
                </div>
                <h4>Welcome</h4>
            </template>
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
    .container,.foot{
        display: flex;
        justify-content: space-around;
    }
    h4{
        text-align: center;
    }
</style>
