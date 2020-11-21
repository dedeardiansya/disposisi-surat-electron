<template>
  <auth-layout>
    <template slot="title">DAFTAR</template>
    <form method="POST" @submit.prevent="register(form)">
      <div
        v-if="false"
        class="alert alert-danger alert-alt bg-dark text-danger alert-dark"
      >
        error
      </div>
      <div class="form-group">
        <input
          type="text"
          name="name"
          placeholder="Nama"
          class="form-control"
          v-model="form.name"
          :class="{ 'is-invalid': error.name }"
        />
        <span class="invalid-feedback" v-if="error.name">{{ error.name }}</span>
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
          DAFTAR
          <span class="spinner"></span>
        </button>
      </div>
    </form>
  </auth-layout>
</template>

<script>
import { AuthService } from '@/common/api.service'

export default {
  data() {
    return {
      loading: false,
      form: {
        name: '',
        email: '',
        password: ''
      },
      error: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async register(form) {
      this.loading = true
      this.error = {
        name: '',
        email: '',
        password: ''
      }
      try {
        await AuthService.register(form)
        this.$router.push('/login?newUser=true')
      } catch (e) {
        this.error = {
          ...this.error,
          ...this.$errorResponse(e).errors
        }
      }
      this.loading = false
    }
  }
}
</script>
