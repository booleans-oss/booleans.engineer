<template>
  <div>
    <NavbarHeader />
    <div class="frame"></div>
    <div class="main">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavbarHeader from '../components/NavbarHeader.vue'

export default defineComponent({
  name: 'MainLayout',
  components: {
    NavbarHeader,
  },
})
</script>
