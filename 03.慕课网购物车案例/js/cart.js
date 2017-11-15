 new Vue ({
     el:"#app",
     data:{
         totalMoney:0,
         totalPrice:0,
         productList:[],
         checkAllTag:false,
         delFlag:false,
         deleProArr:''
     },
     methods:{
         cartView:function(){
             let _this=this
             this.$http.get("./data/cartData.json").then(function(res){
                 _this.productList=res.data.result.list;
                 _this.totalMoney=res.data.result.totalMoney;
             })
         },
         changeMoney:function(product,way){
             if(way>0){
                 product.productQuantity++;
             }else {
                 product.productQuantity--;
             }
             if(product.productQuantity<0){
                 product.productQuantity=0;
             }
         },
         //当选
         selected:function(item){
             //点击时判断如果没有，给vue全局或局部注册一个checked属性，如果有取反
             if(typeof item.checked=='undefined'){
                 Vue.set(item,'checked',true);
             }else {
                 item.checked=!item.checked;
             }
             this.calcuTotalPrice();
         },
         //全选
         checkAll:function(flag){
             this.checkAllTag=flag;
                //遍历商品列表
             let _this=this
             this.productList.forEach(function (item) {
                 if(typeof item.checked=='undefined'){
                     Vue.set(item,'checked',_this.checkAllTag);
                 }else {
                     item.checked=_this.checkAllTag;
                 }
             })
             this.calcuTotalPrice()
         },
         calcuTotalPrice:function(){
             let _this=this
             _this.totalPrice=0;
             this.productList.forEach(function (item) {
               if(item.checked){
                   _this.totalPrice+=item.productPrice*item.productQuantity;
               }
             })
         },
         deleProduct:function (item) {
             this.delFlag=true;
             //把要删除的东西存起来
             this.deleProArr=item
         },
         delConfirm:function(){
             var index=this.productList.indexOf(this.deleProArr);
             this.productList.splice(index,1);
             this.delFlag=false;
         }

     },

     //创建完实例，并且已经挂载到DOM上时
     mounted:function(){
         this.cartView()
     },
     //局部过滤器
     filters:{
         formatMoney:function (val) {
             return '￥' +val.toFixed(2);
         }
     }



 })

 //全局过滤器，公共的过滤器可以放在一个filter的文件夹中
 Vue.filter('money',function (val,type) {
     return '￥' +val.toFixed(2)+type;
 })

