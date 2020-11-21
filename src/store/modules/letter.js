import {
  SET_LETTER,
  PUSH_LETTER,
  UPDATE_LETTER,
  DELETE_LETTER
} from '../mutation.types'

const state = {
  letters: []
}

const getters = {
  letters(state) {
    return state.letters
  }
}

const actions = {}

const mutations = {
  [SET_LETTER](state, letters) {
    state.letters = letters
  },
  [PUSH_LETTER](state, letter) {
    state.letters = [letter, ...state.letters]
  },
  [UPDATE_LETTER](state, letter) {
    const letters = []
    state.letters.forEach(el => {
      if (el.id === letter.id) letters.push(letter)
      else letters.push(el)
    })
    state.letters = letters
  },
  [DELETE_LETTER](state, id) {
    const letters = []
    state.letters.forEach(el => {
      if (el.id !== id) letters.push(el)
    })
    state.letters = letters
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
