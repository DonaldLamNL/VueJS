<template>
    <div>
        <ul>
            <li :style="{opacity}">Hello World</li>
            <li>news001 <input type="text"></li>
            <li>news002 <input type="text"></li>
            <li>news003 <input type="text"></li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'News',
    data() {
        return {
            opacity:1
        }
    },
    activated() {
        console.log('New Component is activated')
        this.timer = setInterval(() => {
            this.opacity = this.opacity - 0.01 <= 0 ? 1 : this.opacity - 0.01
        }, 16);
    },
    deactivated() {
        clearInterval(this.timer)
        console.log('New Component is deactivated')
    },
}
</script>
