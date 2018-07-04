// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import ElementUI from 'element-ui'
// // webpack 让CSS也可以像js一样被引入，让一切静态资源皆可引入
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)
import App from './App'
// import './mock'
import store from './store'
import { currency } from './currency'

Vue.config.productionTip = false

Vue.filter('currency', currency);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,   // store模块 数据存储模块
  components: { App },
  template: '<App/>'
})
