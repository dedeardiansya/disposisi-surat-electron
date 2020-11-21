<template>
  <div class="app-header">
    <span class="title">Pengelolaan Persuratan</span>
    <div class="actions">
      <button class="btn btn-sm" @click="minimize">
        <i class="icon wb-minus"></i>
      </button>
      <button class="btn btn-sm" @click="maximize">
        <i class="icon" :class="isMaximized ? 'wb-contract' : 'wb-expand'"></i>
      </button>
      <button class="btn btn-sm btn-close" @click="close">
        <i class="icon wb-close"></i>
      </button>
    </div>
  </div>
</template>
<script>
import { remote } from 'electron'
export default {
  data() {
    return {
      isMaximized: remote.getCurrentWindow().isMaximized()
    }
  },
  methods: {
    maximize() {
      const win = remote.getCurrentWindow()
      win.isMaximized() ? win.unmaximize() : win.maximize()
      this.isMaximized = win.isMaximized()
    },
    minimize() {
      const win = remote.getCurrentWindow()
      win.minimize()
      this.isMaximized = win.isMaximized()
    },
    close() {
      const win = remote.getCurrentWindow()
      win.close()
    }
  }
}
</script>
<style lang="scss">
.app-header {
  display: flex;
  height: 30px;
  background-color: darken($gray-900, 5%);
  -webkit-app-region: drag;
  .title {
    display: block;
    padding: 0 8px;
    line-height: 30px;
    font-size: 13px;
    color: $gray-100;
    font-weight: 400;
  }
  .actions {
    display: flex;
    margin-left: auto;
    .btn {
      -webkit-app-region: no-drag;
      display: block;
      width: 30px;
      height: 30px;
      text-align: center;
      padding: 0;
      font-size: 10px;
      line-height: 30px;
      border-radius: 0;
      border: none;
      background-color: darken($gray-900, 5%);
      color: $gray-300;

      &.btn-close {
        color: $danger;
      }

      &:hover {
        background-color: $gray-800;
      }
    }
  }
}
</style>
