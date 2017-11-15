//这两个组件都有影藏和显示的功能，代码重复了，我们可以重读利用
//放到对象里
var base ={
    data:
        function () {
            return{
                visible:false,
            }
        },
    methods: {
        show: function () {
            this.visible = !this.visible;
        },
        hidden: function () {
            this.visible = !this.visible;
        },
    }

}


Vue.component("haha",{
    template:`
      <div>
        <button @click="show">点击</button>
      <div v-if="visible">
      <span @click="hidden">X</span>
        <h4>title</h4>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur esse ex fugiat, 
        ipsa ipsam minus nihil non officiis perferendis possimus qui quidem quos
         repellendus unde vitae voluptatem. Distinctio, rerum?
</div>
</div>  
    `,
   // 这是一个数组传入对象
   mixins:[base]
})

Vue.component("xixi",{
    template:`
      <div>
       <span @mouseenter="show" @mouseleave="hidden">明星</span>
       <span v-if="visible">陈晓拉尼</span>
</div>  
    `,
    mixins:[base]

});
new Vue({
    el:'#app'
})