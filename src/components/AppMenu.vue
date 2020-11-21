<template>
  <div class="app-menu">
    <router-link to="/" class="menu-item mt-auto">Home</router-link>
    <router-link
      v-if="$store.getters.canManageUser"
      to="/users"
      class="menu-item"
      >Pengguna</router-link
    >
    <router-link to="/letter/create" class="menu-item">Input Surat</router-link>
    <router-link to="/letter" class="menu-item">Daftar Surat</router-link>
    <router-link to="/edit-profile" class="menu-item">Edit Profile</router-link>
    <a
      href="#"
      @click.prevent="logout"
      class="menu-item my-auto text-danger border-danger"
      >Logout</a
    >
  </div>
</template>

<script>
import { LOGOUT } from '@/store/action.types'
export default {
  methods: {
    logout() {
      this.$store.dispatch(LOGOUT)
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss">
.app-menu {
  display: flex;
  flex-direction: column;
  width: 260px;
  height: 100%;
  background-color: darken($gray-900, 3%);
  overflow-y: auto;

  .menu-item {
    width: 100%;
    display: block;
    padding: ($spacer/2) $spacer;
    margin-bottom: $spacer;
    border-left: 3px solid transparent;
    color: $white;
    font-size: 16px;
    font-weight: 100;

    &:hover,
    &.active {
      border-color: $primary;
      background-color: rgba($primary, 0.1);
    }
  }
}
</style>
