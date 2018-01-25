<template>
  <div id="app">
    <!-- <img src="./assets/home-bg01.jpg"> -->
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <p>我就是后添加的底为啥</p>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background:url("./assets/home-bg01.jpg") no-repeat 0 0;
}
p{ line-height: 40px; color: #ccc; }

</style>
