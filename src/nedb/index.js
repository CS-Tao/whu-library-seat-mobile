import db from 'storejs'

var store = {}

store.get = (key, defaultValue) => {
  if (db.has(key)) {
    return db.get(key)
  } else {
    return defaultValue
  }
}

store.set = (key, value) => {
  db.set(key, value)
}

store.clear = () => {
  db.clear()
}

export default store
