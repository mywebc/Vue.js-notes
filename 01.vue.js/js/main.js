var app=new Vue({
//    作用域：作用在哪个元素上
    el:'#app',
//    所有的数据放到data里
    data:{
        name:null,
        age:null,
        sex:null,
        foodList:[
            {
                name:"葱",
                price:20
            },
            {
                name:'话',
                price:'10'
            }
        ],
        url:"http://www.baidu.com",
        isActive:true,
        // sex:'female'
        sex:[],
        article:'hihihi',
        //单选
        form:1,//可以设置默认为1或2 都可以
    //    多选
        dest:[],
    //    控制流指令
        role:"admin",
    //    计算属性
        math:90,
        chinese:70
    },
    methods:{
        Click:function(){
            console.log("你点击了我！")
        },
        onDouble:function () {
            console.log("你双击了我！")
        },
        onSubmit:function (e) {
            //正常下我们会这样阻止浏览器默认行为
            e.preventDefault();
            console.log("提交成功！")
        }
    },
//    计算属性在这里写，好处是可以缓存
    computed:{
        sum:function () {
            return this.math+this.chinese
        },
        average:function () {
            return Math.round(this.sum/2)
        }
    }
})
