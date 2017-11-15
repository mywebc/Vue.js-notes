new Vue ({
    el:"#app",
    data:{
        limitNum:3,
        addressList:[],
        currentIndex:0,
        shipMethod:1
    },
    mounted:function(){
        this.$nextTick(function(){
            this.getAddList();
        })
    },
    computed:{
        filterAddressList:function(){
            return this.addressList.slice(0,this.limitNum)
        }
    },
    methods:{
        getAddList:function () {
            var _this=this;
            this.$http.get("./data/address.json").then(function(res){
                //如果状态为0请求成功
                    if(res.data.status=='0'){
                        _this.addressList=res.data.result;
                    }
            })
        },
        loadMore:function(){
            this.limitNum=this.addressList.length;
        },
        setDefault:function(addressId){
            //遍历每一个li
            this.addressList.forEach(function(address,index){
                if(address.addressId==addressId){
                    address.isDefault=true;
                }else{
                    address.isDefault=false;
                }
            })
        }
    },
})