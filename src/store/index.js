import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{ //state 存放所有组件都可以使用的数据
    loginUser:localStorage.getItem('user'),
    userList:[],
    city: []
  },

  //放置同步修改state数据的方法
  mutations:{
    saveLoginUser(state,value){
      state.loginUser = value

      //把登录的用户存储到本地
      localStorage.setItem('user',value)
    },
    saveUserList(state,users){
      state.userList = users
    },
    getCity(state,city){
      state.city = city
    }
  },
  //放置异步修改state数据的方法
  actions:{
    getUserList(cxt){
      return new Promise((resolve,rej)=>{
        this.$axios.get('/api/userlist').then(users=>{
          cxt.commit('saveUserList',users.data)
          resolve()
        })
      })
    }
  },
  getters:{
    newUser:state=>state.userList.filter(user=>user.age<30),
    oldUser:state=>state.userList.filter(user=>user.age>=30)
  }
})
