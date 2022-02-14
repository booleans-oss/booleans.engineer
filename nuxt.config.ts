import { defineNuxtConfig } from 'nuxt3'
import UnpluginComponentsVite from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default defineNuxtConfig({
  meta: {
    title: 'Booleans\'s Portfolio',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'A fullstack developer\'s portfolio',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/assets/favicon.ico' }],
  },

  css: [],

  plugins: [],

  build: {},

  buildModules: [
    'nuxt-windicss',
    '@nuxtjs/eslint-module',
    '@nuxtjs/svg',
  ],

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
  windicss: {
    analyze: {
      analysis: {
        interpretUtilities: false,
      },
      server: {
        port: 4000,
        open: false,
      },
    },
    scan: true,
  },
})
