<template>
  <div class="app-frame"><slot /></div>
</template>
<style lang="scss">
.app-frame {
  height: calc(100vh - 30px);
  overflow-y: auto;
  background-color: $gray-900;
}
</style>
