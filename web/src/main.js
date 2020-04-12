import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './style.scss'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import './assets/iconfont/iconfont.css'

import Card from './components/Card.vue'
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false


Vue.component('m-card',Card)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
