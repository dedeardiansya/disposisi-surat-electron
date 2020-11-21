import { CHECK_AUTH, LOGOUT, FETCH_SERVER_DATA } from '../action.types'
import { SET_AUTH, PURGE_AUTH } from '../mutation.types'
import { AuthService } from '@/common/api.service'
import { getToken, destroyToken } from '@/common/jwt.service'

const state = {
  user: null
}

const getters = {
  isLogin(state) {
    return !!state.user
  },
  user(state) {
    return state.user
  },
  canManageUser(state) {
    if (!state.user) {
      return false
    }
    return (
      state.user.role === 'Super Admin' || state.user.role === 'Administrator'
    )
  }
}

const actions = {
  [CHECK_AUTH]({ commit, dispatch }) {
    if (getToken()) {
      return AuthService.checkAuth().then(auth => {
        commit(SET_AUTH, auth)
        dispatch(FETCH_SERVER_DATA)
      })
    } else {
      commit(PURGE_AUTH)
    }
  },
  [LOGOUT]({ commit }) {
    commit(PURGE_AUTH)
  }
}

const mutations = {
  [SET_AUTH](state, auth) {
    state.user = auth
  },
  [PURGE_AUTH](state) {
    state.user = null
    destroyToken()
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
