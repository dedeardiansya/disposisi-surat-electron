<template>
  <div class="card card-body text-center">
    <p class="text-light lead m-0 text-capitalize">{{ user.name }}</p>
    <p class="text-light small">{{ user.email }}</p>
    <div class="form-group" v-if="role !== 'Super Admin'">
      <label class="d-block text-center">Edit Wewenang Pengguna</label>
      <select name="role" v-model="role" class="form-control">
        <option value="Administrator">Admin</option>
        <option value="Manage Letter">Petugas</option>
        <option value="">Tidak ada</option>
      </select>
      <div v-if="role !== (user.role || '')">
        <button
          class="btn btn-primary mt-3"
          @click.prevent="submit(role)"
          :class="{ loading }"
          :disabled="loading"
        >
          Simpan <span class="spinner"></span>
        </button>
      </div>
    </div>
    <div v-else class="form-group">
      <label class="d-block text-center">Wewenang</label>
      <input type="text" value="Super Admin" class="text-center form-control" />
    </div>
  </div>
</template>

<script>
import { UserService } from '@/common/api.service'
import { UPDATE_USER } from '@/store/mutation.types'
export default {
  props: {
    user: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      role: '',
      loading: false
    }
  },
  methods: {
    async submit(role) {
      this.loading = true
      try {
        const { data } = await UserService.updateRole(this.user.id, { role })
        this.$store.commit(UPDATE_USER, data)
      } catch (e) {
        alert(e.message)
      }
      this.loading = false
    }
  },
  watch: {
    user: {
      deep: true,
      immediate: true,
      handler(val) {
        if (val.role) {
          this.role = val.role || ''
        }
      }
    }
  }
}
</script>
