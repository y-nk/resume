import { sync } from 'vuex-router-sync'

import Router from '@/router'
import Store from '@/store'
import I18n from '@/i18n'

import main from '@/app'

export default context => new Promise((resolve, reject) => {
  const router = Router()
  const store = Store()
  const i18n = I18n()

  sync(store, router)
  router.push(context.url)

  router.onReady(() => {
    if (!router.getMatchedComponents().length) {
      reject({ code: 404, message: 'Not found' })
    }

    context.state = store.state
    resolve(main(router, store, i18n))
  },
  err => reject({ code: 500, message: 'Renderer error', err }))
})
