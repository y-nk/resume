import { sync } from 'vuex-router-sync'

import Router from '@/router'
import Store from '@/store'
import I18n from '@/i18n'


import main from '@/app'

const router = Router()
const store = Store()
const i18n = I18n()

sync(store, router)

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

const app = main(router, store, i18n)
router.onReady(() => app.$mount('#csr'))
