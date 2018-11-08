import Vue from 'vue'
import axios from 'axios'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import packageInfo from '../package.json'

import './api/mock'

if (window.location.protocol === 'file:' || window.location.port === '3000') {
  var cordovaScript = document.createElement('script')
  cordovaScript.setAttribute('type', 'text/javascript')
  cordovaScript.setAttribute('src', 'cordova.js')
  document.body.appendChild(cordovaScript)
}

Vue.use(ElementUI, { size: 'small', zIndex: 3000 })

Vue.config.productionTip = false

Vue.http = Vue.prototype.$http = axios
Vue.appVersion = Vue.prototype.$appVersion = packageInfo.version
Vue.openLink = Vue.prototype.$openLink = (url) => { window.open(url) }
Vue.exitApp = Vue.prototype.$exitApp = () => { navigator.app.exitApp() }

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
  Vue.cordova = Vue.prototype.$cordova = require('./cordova').default
  new Vue({
    components: { App: require('./App').default },
    router: require('./router').default,
    store: require('./store').default,
    template: '<App/>'
  }).$mount('#app')
}, false)
