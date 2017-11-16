//1.事件监听，用v-on ,简单逻辑直接内联方式书写js代码，如果复杂的逻辑，写成函数写到实例对象里。
//如果没有参数可以省略括号，我们想传入事件对象可以写$event


//2.修饰符（在指令后以点的形式）
//#事件修饰符
    .stop//阻止冒泡行为
    .prevent//比如阻止表单默认行为，刷新页面
    .capture//捕获模式，内部元素触发优先在这儿先处理，然后内部元素在处理，
    .self//当前元素被触发时才触发的函数
    .once//只触发一次
//修饰符是可以链式的

//#按键修饰符(检测keyCde),
//常见的
    .enter
    .tab
    .delete (捕获“删除”和“退格”键)
    .esc
    .space
    .up
    .down
    .left
    .right
//当然了我们也可以自定义按键修饰符

//#系统修饰键
    .ctrl
    .alt
    .shift
    .meta（在window中就是系统键）

//注意一下，.exact修饰符
<!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
<button @click.ctrl="onClick">A</button>

<!-- 仅在只有 Ctrl 被按下的时候触发 -->
<button @click.ctrl.exact="onCtrlClick">A</button>

//#鼠标按钮修饰符
    .left
    .right
    .middle


