<template>
    <div id="catalog">
      <div class="content">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="活动时间">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="具体内容">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Catalog",
        data() {
          return {
            form: {
              name: '',
              date1: '',
              date2: '',
              type: [],
              desc: ''
            },
          };
        },
        created() {
          this.getData()
        },
        methods:{
          getData(){
            //console.log(this);
          },
          onSubmit() {
            console.log(this.form.name, this.form.date2,
              this.form.desc);
            this.$axios.post('/api/admin/time',{
              name : this.form.name,
              //time : this.form.date2,
              desc : this.form.desc,
              author : this.$store.state.loginUser,
            }).then(res=>{
              this.$message({  //如果登录成功 弹出成功提示
                message: '添加成功',
                type: 'success'
              });
            })
          }
        }
    }
</script>

<style scoped>
  #catalog .content{
    margin: 20px auto;
    background-color: #fff;
    width: 60%;
    border: 1px solid #DEE3EB;
  }

</style>
