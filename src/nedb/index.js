import Datastore from 'nedb'

var db = new Datastore({ filename: 'whu-library-seat' })

db.loadDatabase(() => {
  // console.log('载入本地数据库失败', err.message)
})

var store = {}

store.get = (key, defaultValue) => {
  return defaultValue
}

store.set = (key, value) => {
}

export default store
