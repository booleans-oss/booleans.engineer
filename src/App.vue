<template>
  <MainLayout>
    <router-view />
  </MainLayout>
</template>

<script>
import { defineComponent } from 'vue'
import MainLayout from './layouts/MainLayout'
import Prism from 'prismjs'

window.Prism = window.Prism || {}
window.Prism.manual = true
Prism.highlightAll()

export default defineComponent({
  components: {
    MainLayout,
  },
})
</script>
