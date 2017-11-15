<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <!--内置组件页面内跳转，rouer-link,默认解读为a标签-->
    <router-link :to="{path:'/a'}">to a页面</router-link>
    <router-link :to="{path:'/b'}">to b页面</router-link>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld'
//import  a from './components/a.vue'
//import  b from './components/b.vue'
//export default {
//  name: 'app',
//  components: {
//    a,b
//  }
//}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
