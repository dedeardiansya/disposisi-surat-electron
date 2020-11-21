import { errorMessage, errorResponse } from '@/common/errorHandler'

import { TooltipPlugin } from 'bootstrap-vue'
import { ModalPlugin } from 'bootstrap-vue'
import { BTable } from 'bootstrap-vue'
import { VBModal } from 'bootstrap-vue'
import { BPagination } from 'bootstrap-vue'
import ElFileInput from '@/components/Element/ElFileInput'
import UserCard from '@/components/Element/UserCard'

import AppHeader from '@/components/AppHeader'
import AppFrame from '@/components/AppFrame'
import AppMenu from '@/components/AppMenu'
import AppLoading from '@/components/AppLoading'
import AppLayout from '@/components/Layout/AppLayout'
import AuthLayout from '@/components/Layout/AuthLayout'

import '@/assets/fonts/roboto/style.css'
import '@/assets/fonts/web-icons/style.css'
import '@/assets/scss/app.scss'

export default {
  install(Vue) {
    Vue.prototype.$errorMessage = errorMessage
    Vue.prototype.$errorResponse = errorResponse

    Vue.use(TooltipPlugin)
    Vue.use(ModalPlugin)
    Vue.directive('b-modal', VBModal)
    Vue.component('b-table', BTable)
    Vue.component('b-pagination', BPagination)
    Vue.component('ElFileInput', ElFileInput)
    Vue.component('UserCard', UserCard)

    Vue.component('AppHeader', AppHeader)
    Vue.component('AppFrame', AppFrame)
    Vue.component('AppMenu', AppMenu)
    Vue.component('AppLoading', AppLoading)
    Vue.component('AppLayout', AppLayout)
    Vue.component('AuthLayout', AuthLayout)
  }
}
