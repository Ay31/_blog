import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    test: {}
  },
  mutations: {
    loginTest: (state, login) => {
      state.test = login
    }
  },
  actions: {
    loginTest ({ commit }) {
      axios.get(`http://localhost:3000/login`).then((response) => {
        commit(`loginTest`, response.data)
      })
    }
  }
})
