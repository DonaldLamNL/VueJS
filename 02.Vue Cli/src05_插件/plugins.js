export default {
    install(Vue, x, y, z){
        console.log('@ - install', Vue, x, y, z)

        // 全局過濾器
        Vue.filter('mySlice', function(value){
            return value.slice(0,4)
        })

        // 全局指令定義
        Vue.directive('fbind', {
            bind(element, binding){
                element.value = binding.value
            },
            inserted(element, binding){
                element.focus()
            },
            update(element, binding){
                element.value = binding.value
            }
        })

        // 定義混入
        Vue.mixin({
            data(){
                return{
                    x:100,
                    y:200
                }
            }
        })

        // 給Vue原型上添加一個方法
        Vue.prototype.hello = () => {
            alert('Hello')
        }
    }
}