import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import Plugins from '@/Plugins'
import ApiService from '@/common/api.service'
import { CHECK_AUTH } from '@/store/action.types'

ApiService.init()

Vue.use(Plugins)

Vue.config.productionTip = false

const app = async () => {
  try {
    await store.dispatch(CHECK_AUTH)
  } catch (e) {
    console.log(e)
  }
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}

app()
