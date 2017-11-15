// 自定义组件
Vue.component('alert',{
    template:'<button @click="on_click"> 我是自定义的组件</button>',
    props:['msg'],
    methods:{
        on_click:function(){
            alert(this.msg);
        }
    },
});
new Vue({
    el:'#app'
})