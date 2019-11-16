<template>
    <div id="ergouzi">
      <div class="block">
        <el-timeline >
          <el-timeline-item v-for="(item,index) in dataList" :key="index"
                            :timestamp='item.time'
                            :icon="icon"
                            :type="type"
                            :color="color"
                            :size="size"
                            placement="top">
            <el-card>
              <h4>{{item.name}}</h4>
              <p>{{item.desc}}</p>
              <p>{{item.author}} 提交于 {{item.time}}</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
</template>

<script>
    export default {
        name: "articles",
      data(){
        return{
          msg: 'name',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more',
          color: 'blue',
          num: null,
          dataList: [

          ]
        }
      },
      created() {
        this.getData()
      },
      methods:{
        async change(max, min) {
          this.color = `#${Math.ceil(Math.random() * (max - min) + min)}`
        },
        async getData(){
          this.change(255,0)
          let rdata =  await this.$axios.get('/api/admin/getTime')
          this.dataList = rdata.data
          this.dataList.map((item,index)=>{
            //this.isAdmin = item.isAdmin
            item.time = item.time.slice(0,10) + ' ' + item.time.slice(11,19)
            console.log(item.time);
          })
        }
      }
    }
</script>

<style scoped>
  #ergouzi{
    width: 100%;
    height: 100%;
  }
  #ergouzi .block{
    margin: 20px auto;
    padding: 10px;
    background-color: #fff;
    width: 60%;
    border: 1px solid #DEE3EB;
  }

</style>
