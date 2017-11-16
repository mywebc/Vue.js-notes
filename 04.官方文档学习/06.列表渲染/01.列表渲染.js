//1.列表循环v-for 以item in items 的形式
//当然也可以加上索引值，（item,index）in items ,其中in也可以换成of

//除了v-foe数组，你也可以v-for 对象，
//第一个参数为每一项的别名，第二个为键名，第三个为索引值
<ul id="v-for-object" class="demo">
    <li v-for="（value，key,index) in object">
    {{ value }}
</li>
</ul>
new Vue({
    el: '#v-for-object',
    data: {
        object: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
        }
    }
})

//#在v-for的时候，最好加上唯一key ,在列表顺序发生变化时，能够更加高效的更新虚拟DOM
//原理diff算法，
//往A,B,C ，A，B里插入D，原来的B 变成D，之后的DOM节点如果你不加Key 的话，它会重新创建，而不是一个个往后移，明显浪费
//性能


//2.数组的一些可用方法
//分为变异方法（会改变原始数组）和 非变异方法（返回一个新数组）
/*变异方法：
* push,pop,shift,unshift,sort,reverse,splice
* */
/*非变异方法
* slice,filter,concat,
* */

//注意我们不可以对数组以索引值的方式或者改变其长度
vm.items[1]='hah'或者vm.items.length=2
//应用场景：我们只想从后台（数据库）拿出10条数据，用slice（0，,10）或者想设置用全局方法Vue.sedt(vm.items,1,'haha')

//3.为对象添加(响应式)属性
//我们可以用全局方法Vue.set或者每个实例的方法this.$set
Vue.set(vm.userProfile, 'age', 27)
this.$set(this.userProfile, 'age', 27)
//如果要添加多个属性呢？你也可以像上方这样添加，或者使用Object.assign() 或 _.extend()
this.userProfile = Object.assign({}, this.userProfile, {
    age: 27,
    favoriteColor: 'Vue Green'
})

//4.我们只显示过滤的结果可以在计算属性里或者methods里用过滤器即可

//5.一段取值的v-for,直接写数字也可以的
    <div>
        <span v-for="n in 10">{{ n }} </span>
    </div>

//6.v-for可以跟<template>一起用或者v-if,跟v-if一起用时，它的优先级比v-if高

//7.关于在组件中使用v-for ,2.2版本以上,key是必须要加的



