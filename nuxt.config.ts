import { defineNuxtConfig } from 'nuxt3'
import UnpluginComponentsVite from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineNuxtConfig({
  meta: {
    title: 'booleans-oss — Portfolio',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "I realise your dream websites in a few clicks 🚀. I spend time struggling so you don't have to. The magic of web development will help you. I'm a fullstack developer willing to help.",
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://booleans.engineer',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'booleans-oss — Portfolio',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          "I realise your dream websites in a few clicks 🚀. I spend time struggling so you don't have to. The magic of web development will help you. I'm a fullstack developer willing to help.",
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: '/banner.png',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://booleans.engineer',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'booleans-oss — Portfolio',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          "I realise your dream websites in a few clicks 🚀. I spend time struggling so you don't have to. The magic of web development will help you. I'm a fullstack developer willing to help.",
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/banner.png',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['@/assets/styles/globals.scss', '@/assets/styles/reset.min.scss'],
  plugins: [],

  build: {},

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/svg', 'unplugin-icons/nuxt'],

  components: true,

  vite: {
    plugins: [
      UnpluginComponentsVite({
        dts: true,
        resolvers: [
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
      }),
    ],
  },
})
