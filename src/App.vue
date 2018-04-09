<template>
  <div id="app">
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项66</template>
              <el-menu-item index="1-4-1">选项66-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>导航三</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
      
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>
        <!-- 面包屑 -->
        <el-breadcrumb separator="/" class="tables">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>热门课程列表</el-breadcrumb-item>
          <el-breadcrumb-item>课程详情</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 中间内容区域-->
        <el-main>
          <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
          </el-table>
          <!-- 原有 -->
              <!-- <div id="app"> -->
                <!-- <img src="./assets/home-bg01.jpg"> -->
                <!-- <img src="./assets/logo.png"> -->
                
                
                
               <!--  <el-tree
                  :data="data4"
                  :props="defaultProps"
                  show-checkbox
                  node-key="id"
                  default-expand-all
                  :expand-on-click-node="false"
                  :render-content="renderContent">
                </el-tree> -->

                <el-button :plain="true" @click="open">打开消息提示</el-button>

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
               
              <!-- </div> -->
          <!--  原有-->

        </el-main>
      </el-container>


    </el-container>
  </div>
</template>

<style >
  .el-header {
    background-color: #00aaee;
    color: #333;
    line-height: 60px;
  }
  .el-aside {
    color: #333;
  }
  body ,html, .el-container,#app{
    padding: 0; 
    margin:0; 
    width: 100%;
    height: 100% !important;
  }
  #app{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background:url("./assets/loginnewBg.png") no-repeat 0 0;
    background-size: 100% 100%;
  }
  p{ 
    line-height: 40px; 
    color: rgba(0,0,0,0.2); 
  }
  .tables {
    line-height: 40px;
    padding-left: 10px;
  }
  .el-header {
   color:#fff; background: rgba(0,0,0,0.1);
  }
  .el-header .el-dropdown{color:#fff;}
</style>
<style scoped>
  
</style>

<script>


  let id = 1000;
  export default {
    name: 'App',
    data() {
      const item = {
        date: '2016-05-02',
        name: '学员1',
        address: '海淀高中'
      };
      return {
        tableData: Array(20).fill(item),
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
            label: '二级 2-1',
            gender_name:'absolute'
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
      },
      
      //提示消息
      open() {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },

    }
  };


</script>
  