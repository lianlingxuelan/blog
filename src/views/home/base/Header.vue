
<template>
  <div id="heade">
    <Menu mode="horizontal" :theme="theme1" active-name="1">
      <MenuItem name="1" to="/content">
        <Icon type="ios-paper" />
        主页
      </MenuItem>
      <MenuItem name="2" to="user">
        <Icon type="ios-people" />
        用户
      </MenuItem>
      <MenuItem name="2" to="/temp">
        <Icon type="ios-people" />
        日志
      </MenuItem>
      <Submenu name="3" >
        <template slot="title">
          <Icon type="ios-stats" />
          主题
        </template>
          <MenuItem name="3-4">
            <RadioGroup v-model="theme1">
              <Radio label="light"></Radio>
              <Radio label="dark"></Radio>
              <Radio label="primary"></Radio>
            </RadioGroup>
          </MenuItem>
      </Submenu>
      <MenuItem name="4" to="/control">
        <Icon type="ios-construct" />
        综合管理
      </MenuItem>
      <MenuItem name="5">
        <Icon type="ios-construct" />
        权限
      </MenuItem>
      <MenuItem name="10" class="login" to="/login">
        <Icon type="ios-construct" />
        注册/登录
      </MenuItem>
    </Menu>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        theme1: 'dark'
      }
    }
  }
</script>

<style scoped>
.login{
  float: right;
}
  #heade{
    /*height: 100px;*/
    /*width: 1200px;*/
    /*!*width: 85%;*!*/
    /*background-color: goldenrod;*/
    /*text-align: center;*/
    /*font-size: 48px;*/
    /*line-height: 100px;*/
    /*margin: 0 auto;*/
  }
</style>
