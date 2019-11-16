<template>
    <div id="templates">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="登录日志">
          <login-logs></login-logs>
        </el-tab-pane>
        <el-tab-pane label="文章列表" name="first">
          <Catalog></Catalog>
        </el-tab-pane>
        <el-tab-pane label="时间戳" name="second">
          <Articles></Articles>
        </el-tab-pane>
        <el-tab-pane label="内容添加">
          <article-add></article-add>
        </el-tab-pane>
        <el-tab-pane label="内容修改">内容修改</el-tab-pane>
        <el-tab-pane label="详情">
          <Details></Details>
        </el-tab-pane>
        <el-tab-pane label="时间戳更新">
          <time-change></time-change>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
  import Catalog from './base/Catalog'
  import Articles from './base/Articles'
  import TimeChange from './base/TimeChange'
  import Details from './base/Details'
  import ArticleAdd from "./base/ArticleAdd";
  import LoginLogs from "./base/LoginLogs";
    export default {
        name: "templates",
        data() {
          return {
            activeName: 'second'
          };
        },
        components:{
          LoginLogs,
          Catalog,
          Articles,
          Details,
          TimeChange,
          ArticleAdd
        },
        created(){
            this.getData()
        },
        methods: {
          async getData(){
            console.log(this);
          },
          handleClick(tab, event) {
            console.log(tab, event);
          }
        }
    }
</script>

<style scoped>
#templates{
  padding: 10px 20px;
}
#templates .el-tabs__header {

}
/deep/#templates .el-tabs__content{
  background: #fafafa;
}
</style>
