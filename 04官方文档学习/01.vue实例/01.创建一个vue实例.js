//从今天开始把官方文档撸一遍，2017.11.15
//每个vue应用都是通过VUE函数创建一个vue实例开始的
//vue里面的data对象是响应式的，同步的,data里数据改变时，视图会重新渲染，如果要使用一个属性必须在data里定义
//vue实例里有一些自带的实例属性和方法以$开头
var vm=new Vue({
    data:{
        number:0,
        text:'hello vue'
    }
})
//vue的生命周期
//在vue实例化之前有一系列的初始化过程，
/*
* （1）设置数据监听
* （2）编译模板
* （3）挂载实例到DOM
* (4)数据变化时更新DOM。等等
* */
//在这个过程中，会运行一些叫做生命周期钩子的函数，它们有created,mounted,updated,destoryed等
//注意:
// (1)不要在选项属性上使用箭头函数如
var vm=new Vue({
    //这回改变this的指向，this原来指向Vue的实例vm
    created:()=>{

    }
})
//(2)不要在回调函数中使用箭头函数，原因与上面一样。

//生命周期的图示看官网

