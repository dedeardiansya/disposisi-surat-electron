<template>
  <app-layout>
    <template slot="title">EDIT PROFILE</template>
    <div class="container-fluid py-4 text-center text-light">
      <h1 class="font-weight-light text-uppercase">
        HALO, {{ $store.getters.user.name }}
      </h1>
      <p class="lead">{{ $store.getters.user.email }}</p>
      <span class="btn btn-dark">{{ $store.getters.user.role }}</span>
    </div>
    <div class="container-fluid">
      <form class="card card-body" method="post" @submit.prevent="submit(form)">
        <div class="form-group">
          <label>Nama</label>
          <input
            type="text"
            class="form-control"
            placeholder="Nama"
            v-model="form.name"
            :class="{ 'is-invalid': error.name }"
          />
          <span class="invalid-feedback" v-if="error.name">{{
            error.name
          }}</span>
        </div>
        <div class="form-group">
          <label>Password baru <small>Optional</small></label>
          <input
            type="password"
            class="form-control"
            placeholder="Password baru"
            v-model="form.new_password"
            :class="{ 'is-invalid': error.new_password }"
          />
          <span class="invalid-feedback" v-if="error.new_password">{{
            error.new_password
          }}</span>
        </div>
        <div class="form-group">
          <label>Password lama <small>Optional</small></label>
          <input
            type="password"
            class="form-control"
            placeholder="Password lama"
            v-model="form.password"
            :class="{ 'is-invalid': error.password }"
          />
          <span class="invalid-feedback" v-if="error.password">{{
            error.password
          }}</span>
        </div>
        <div class="form-group mt-3">
          <div class="alert alert-success" v-if="success">
            {{ success }}
          </div>
          <button
            class="btn btn-primary btn-block"
            :class="{ loading }"
            :disabled="loading"
          >
            Simpan <span class="spinner"></span>
          </button>
        </div>
      </form>
    </div>
  </app-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import { AuthService } from '@/common/api.service'
import { SET_AUTH } from '@/store/mutation.types'

export default {
  data() {
    return {
      loading: false,
      success: '',
      form: {
        name: '',
        password: '',
        new_password: ''
      },
      error: {
        name: '',
        password: '',
        new_password: ''
      }
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    async submit(form) {
      this.loading = true
      this.success = ''
      this.error = {
        name: '',
        password: '',
        new_password: ''
      }
      try {
        const data = await AuthService.update(form)
        this.form = {
          name: data.name,
          password: '',
          new_password: ''
        }
        this.success = 'Profile telah di update.'
        this.$store.commit(SET_AUTH, data)
      } catch (e) {
        this.error = {
          ...this.error,
          ...this.$errorResponse(e).errors
        }
      }
      this.loading = false
    }
  },
  watch: {
    user: {
      deep: true,
      immediate: true,
      handler(val) {
        if (val.name) {
          this.form.name = val.name
        }
      }
    }
  }
}
</script>
