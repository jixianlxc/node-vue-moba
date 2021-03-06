import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import http from './http'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$http = http

Vue.mixin({
  computed:{
    uploadUrl(){
      return this.$http.defaults.baseURL + '/upload'
    }
  },
  methods:{
    getAuthHeader(){
      return{
        Authorization:`Bearer ${localStorage.token || ''}`
      } 
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')