<template>
  <auth-layout>
    <template slot="title">LOGIN</template>
    <form method="POST" @submit.prevent="login(form)">
      <div
        v-if="$route.query.newUser === 'true' && !error.message"
        class="alert alert-primary"
      >
        <h5>Registrasi berhasil.</h5>
        Silahkan hubungi Admin untuk mengaktifkan akun anda.
      </div>
      <div v-if="error.message" class="alert alert-danger">
        {{ error.message }}
      </div>
      <div class="form-group">
        <input
          type="text"
          name="email"
          placeholder="Email"
          class="form-control"
          v-model="form.email"
          :class="{ 'is-invalid': error.email }"
        />
        <span class="invalid-feedback" v-if="error.email">{{
          error.email
        }}</span>
      </div>
      <div class="form-group">
        <input
          type="password"
          name="password"
          placeholder="Password"
          class="form-control"
          v-model="form.password"
          :class="{ 'is-invalid': error.password }"
        />
        <span class="invalid-feedback" v-if="error.password">{{
          error.password
        }}</span>
      </div>
      <div class="form-group">
        <button
          class="btn btn-primary btn-block"
          :class="{ loading }"
          :disabled="loading"
        >
          LOGIN
          <span class="spinner"></span>
        </button>
      </div>
    </form>
  </auth-layout>
</template>

<script>
import { AuthService } from '@/common/api.service'
import { saveToken } from '@/common/jwt.service'
import { SET_AUTH } from '@/store/mutation.types'
import { FETCH_SERVER_DATA } from '@/store/action.types'

export default {
  data() {
    return {
      loading: false,
      form: {
        email: '',
        password: ''
      },
      error: {
        email: '',
        password: '',
        message: ''
      }
    }
  },
  methods: {
    async login(form) {
      this.loading = true
      this.error = {
        email: '',
        password: '',
        message: ''
      }
      try {
        const { auth, token } = await AuthService.login(form)
        this.$store.commit(SET_AUTH, auth)
        saveToken(token)
        await this.$store.dispatch(FETCH_SERVER_DATA)
        this.$router.push('/')
      } catch (e) {
        this.error = {
          ...this.error,
          ...this.$errorResponse(e).errors,
          message: this.$errorResponse(e).message
        }
      }
      this.loading = false
    }
  }
}
</script>
