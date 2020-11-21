import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import JwtService from '@/common/jwt.service'
import { API_URL } from '@/common/config'

const ApiService = {
  init() {
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = API_URL
  },

  setToken() {
    Vue.axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${JwtService.getToken()}`
  },

  query(resource, params) {
    return Vue.axios.get(resource, params)
  },

  get(resource, slug = '') {
    return Vue.axios.get(`${resource}/${slug}`)
  },

  post(resource, params) {
    return Vue.axios.post(`${resource}`, params)
  },

  update(resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params)
  },

  put(resource, params) {
    return Vue.axios.put(`${resource}`, params)
  },

  delete(resource) {
    return Vue.axios.delete(resource)
  }
}

export default ApiService

export const AuthService = {
  register(form) {
    return ApiService.post('/register', form)
  },
  login(form) {
    return ApiService.post('/login', form).then(res => res.data)
  },
  checkAuth() {
    ApiService.setToken()
    return ApiService.get('/auth').then(res => res.data)
  },
  update(form) {
    ApiService.setToken()
    form._method = 'PUT'
    return ApiService.post('/auth', form).then(res => res.data)
  }
}

export const InitService = {
  fetch() {
    ApiService.setToken()
    return ApiService.get('/init').then(res => res.data)
  }
}

export const UserService = {
  updateRole(id, form) {
    ApiService.setToken()
    return ApiService.put('/user/' + id, form).then(res => res.data)
  }
}

export const LetterService = {
  store(form) {
    ApiService.setToken()
    return ApiService.post('letter', form).then(res => res.data)
  },
  update(id, form) {
    ApiService.setToken()
    return ApiService.post('letter/' + id, form).then(res => res.data)
  },
  destroy(id) {
    ApiService.setToken()
    return ApiService.delete('letter/' + id)
  }
}
