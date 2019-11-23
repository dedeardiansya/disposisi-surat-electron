<template>
  <div class="app-header">
    <div class="container-fluid">
      <div class="header-wrapper">
        <div class="left">
          <router-link to="/" class="header-brand">
            <img src="/img/logo.svg" alt="Logo Sayurta.com" />
          </router-link>
          <div class="header-form-search">
            <form
              :class="formSearchFocus ? 'focus' : ''"
              action="#"
              method="get"
              class="form-search"
            >
              <div class="form-search-wrapper">
                <div class="search-icon-wrapper">
                  <search-icon></search-icon>
                </div>
                <input
                  @click="showAutosuggest = !showAutosuggest"
                  @focus="formSearchFocus = true"
                  @blur="formSearchFocus = false"
                  type="search"
                  class="input-search"
                  placeholder="Apa yang anda cari?"
                  autocomplete="off"
                />
              </div>
              <div v-if="showAutosuggest" class="autosuggest-wrapper">
                <div v-for="i in 10" :key="i" class="autosuggest-option">
                  ini hasil Lorem ipsum {{ i }}
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="right">
          <div class="header-navs">
            <button class="header-nav">
              <chat-icon />
              <div class="tooltip">Pesan</div>
            </button>
            <button class="header-nav">
              <bell-icon />
              <div class="badge">99</div>
              <div class="tooltip">Notifikasi</div>
            </button>
            <button class="header-nav">
              <clipboard-icon />
              <div class="tooltip">Transaksi</div>
            </button>
            <button class="header-nav">
              <cart-icon />
              <div class="tooltip">Keranjang</div>
            </button>
          </div>
          <div v-if="false" class="header-profile">
            <div class="header-avatar header-avatar-text">
              D
            </div>
            <!-- <div class="header-avatar">
              <img
                src="https://s4.bukalapak.com/avt/42364502/thumb/Untitled-1.png"
                alt=""
              />
            </div> -->
          </div>
          <div v-else class="header-auth-navs">
            <router-link to="/" class="header-auth-nav nav-login"
              >Login</router-link
            >
            <router-link to="/" class="header-auth-nav nav-register"
              >Register</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SearchIcon from '~/components/icons/Search'
import ChatIcon from '~/components/icons/Chat'
import BellIcon from '~/components/icons/Bell'
import CartIcon from '~/components/icons/Cart'
import ClipboardIcon from '~/components/icons/Clipboard'
export default {
  components: {
    SearchIcon,
    ChatIcon,
    BellIcon,
    CartIcon,
    ClipboardIcon
  },
  data() {
    return {
      formSearchFocus: false,
      showAutosuggest: false
    }
  }
}
</script>
