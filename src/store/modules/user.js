import { SET_USER, UPDATE_USER } from '../mutation.types'

const state = {
  users: []
}

const getters = {
  users(state) {
    return state.users
  }
}

const actions = {}

const mutations = {
  [SET_USER](state, users) {
    state.users = users
  },
  [UPDATE_USER](state, user) {
    const users = []
    state.users.forEach(el => {
      if (el.id === user.id) users.push(user)
      else users.push(el)
    })
    state.users = users
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
