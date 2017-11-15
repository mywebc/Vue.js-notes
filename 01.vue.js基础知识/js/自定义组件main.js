//自定义组件
// Vue.component('alert',{
//     template:'<button @click="on_click"> 我是自定义的组件</button>',
//     methods:{
//         on_click:function(){
//             alert('hi');
//         }
//     }
// });
//上面这种写法相当于全局变量，谁都可以应用，很不安全。我们可以
//把它写到模板里面
//或者把方法里自定义的逻辑代码里写出来
var Alert= {
    template: '<button @click="on_click"> 我是自定义的组件</button>',
    methods: {
        on_click: function () {
            alert('hi');
        }
    }
}
new Vue({
    el:'#app',
    components:{
        //注意alert最好加引号
        "alert":
            // {
            // template:'<button @click="on_click"> 我是自定义的组件</button>',
            // methods:{
            //     on_click:function(){
            //         alert('hi');
            //     }
            // }
        Alert
    }
})