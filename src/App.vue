<template>
  <div class="app">
    <app-header />
    <app-loading v-if="$store.state.loading"></app-loading>
    <app-frame v-else>
      <router-view />
    </app-frame>
  </div>
</template>

<style lang="scss">
.app {
  position: relative;
  height: 100vh;
  max-height: 100vh;
  width: 100vw;
  max-width: 100vw;
  overflow: hidden;

  * {
    user-select: none;
  }
}
</style>
