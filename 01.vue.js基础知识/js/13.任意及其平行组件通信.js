/*我们定义两个组件，让A说的话在B中显示出来*/
//定义一个事件调度器，用来触发和监听事件
var Event=new Vue();
c
Vue.component("xiaoming",{
    template:"<div>小明听到小红说：{{m_said}}</div>",
    data:function () {
        return{
            m_said:''
        }
    },
    //    组件从创建到销毁，有一些关键点，又叫钩子，mounted就是一个钩子，意思是我已经初始化好了
    mounted:function () {
        var that=this;
    //我们监听这个是事件
        Event.$on('she_said',function (data) {
            that.m_said=data;
        })
    },
})
new Vue({
    el:'#app'
})