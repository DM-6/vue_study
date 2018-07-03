import Vue from 'vue'
import Router from 'vue-router'
import auth from '@/auth.js'
import About from '@/views/About'
import Dashboard from '@/views/Dashboard'
import Login from '@/views/Login'

Vue.use(Router)

const requireAuth = (to, from, next) => {
  console.log(to, from);
  // 用户（老板）有登录权限？
  if(auth.loggedIn()){     // auth 
    next({
      path: '/login',
      query: {      //查询
        redirect: to.fullPath
      }
    })
  }
  next();
}

export default new Router({     //实例化一个路由
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/baout'      // redirect 
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/dashboard',
      component: Dashboard,
      beforeEnter: requireAuth
      // beforeEnter: (to, from, next) => {}
      // 路由上的钩子函数 to要去的地方 from从哪里来 next接下来怎么办
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
