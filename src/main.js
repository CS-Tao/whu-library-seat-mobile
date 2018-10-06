import Vue from 'vue'
import axios from 'axios'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import App from './App'
import router from './router'
import store from './store'

import './api/mock'

Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(ElementUI, { size: 'small', zIndex: 3000 })
Vue.use(MintUI)

Vue.openLink = (url) => {
  window.open(url)
}
Vue.prototype.$openLink = Vue.openLink

new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
