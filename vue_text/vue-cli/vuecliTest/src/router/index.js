import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'

Vue.use(Router)   //  全局使用router 

export default new Router({     // 接口 new了一个router
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hi',
      component: Hi,
      children: [
        {
          path: '/',
          name: 'Hi',
          component: Hi
        },
        {
          path: 'hi1',
          name: 'Hi1',
          component: Hi1
        },
        {
          path: 'hi2',
          name: 'Hi2',
          component: Hi2
        }
      ]
    }
  ]
})
