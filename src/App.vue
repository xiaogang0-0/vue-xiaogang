<template>
  <div id="app">
    <!-- <img src="./assets/home-bg01.jpg"> -->
    <!-- <img src="./assets/logo.png"> -->
    
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>热门课程列表</el-breadcrumb-item>
      <el-breadcrumb-item>课程详情</el-breadcrumb-item>
    </el-breadcrumb>
    
    <el-tree
      :data="data4"
      :props="defaultProps"
      show-checkbox
      node-key="id"
      default-expand-all
      :expand-on-click-node="false"
      :render-content="renderContent">
    </el-tree>
  
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

    <router-view/>
   
  </div>
  
</template>



<script>
  let id = 1000;
  export default {
    name: 'App',
    data() {
      return {
        form: {
           value10: '0',
           value11: '2',
        },

        data4: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],

        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    methods: {
      append(data) {
        const newChild = { id: id++, label: 'testtest', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },

      renderContent(h, { node, data, store }) {
        return (
          <span style="flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;">
            <span>
              <span>{node.label}</span>
            </span>
            <span>
              <el-button style="font-size: 12px;" type="text" on-click={ () => this.append(data) }>添加</el-button>
              <el-button style="font-size: 12px;" type="text" on-click={ () => this.remove(node, data) }>删除</el-button>
            </span>
          </span>);
      }
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
