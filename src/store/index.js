import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    maxId: 1,
    filter: false,
    board: {
      list: []
    }
  },

  actions: {},

  mutations: {
    incrId (state) {
      state.maxId++
    },
    filter (state, value) {
      state.filter = value
    },
    updateList (state, payload) {
      Vue.set(state.board, payload.group, payload.value)
    },
    delListItem (state, payload) {
      let list = state.board[payload.group].slice()
      list.splice(payload.index, 1)
      Vue.set(state.board, payload.group, list)
    },
    changeItem (state, payload) {
      let list = state.board[payload.group].slice()
      list[payload.index] = payload.value
      Vue.set(state.board, payload.group, list)
    },
    addItem (state, payload) {
      let list = state.board[payload.group].slice()
      list.push(payload.value)
      Vue.set(state.board, payload.group, list)
    }
  }
})
