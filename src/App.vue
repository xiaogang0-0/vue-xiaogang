<template>
  <div id="app">
    <!-- <img src="./assets/home-bg01.jpg"> -->
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>

    <p>my is add bottom</p>
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
p{ line-height: 40px; color: rgba(0,0,0,0.2); }

</style>
