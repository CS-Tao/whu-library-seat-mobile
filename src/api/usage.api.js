import axios from 'axios'
import urls from './urls'
import store from '@/nedb'

var service = axios.create({
  baseURL: 'https://seat-records.cs-tao.cc',
  timeout: 5000,
  withCredentials: true
})

const appVersion = '1.0.0'

export default {
  // 登录状态
  loginState: (account, state, code, message = null) => {
    let usageRecordEnable = store.get('usageRecordEnable', true)
    if (usageRecordEnable) {
      service({
        url: urls.usage.loginState.url(),
        method: urls.usage.loginState.method,
        data: {
          account,
          state,
          code,
          message: message || '',
          version: appVersion,
          time: new Date()
        }
      }).then(() => {}).catch(() => {})
    }
  },
  // 抢座状态
  grabState: (account, state, code, message = null) => {
    let usageRecordEnable = store.get('usageRecordEnable', true)
    if (usageRecordEnable) {
      service({
        url: urls.usage.grabState.url(),
        method: urls.usage.grabState.method,
        data: {
          account,
          state,
          code,
          message: message || '',
          version: appVersion,
          time: new Date()
        }
      }).then(() => {}).catch(() => {})
    }
  }
}
