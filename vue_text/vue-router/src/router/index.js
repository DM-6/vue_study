import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Params from '@/components/params'
import Hi1 from '@/components/hi1'
import Error from '@/components/error'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/params/:newsId(\\d+)/:newsTitle',
      component: Params
    },{
      path: '/goHome',
      redirect: '/'
    },{
      path: '/goParams/:newsId(\\d+)/:newsTitle',
      redirect: '/params/:newsId(\\d+)/:newsTitle'
    },{
      path: '/hi1',
      component: Hi1,
      alias: '/dm'
    },{
      path: '*',
      component: Error
    }
  ]
})
