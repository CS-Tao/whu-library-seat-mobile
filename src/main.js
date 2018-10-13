import Vue from 'vue'
import axios from 'axios'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'
import router from './router'
import store from './store'

import packageInfo from '../package.json'

// import './api/mock'

Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(ElementUI, { size: 'small', zIndex: 3000 })

Vue.openLink = (url) => {
  window.open(url)
}
Vue.prototype.$openLink = Vue.openLink

Vue.prototype.$exitApp = () => {
  navigator.app.exitApp()
}

Vue.appVersion = packageInfo.version
Vue.prototype.$appVersion = Vue.appVersion

// 双击退出程序
var beginDate = null
document.addEventListener('backbutton', () => {
  const delay = 2000
  var endDate = new Date().getTime()
  if (beginDate !== null && endDate - beginDate < delay) {
    beginDate = endDate
    navigator.app.exitApp()
  } else {
    beginDate = new Date().getTime()
    ElementUI.Message({
      type: 'info',
      duration: delay,
      message: '再次点击退出程序'
    })
  }
}, false)

// 加载 Vue 实例
document.addEventListener('deviceready', function () {
  new Vue({
    components: { App },
    router,
    store,
    template: '<App/>'
  }).$mount('#app')
  window.navigator.splashscreen.hide()
}, false)
