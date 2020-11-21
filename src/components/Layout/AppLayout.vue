<template>
  <div class="app-layout">
    <app-menu />
    <div class="app-main">
      <div class="app-main__header">
        <h1 class="app-main__header-title">
          <slot name="title">HOME</slot>
        </h1>
        <div class="app-main__header-auth text-capitalize">
          Halo,
          <strong>{{
            $store.getters.user ? $store.getters.user.name : ''
          }}</strong>
        </div>
      </div>
      <div class="scrollable py-3">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.app-layout {
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  .app-main {
    height: 100%;
    width: calc(100vw - 260px);

    &__header {
      height: 50px;
      display: flex;
      background-color: darken($gray-900, 1%);
      padding: 0 $spacer;

      &-title {
        font-size: 20px;
        margin: 0;
        padding: 0;
        margin-right: auto;
        line-height: 50px;
        color: $gray-200;
        font-weight: 300;
      }

      &-auth {
        color: $gray-100;
        line-height: 50px;
      }
    }

    .scrollable {
      height: calc(100% - 50px);
      overflow-y: auto;
    }
  }
}
</style>
