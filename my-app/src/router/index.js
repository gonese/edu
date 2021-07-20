import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Login from '@/components/pages/login'
import Register from '@/components/pages/register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path:"/login",
      component: Login
    },
    {
      path:"/register",
      component: Register
    }
  ]
})
