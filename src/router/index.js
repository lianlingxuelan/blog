import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from "../views/home/Home";
import Templates from "../views/templates/Templates";
import User from "../views/users/User";
import Login from "../views/api/Login";
import Control from "../views/controll/Control";
import Content from "../views/home/base/Content";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    //  redirect:'/login',
      children:[
        {
          path: '/temp',
          component: Templates
        },
        {
          path: '/user',
          component: User
        },
        {
          path: '/control',
          component: Control
        },
        {
          path: '/content',
          component: Content
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
