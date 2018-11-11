import ElementUI from 'element-ui'
import notifyIcon from 'static/toast.png'
var cordova = window.cordova

cordova.pushLocalNotification = (title, text) => {
  if (cordova.plugins.backgroundMode.isActive()) {
    cordova.plugins.notification.local.schedule({
      title,
      text,
      icon: notifyIcon
    })
  }
}

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

export default cordova
