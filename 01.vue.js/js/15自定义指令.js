Vue.directive('pin',function (el,binding) {
// console.log(binding.value);
    var pinnned=binding.value;
    var position =binding.modifiers;
    var war=binding.arg;
    // console.log(position);
    if(pinnned){
        el.style.backgroundColor='red';
        el.style.position='absolute';
        for(var key in position){
            if(position[key]){
                el.style[key]='10px';
            }
        }
        if(war=='true'){
            el.style.color='blue';
        }
    }else {
        el.style.backgroundColor='#ccc';
        el.style.position='static';

    }
})
new Vue({
    el:'#app',
    data:{
        card1:{
            pinned:false
        },
        card2:{
            pinned:false
        }
    }
})