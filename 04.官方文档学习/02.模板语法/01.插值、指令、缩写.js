// 1.插值
// #文本
// Mustache语法，就是{{}}
// 加上v-once这个指令表示只会渲染一次，数据改变时不会再渲染
//
// #原始HTML
// {{}}双大括号里只会输出纯1文本，可以用v-html 直接输出HTML，v-html 只对可信内容使用，不能对用户输入内容使用，
//  容易受到XSS攻击（脚本攻击）
//
// Mustache语法不会作用在DOM上的，要用v-bind绑
//<div v-bind:id="hah"></div>
//如果绑定一个布尔值,如果为null、undefin、或false，效果都是一样
//<div v-bind:disabled='isDisabled'></div>

//Mustache语法里可以放一些简单的js表达式，一元表达式或三元表达式
{{num+1}}
//三元表达式
{{a > b ? a=1 : a=2}}
//不能写流程控制语句，或者这种var a=1;

//2.指令
//响应式的作用DOM
//#参数，一些指令接受一个“参数”，比如v-bind:href="url",还有v-on:

//#修饰符，在指令后面以.指出
//比如; .prevent相当于event.preventDefault()
//<form v-on:submit.prevent="onSubmit"></form>

//3.缩写
//#v-bind缩写 v-bind:href  等价于 :href
//#v-on缩写 v-on:click  等价于 @click








