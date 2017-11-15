//1.计算属性
//太复杂的逻辑放在计算属性computed里
var vm = new Vue({
    el:'#example',
    data:{
      message:'hello'
    },
    computed:{
        reversedMessage:function () {
            return this.message.split('').reverse().join('');
        }
    }
})
//注意，其实也可以在methods里定义，结果相同，在computed里区别就是它可以缓存！
//watch属性，也是vue提供的一种监听数据变动的属性，