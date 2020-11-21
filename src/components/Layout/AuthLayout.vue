<template>
  <div class="auth-layout">
    <div class="main-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-8 mx-auto">
            <div class="card card-body auth-card shadow-lg">
              <div class="row mb-3">
                <div class="col-6">
                  <router-link
                    :to="{ name: 'Register' }"
                    active-class="active"
                    class="btn btn-primary btn-block btn-nav"
                    >Daftar</router-link
                  >
                </div>
                <div class="col-6">
                  <router-link
                    :to="{ name: 'Login' }"
                    active-class="active"
                    class="btn btn-primary btn-block btn-nav"
                    >Login</router-link
                  >
                </div>
              </div>
              <div class="page-title mb-3">
                <slot name="title">LOGIN</slot>
              </div>
              <slot />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.auth-layout {
  display: flex;
  width: 100%;
  height: 100%;

  .main-wrapper {
    margin: 0;
    padding: 15vh 0 3vh;
    width: 100%;
  }

  .page-title {
    padding-top: $spacer;
    display: block;
    text-align: center;
    font-size: 40px;
    color: $gray-200;
    font-weight: $font-weight-light;
    letter-spacing: 2px;
  }
}

.card.card-body.auth-card {
  background-color: $gray-800;

  .btn-nav {
    text-transform: uppercase;
    letter-spacing: 1px;
    border: none;

    &.active {
      background-color: rgba($primary, 0.3) !important;
      cursor: default;
    }
  }
}
</style>
