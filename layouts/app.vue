<template>
  <div class="app-layout">
    <app-header />
    <nuxt />
  </div>
</template>
<script>
import AppHeader from '~/components/layouts/AppHeader'
export default {
  components: {
    AppHeader
  }
}
</script>
