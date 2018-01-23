<template>
  <div id="app">
    <!-- <img src="./assets/home-bg01.jpg"> -->
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <p>我就是后添加的底</p>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  background: url(./assets/home-bg01.jpg) no-repeat; 
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
p{ line-height: 50px; }
</style>
