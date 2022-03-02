import './styles/globals.scss'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import ENLocales from './locales/en'
import IndexView from './pages/index.vue'
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
