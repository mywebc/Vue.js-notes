// 自定义组件
//父组件
Vue.component('balance',{
template:
    `
<div>
<!--在这边监听我定义的事件名称-->
    <show @on_blance="on_blance"></show>
    <div v-if="show">
        你的余额有$10.    
</div>
</div>
`,
    data:function () {
        return {
            show:false
        }
    },
    methods:{
        on_blance:function (data) {
            this.show=true
            //这就是从子组件传进来的数据
            console.log(data);
        }
    }
});
//子组件
Vue.component('show',{
template:'<button @click="on_click()">显示余额</button>',
    methods:{
    on_click:function () {
        //emit相当于trigger做触发事件用,后面可以传多个参数
        //重新定义了事件名称
        this.$emit('on_blance',{a:1,b:2});
    }
    }
});
new Vue({
    el:'#app'
})