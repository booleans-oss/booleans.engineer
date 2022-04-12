<template>
  <div>
  <head>
    <script async src="https://cdn.panelbear.com/analytics.js?site=LiIA6fRzZgA"></script>
    <script>
        window.panelbear = window.panelbear || function() { (window.panelbear.q = window.panelbear.q || []).push(arguments); };
        panelbear('config', {
            site: 'LiIA6fRzZgA',
            spaMode: 'history',
            debug: false,
        });
    </script>
  </head>
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
