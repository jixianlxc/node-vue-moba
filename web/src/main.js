import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './style.scss'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './assets/iconfont/iconfont.css'

import Card from './components/Card.vue'
import ListCard from './components/ListCard.vue'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false


Vue.component('m-card',Card)
Vue.component('m-list-card',ListCard)

import axios from 'axios'
Vue.prototype.$http = axios.create({
  baseURL:process.env.VUE_APP_API_URL || '/web/api'
  // baseURL:'http://localhost:3001/web/api'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
