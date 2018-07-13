// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import VueResource from 'vue-resource'
import store from './store'
// import TimeEntries from './components/TimeEntries.vue'
Vue.use(VueResource)
import EventProxy from 'vue-event-proxy'
Vue.use(EventProxy)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
