<template>
  <div class="a">
    <h1>{{ msg }}</h1>
    <p>{{$route.params.color}}</p>
    <button @click="getParam">获取参数</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      msg:'我是a页面'
    }
  },
  methods:{
    getParam(){
      console.log(this.$route.params)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
