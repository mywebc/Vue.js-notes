//1.绑定HTML class
//#对象语法
//1.我们可以绑定类的时候，用对象包裹，第一个是你的类名，第二个是你的数据属性，在data里定义true或false,如下:
var vm = new Vue ({
    el:"#app",

    data:{
        isActive: false,
    }
})
//这样HTML中类名就会动态的显示，当然我们也可以把对象放到vue的实例里
data: {
    classObject: {
        active: true,
            'text-danger': false
    }
}
//我们也可以放到计算属性里

//#数组语法
//绑定类时也可以是数组
<div v-bind:class="[activeClass, errorClass]"></div>

data: {
    activeClass: 'active',
        errorClass: 'text-danger'
}
//如果想要根据条件切换，用三元表达式，，或者跟对象结合使用
//以上绑定类的两种方法对于我们自定义的组件也同样有效

//2.绑定内联样式，（CSS）
//#我们同样可以通过对象或数组的形式
//样式不多内联写
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
data: {
    activeColor: 'red',
        fontSize: 30
}

//样式多直接用对象包裹起来放到data里
<div v-bind:style="styleObject"></div>
data: {
    styleObject: {
        color: 'red',
            fontSize: '13px'
    }
}
//数组里可以包含多个对象
<div v-bind:style="[styleObject1,styleObject2]"></div>

//vue.js会自动添加前缀，比如我们在使用transform时
//多重值
//我们在绑定CSS时，一个属性可以对应多个值，常用于提供多个带前缀的值

