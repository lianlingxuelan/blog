<template>
  <div id="journahome">
    <div class="nav">
      <el-table
        :data="dataList"
        border
        style="width: 100%">
        <el-table-column
          fixed
          prop="time"
          label="日期"
          >
        </el-table-column>
        <el-table-column
          prop="username"
          label="用户名"
          >
        </el-table-column>
        <el-table-column
          prop="password"
          label="密码"
         >
        </el-table-column>
        <el-table-column
          prop="brower"
          label="登录浏览器"
          >
        </el-table-column>
        <el-table-column
          prop="adress"
          label="登录城市"
        >
        </el-table-column>
        <el-table-column
          prop="ip"
          label="ip地址"
         >
        </el-table-column>
        <el-table-column
          label="是否管理员"
         >
          <el-switch
            v-model="isAdmin"
          >
          </el-switch>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "journahome",
    data(){
      return{
        dataList:[],
        isAdmin: false,
        msg: 'Journahome',
      }
    },
    created(){
      this.getData()
    },
    methods: {
      async getData(){
        let parmas = await this.$axios.get('/api/logs');
        console.log(parmas);
        this.dataList = parmas.data
        this.dataList.map((item,index)=>{
          //this.isAdmin = item.isAdmin
          item.time = item.time.slice(0,10) + ' ' + item.time.slice(11,19)
          console.log(item.time);
        })
      },
      handleClick(row) {
        console.log(row);
      },

    },
  }
</script>

<style scoped>
  #journahome{
    width: 100%;
    height: 100%;
    background: rgba(238,238,238);
  }
</style>
