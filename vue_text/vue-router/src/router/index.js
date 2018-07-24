import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Params from '@/components/params'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: HelloWorld
    },{
      path: '/params/:newsId/:newsTitle',
      component: Params
    }
  ]
})
