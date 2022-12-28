import { createStore } from 'vuex'
import adduser from './adduser'
import addmanager from './addmanager'

export default createStore({
  modules: {
    adduser,
    addmanager,
  }
})
