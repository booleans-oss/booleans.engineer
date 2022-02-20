import UnpluginComponentsVite from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'booleans-oss — Portfolio',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Yet another web developer making a simple portfolio 🔥.',
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
        content: 'Yet another web developer making a simple portfolio 🔥.',
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
        content: 'Yet another web developer making a simple portfolio 🔥.',
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
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxt/postcss8',
    'nuxt-vite',
    '@nuxtjs/stylelint-module',
    'unplugin-icons/nuxt',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/image',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  vite: {
    ssr: true,
    build: true,
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
}
