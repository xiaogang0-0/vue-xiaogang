<template>
  <div id="app">
    <!-- <img src="./assets/home-bg01.jpg"> -->
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>

    <div class="block">
      <span class="demonstration">默认为 Date 对象</span>
      <div class="demonstration">组件值：{{ form.value10 }}</div>
      <el-date-picker
        v-model="form.value10"
        type="date"
        placeholder="选择日期"
        format="yyyy 年 MM 月 dd 日">
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">进行格式化</span>
      <div class="demonstration">组件值：{{ form.value11 }}</div>
      <el-date-picker
        v-model="form.value11"
        type="date"
        placeholder="选择日期"
        format="yyyy 年 MM 月 dd 日"
        value-format="yyyy-MM-dd">
      </el-date-picker>
    </div>
  </div>
</template>



<script>
  export default {
    name: 'App',
    data() {
      return {
        form: {
           value10: '0',
           value11: '2',
        }
      };
    }
  };
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
