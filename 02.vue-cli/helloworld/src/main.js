// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRouter from 'vue-router'
import  Vuex from  'vuex'
import a from "./components/a.vue"
import b from "./components/b.vue"


Vue.config.productionTip = false

//使用vue.use注册使用vue-router
Vue.use(VRouter)
Vue.use(Vuex)

let store  = new Vuex.Store({
  state:{
    totalPrice:0
  },
  //mutations里面处理同步，actions里面处理异步，与服务器交互
  mutations:{
    increment(state,price){
      state.totalPrice +=price
    },
    decrement(state,price){
      state.totalPrice -=price
    }
  }
})

let router=new VRouter({
  //可以回退
  mode:'history',
  //设置路由映射
  routes:[
    //重定向
    {
      path:"/",
      redirect:"./a"
    },
    {
    path:"/a/:color",
    component:a
  },{
    path:"/b/:color",
    component:b
  }
  ]

})
/* eslint-disable no-new */
//根组件
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
