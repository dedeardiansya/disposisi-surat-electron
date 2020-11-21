import Vue from 'vue'
import Vuex from 'vuex'

import { InitService } from '@/common/api.service'
import { FETCH_SERVER_DATA } from './action.types'
import {
  SET_GLOBAL_LOADING,
  SET_LETTER,
  SET_ROLE,
  SET_USER
} from './mutation.types'

import auth from './modules/auth'
import role from './modules/role'
import letter from './modules/letter'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    [SET_GLOBAL_LOADING](state, bool) {
      state.loading = bool
    }
  },
  actions: {
    [FETCH_SERVER_DATA]({ commit }) {
      commit(SET_GLOBAL_LOADING, true)
      // eslint-disable-next-line no-async-promise-executor
      return new Promise(async (resolve, reject) => {
        try {
          const { letters, roles, users } = await InitService.fetch()
          commit(SET_LETTER, letters || [])
          commit(SET_ROLE, roles || [])
          commit(SET_USER, users || [])
          resolve()
        } catch (e) {
          reject(e)
        }
        commit(SET_GLOBAL_LOADING, false)
      })
    }
  },
  modules: {
    auth,
    role,
    letter,
    user
  }
})
