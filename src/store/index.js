import Vue from 'vue'
import Vuex from 'vuex'


import auth from "./modules/auth"
import feed from './modules/feed'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    feed
  }
})
