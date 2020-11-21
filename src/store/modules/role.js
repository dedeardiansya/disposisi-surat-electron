import { SET_ROLE } from '../mutation.types'

const state = {
  roles: []
}

const getters = {
  roles(state) {
    return state.roles
  }
}

const actions = {}

const mutations = {
  [SET_ROLE](state, roles) {
    state.roles = roles
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
