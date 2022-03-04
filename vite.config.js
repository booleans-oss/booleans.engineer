import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import anchor from 'markdown-it-anchor'
import Markdown from 'vite-plugin-md'
import Prism from 'markdown-it-prism'

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
    Markdown({
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
        quotes: '""\'\'',
      },
      wrapperComponent: 'post',
      headEnabled: true,
      markdownItSetup(md) {
        md.use(Prism)
        md.use(anchor, {
          permalink: anchor.permalink.linkInsideHeader({
            symbol: '#',
            renderAttrs: () => ({ 'aria-hidden': 'true' }),
          }),
        })
      },
    }),
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
