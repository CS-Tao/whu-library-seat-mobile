import Vue from 'vue'
import store from '@/nedb'
import { Message } from 'element-ui'

Vue.cordova.plugin.http.setDataSerializer('utf8')
Vue.cordova.plugin.http.setHeader('*', 'Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
Vue.cordova.plugin.http.setHeader('*', 'User-Agent', '')
Vue.cordova.plugin.http.setHeader('*', 'Accept-Encoding', '')
Vue.cordova.plugin.http.setHeader('*', 'Accept-Charset', '')

const baseURL = store.get('baseUrl', 'https://seat.lib.whu.edu.cn:8443')

const service = (options) => {
  var sendOptions = {
    method: options.method,
    timeout: 5,
    headers: options.headers ? options.headers : null,
    params: options.params ? options.params : null,
    data: options.data ? options.data : null
  }
  for (var key in sendOptions.params) {
    sendOptions.params[key] = options.params[key].toString()
  }
  sendOptions.data = Object(sendOptions.data)
  var url = baseURL + options.url
  return new Promise((resolve, reject) => {
    Vue.cordova.plugin.http.sendRequest(url, sendOptions, (response) => {
      try {
        response.data = JSON.parse(response.data)
        resolve(response)
      } catch (error) {
        reject(error)
      }
    }, (response) => {
      Message({
        message: response.error,
        type: 'error',
        duration: 3000,
        showClose: true
      })
      var error = {
        message: response.error
      }
      reject(error)
    })
  })
}

export default service
