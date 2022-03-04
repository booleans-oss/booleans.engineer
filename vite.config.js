import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Markdown from 'vite-plugin-md'

const path = require('path')

export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Components({
      resolvers: [IconsResolver({ prefix: 'Icon' })],
    }),
    Icons(),
    Markdown(),
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
