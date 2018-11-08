var cordova = window.cordova

// 后台模式
cordova.plugins.backgroundMode.setEnabled(true)

cordova.pushLocalNotification = (title, text) => {
  cordova.plugins.notification.local.schedule({
    title,
    text,
    icon: 'static/toast.png'
  })
}

export default cordova
