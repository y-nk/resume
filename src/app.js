import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export default (router, store, i18n) => {
  return new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
  })
}
