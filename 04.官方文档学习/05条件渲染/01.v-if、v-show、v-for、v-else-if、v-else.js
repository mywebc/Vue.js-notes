//1.v-if和v-show区别
//(1)v-if如果条件为假，压根就不会渲染
//(2)v-show不管怎样都会切换，只是进行简单的css转换

//如何选择使用？
//如果需要频繁的切换，就用v-show ,因为用v-if切换开销很大的，它必须每次都重新渲染

//2.在渲染时可以内置组件<template>，在渲染时，它是不可见的
//如果对于相同的模板，vue不会从头开始渲染，如下：
<template v-if="loginType === 'username'">
    <label>Username</label>
    <input placeholder="Enter your username">
    </template>
    <template v-else>
<label>Email</label>
<input placeholder="Enter your email address">
    </template>

//有时候不需要这样做，可以在元素中加唯一key,如下：
    <template v-if="loginType === 'username'">
    <label>Username</label>
    <input placeholder="Enter your username" key="username-input">
    </template>
    <template v-else>
<label>Email</label>
<input placeholder="Enter your email address" key="email-input">
    </template>
//这样input元素会重新渲染