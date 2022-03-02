import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import vueI18n from '@intlify/vite-plugin-vue-i18n'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [IconsResolver({ prefix: 'Icon' })],
    }),
    Icons(),
  ],
  resolve: {
    extensions: [
      '.mjs',
      '.js',
      '.ts',
      '.jsx',
      '.tsx',
      '.json',
      '.vue',
      '.scss',
    ],
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
