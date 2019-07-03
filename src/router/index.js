import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/main'
import Login from '@/view/account/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        title: '首页'
      },
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: 'Login - 登录'
      },
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      meta: {
        title: 'Register - 注册'
      },
      component: () => import('@/view/account/register.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      meta: {
        title: 'emood 中心'
      },
      component: () => import('@/view/cart.vue')
    },
  ]
})
