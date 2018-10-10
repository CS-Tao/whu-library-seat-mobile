import axios from 'axios'
import urls from './urls'

var service = axios.create({
  baseURL: 'https://raw.githubusercontent.com/CS-Tao/whu-library-seat',
  timeout: 8000,
  withCredentials: true
})

export default {
  // 用户验证
  validateUser: () => {
    return service({
      url: urls.gitcontents.validateUser.url(),
      method: urls.gitcontents.validateUser.method,
      params: {
        time: new Date()
      }
    })
  },
  // 公告
  announce: () => {
    return service({
      url: urls.gitcontents.announce.url(),
      method: urls.gitcontents.announce.method,
      params: {
        time: new Date()
      }
    })
  },
  // 移动端检查更新
  checkUpdateMobile: () => {
    return service({
      url: urls.gitcontents.checkUpdateMobile.url(),
      method: urls.gitcontents.checkUpdateMobile.method,
      params: {
        time: new Date()
      }
    })
  }
}
