<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <!--侧边栏-->
      <el-aside width="200px" >
        <el-row class="tac" >
          <el-col :span="12">
            <el-menu
              router
              v-for="(user,i) in listObj"
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>{{user.name}}</span>
                </template>
                  <el-menu-item :index="user.path" >{{user.path}}</el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>
<style>
  .el-col-12 {
    width: 100%;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>

<script>
  export default {
    data() {
      return {
        isCollapse: true,
        listObj:[
        {id:1, name:'zs1',path:'/test'},
        {id:2, name:'zs2',path:'/test1'},
        {id:3, name:'zs3',path:'/test2'},
        {id:4, name:'zs4',path:'/test3'},
        {id:5, name:'zs5',path:'/test'},
        {id:6, name:'zs6',path:'/test'},
      ]
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
