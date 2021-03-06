import Vue from 'vue'
import App from './app/app.vue'
import VueMoment from 'vue-moment'
import moment from 'moment'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ru-RU'
import VeeValidate from 'vee-validate'
import vvParams from './plugins/vee-validate'
import router from './router'
import store from './store'
import './assets/styles/common.scss'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
import statusBtn from "@/components/status/status.vue"
import toggleStatus from "@/components/modals/toggle-status/toggle-status.vue"

Vue.config.productionTip = false
moment.locale('ru')
Vue.component('status-btn', statusBtn)
Vue.component('toggle-status', toggleStatus)

Vue.use(PerfectScrollbar)
Vue.use(VeeValidate, vvParams)
Vue.use(VueMoment, { moment })
Vue.use(ElementUI, { locale })

new Vue({
  router, 
  store,
  render: h => h(App),
}).$mount('#app')
