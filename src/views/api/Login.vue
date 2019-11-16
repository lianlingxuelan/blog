<template>
  <div id="login">
    <div class="lo">


    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <h3>
        <i class="el-icon-star-off"></i>
        <span>用户注册与登录</span>
      </h3>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm2.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
        <el-button @click="resetForm('ruleForm2')">注册</el-button>
      </el-form-item>
    </el-form>
    </div>
    </div>
</template>

<script>

  import * as sysTool from '@/assets/js/systemTool.js'
  export default {
    data() {
      return {
        ip: '1.1.1.1',
        area: '北京市',
        brower: 'chrome',
        os: 'windows7',
        ruleForm2: {
          username:'',
          password: '',
        },
        rules2: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 5, max: 12, message: '长度在 5 到 12 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 5, max: 12, message: '长度在 5 到 12 个字符', trigger: 'blur' }
          ]
        }
      };
    },
    created(){
      this.getData()
    },
    methods: {
      async mydata(result){
        let cityName = result.name
        console.log(cityName);
      },
      getData(){
        this.ip = sessionStorage.getItem('ip')
        this.area = sessionStorage.getItem('area')
        this.brower = sysTool.GetCurrentBrowser()
        this.os = sysTool.GetOs()
        console.log('ip，地区，浏览器，操作系统，：',  this.ip,this.area,this.brower, this.os)
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          //所有的校验规则都成立  则 valid ==> true
          if (valid) {
            //把用户的信息传递到后台  向这个接口/login传递数据
            this.$axios.post('/api/login',{
              username:this.ruleForm2.username,
              password:this.ruleForm2.password,
              ip: this.ip,
              brower: this.brower,
              OS: this.os,
              adress:this.area
            }).then(res=>{
              if(res.data.code){ //如果登录失败 弹出失败提示
                this.$message.error('用户名与密码不匹配');
                return
              }
              this.$message({  //如果登录成功 弹出成功提示
                message: '恭喜你，登录成功',
                type: 'success'
              });

              this.$router.push('/control');

              //要修改store(仓库)中的state数据  必须触发mutations中的对应函数  在函数内部修改state的数据
              this.$store.commit('saveLoginUser',this.ruleForm2.username)
            })
            //alert('submit!');
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].validate((valid) => {
          //所有的校验规则都成立  则 valid ==> true
          if (valid) {
            this.$axios.post('/api/register',{
              username:this.ruleForm2.username,
              password:this.ruleForm2.password,
            }).then(res=>{
              if(res.data.code){ //如果用户已经注册过 则不可注册
                this.$message.error('用户已经注册过 不可注册 ');
                return
              }
              this.$message({  //如果注册成功 弹出成功提示
                message: '恭喜你，注册成功',
                type: 'success'
              });
            })
          }
        })
      },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body{
    background-color: #ccc;
  }
  #login {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 500px;
    height: 250px;
    padding-right: 40px;
    margin: auto;
    box-shadow: 0 0 10px 0 blue;
  }

  #login h3 {
    font-size: 28px;
    text-align: center;
    line-height: 70px;
  }
</style>
