import Vue from 'vue'
import Router from 'vue-router'
const home = () => import('@/pages/home')
const login = () => import('@/pages/login')
const city = () => import('@/pages/city')
const msite = () => import('@/pages/msite')

// lazyload 懒加载   推迟组件的引入

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/login',
      component: login,
      meta:{
        keepalive: true
      }
    },
    {
      path: '/city/:cityid',     // 动态路由匹配 带参
      component: city
    },
    {
      path: '/msite',
      component: msite
    }
  ]
})
