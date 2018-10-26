/**
 * Created by saikrishna on 16/10/18.
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import Axios from 'axios'
Axios.defaults.baseURL = 'http://localhost:3000/'
// Axios.defaults.baseURL = 'http://192.168.1.213:3000/'
Axios.defaults.headers = {
  'Content-Type': 'application/json',
  'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMmI0Nzg2NjYwMDU2N2JlOTIxNmNhOSIsImVtYWlsIjoicWFAdGVzdC5jb21wIiwiaWF0IjoxNTM5NzkxMzg3LCJleHAiOjE1NDIzODMzODd9.wzrd2T7MxXyczQkRH2SX9mMuGySqn7X3h8bphNzSIwc'
}
Vue.prototype.$http = Axios
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  },
  // data:{
  //   Bus : new Vue()
  // }
})
