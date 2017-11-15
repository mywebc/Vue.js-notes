vue.js的学习笔记
1.我们需要在main.js里定义模板跟angular差不多
var app=new Vue（{
    //在这里写绑定的元素和数据
    el:''.
    data:{
        name:''
    }
}）
然后再前面引用即可
{{}}双花括号里可以进行简单的Js运算

2.Vue.js中的指令
v-model:数据入口
v-show和v-if:如果有就显示，没有就不显示，前者只是隐藏，后者是删除dom节点
v-for:用来迭代数组的
v-bind:绑定数据和元素属性的，可以直接写冒号
v-on:用来绑定一个或多个事件的，v-on:可以用@代替
v-model指令及其修饰符：数据的双向绑定
修饰符：
v-model.lazy:惰性更新（不会事实更新）
v-model,trim:去掉用户输入的空格
v-model,number:转化为数字类型
在其他元素及其类型的使用：
在input中，select 和textarea中

控制流指令
v-if,v-else-if

计算属性：
在computed中书写逻辑，好处是他是可以缓存的
以这种形式
computer:{
sum:function(){}
}

组件全局即局部组件
Vue.component("",{})的形式创建组件
我们最好写到模板里。

配置组件
点赞示例,点一下加一，点一下取消

组件-父子通信
同样的组件我们可不可以往里面传不同的参数，让它复用起来。

组件-子父通信
我们先定义子组件，再在父组件应用它，子组件给父组件传值，父组件再把它显示出来

任意组件之间的通信
要用一个事件调度器，var Event=new Vue()
Event.$emit()
在mounted周期里监听
Event.$on()

过滤器
Vue.filter('',function(){})

自定义指令
el是自动传进来的，指的是作用的元素，binding是其他一些属性，
比如binding.value指的是作用元素中的value值
Vue.directive('名称',function(el,binding){
} )

混合mixin:重复功能和数据的储存器
数组里面传入对象（把重复使用的代码放到对象里）

slot概念：slot标签可以动态的显示内容
Vue里提供了你可以指定Vue的name，然后你调用模板的时候指定name就可以插入不同的内容



