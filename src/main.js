import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import './styles/globals.scss'

import { createI18n } from 'vue-i18n'

import IndexView from './pages/index.vue'
import ENLocales from './locales/en'
import FRLocales from './locales/fr'

const routes = [{ path: '/', component: IndexView }]

const i18n = createI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages: {
    en: ENLocales,
    fr: FRLocales,
  },
})

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).use(i18n).mount('#app')
