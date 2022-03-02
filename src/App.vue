<template>
  <MainLayout>
    <router-view />
  </MainLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainLayout from './layouts/MainLayout'

export default defineComponent({
  components: {
    MainLayout,
  },
})
</script>
