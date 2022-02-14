import { defineNuxtConfig } from 'nuxt3'
import UnpluginComponentsVite from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineNuxtConfig({
  meta: {
    title: 'booleans-oss | portfolio',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "Hello there, I'm booleans, a fullstack developer interested in all the new web techologies.",
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }],
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
