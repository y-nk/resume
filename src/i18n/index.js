import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const set = (i18n, lang) => {
  return import(/* webpackChunkName: "lang-[request]" */ `@/i18n/${lang}/index.js`)
    .then(messages => i18n.setLocaleMessage(lang, messages.default))
}

export default (locale = 'en') => {
  const i18n = new VueI18n({
    locale,
    messages: {},
  })

  i18n.change = lang => set(i18n, lang)
  set(i18n, locale)

  return i18n
}
