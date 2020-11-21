<template>
  <app-layout>
    <template slot="title">PENGGUNA</template>
    <div class="container-fluid">
      <div class="row">
        <div
          class="col-lg-3 col-md-4 col-sm-6 d-flex"
          v-for="user in users"
          :key="user.id"
        >
          <user-card :user="user" class=" w-100" />
        </div>
      </div>
    </div>
  </app-layout>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['users'])
  }
}
</script>
