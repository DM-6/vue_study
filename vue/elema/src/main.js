// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import store from './store'
import { currency } from './currency'
import './common/stylus/index.styl'
Vue.config.productionTip = false

Vue.filter('currency',currency)
Vue.use(VueResource); // 全局注册
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
