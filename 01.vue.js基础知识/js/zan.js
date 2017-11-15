Vue.component('zan',{
    //当模板里的东西太多时，可以把他们放到前面HTML中，或者可以用ES6的反引号
    // template:'<button :class="{sign:sign}" @click="on_click()">点赞{{count}}</button>',
    template:'#sign-tem',
    //这里data应该是函数，我们每用一次组件，都会新实例化一次调用
    data:function () {
        return {
            count:10,
            sign:false
        }
    },

    methods:{
        on_click:function () {
            if(!this.sign){
                this.count++;
                this.sign=true;
            }else{
                this.count--;
                this.sign=false;
            }

        }
    }

});
new Vue({
    el:'#app'
})
