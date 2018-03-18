import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    maxId: 4,
    board: {
      list: [
        {
          id: 1,
          finished: false,
          text: '測試測試測試1'
        },
        {
          id: 2,
          finished: false,
          text: '測試測試測試2'
        },
        {
          id: 3,
          finished: true,
          text: '測試測試測試3'
        }
      ]
    }
  },

  actions: {},

  mutations: {
    incrId (state) {
      state.maxId++
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
