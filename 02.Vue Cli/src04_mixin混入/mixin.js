export const mixin1 = {
    methods:{
        showName(){
            alert(this.name)
        }
    },
    mounted(){
        console.log('Hello')
    }
}

export const mixin2 = {
    data(){
        return{
            x:100,
            y:200
        }
    }
}