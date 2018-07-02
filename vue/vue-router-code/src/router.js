import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Foo from '@/views/Foo'
// Vue 是一个MVVM 框架
// 生态 ， VueRouter Vuex ElementUI Axios
Vue.use(VueRouter);

// 路由大管家    管理路由映射
const router = new VueRouter({       // 实例化VueRouter
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/foo',
        component: Foo
      }
    ]
  })

export default router