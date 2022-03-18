import './styles/markdown.scss'
import './styles/globals.scss'
import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import ArticleView from './pages/article.vue'
import BlogView from './pages/blog.vue'
import ENLocales from './locales/en'
import FRLocales from './locales/fr'
import IndexView from './pages/index.vue'

const head = createHead()

const routes = [
  { path: '/', component: IndexView },
  { path: '/article', component: ArticleView },
  { path: '/posts/:slug', component: BlogView },
]

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: ENLocales,
    fr: FRLocales,
  },
})

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).use(head).use(i18n).mount('#app')
