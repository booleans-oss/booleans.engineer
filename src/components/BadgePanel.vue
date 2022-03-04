<template>
  <div class="profile-badges-panel">
    <div class="badge sky-blue">
      <IconPh:code-bold class="icon" />
      {{ $t('index.badges.fullstack') }}
    </div>
    <div class="badge pink">
      <IconIc:baseline-school class="icon" />
      {{ $t('index.badges["self-taught"]') }}
    </div>
    <div class="badge lime-green">
      <IconMdi:book-open-page-variant class="icon" />
      {{ $t('index.badges.student') }}
    </div>
    <div class="badge orange">
      <IconMdi:bag-personal class="icon" />
      {{ $t('index.badges.freelancer') }}
    </div>
    <div class="badge yellow">
      <IconMdi:palette class="icon" />
      {{ $t('index.badges.design') }}
    </div>
    <div class="badge green">
      <IconPh:terminal-bold class="icon" />
      {{ $t('index.badges["dev-experience"]') }}
    </div>
    <div class="badge red">
      <IconMdi:account-group class="icon" />
      {{ $t('index.badges.leader') }}
    </div>
    <div class="badge pale-blue">
      <IconMdi:coffee class="icon" />
      {{ $t('index.badges.mentor') }}
    </div>
    <div class="badge purple">
      <IconMdi:microsoft-azure-devops class="icon" />
      {{ $t('index.badges.devops') }}
    </div>

    <div
      v-if="!showExtraTags"
      class="badge"
      @click="showExtraTags = !showExtraTags"
    >
      +17
    </div>
    <div v-if="showExtraTags" class="badge orange">
      <IconMdi:lock-open-check class="icon" />
      {{ $t('index.badges["open-source"]') }}
    </div>
    <div v-if="showExtraTags" class="badge sky-blue">
      <IconMdi:emoticon-tongue class="icon" />
      {{ $t('index.badges.memer') }}
    </div>
    <div v-if="showExtraTags" class="badge dark-purple">
      <IconMdi:format-paint class="icon" />
      {{ $t('index.badges["ui-ux"]') }}
    </div>
    <div v-if="showExtraTags" class="badge pink">
      <IconMdi:piano class="icon" />
      {{ $t('index.badges.pianiste') }}
    </div>
    <div v-if="showExtraTags" class="badge purple">
      <IconMdi:map-outline class="icon" /> {{ $t('index.badges.remote') }}
    </div>
    <div v-if="showExtraTags" class="badge sky-blue">
      <IconMdi:chess-king class="icon" />
      {{ $t('index.badges.chess') }}
    </div>
    <div v-if="showExtraTags" class="badge yellow">
      <IconMdi:apple class="icon" />
      {{ $t('index.badges["os-x"]') }}
    </div>
    <div v-if="showExtraTags" class="badge sky-blue">
      <IconMdi:microsoft-visual-studio-code class="icon" />
      {{ $t('index.badges.vsc') }}
    </div>
    <div v-if="showExtraTags" class="badge lime-green">
      <IconMdi:nodejs class="icon" />
      Node.js
    </div>
    <div v-if="showExtraTags" class="badge pale-blue">
      <IconMdi:react class="icon" />
      React
    </div>
    <div v-if="showExtraTags" class="badge lime-green">
      <IconMdi:vuejs class="icon" />
      Vue.js
    </div>
    <div v-if="showExtraTags" class="badge orange">
      <IconVscode-Icons:file-type-svelte class="icon" />
      Svelte
    </div>
    <div v-if="showExtraTags" class="badge lime-green">
      <IconMdi:nuxt class="icon" />
      Nuxt
    </div>
    <div v-if="showExtraTags" class="badge lime-green">
      <IconVscode-Icons:file-type-mongo class="icon" />
      MongoDB
    </div>
    <div v-if="showExtraTags" class="badge sky-blue">
      <IconVscode-Icons:file-type-docker class="icon" />
      Docker
    </div>
    <div v-if="showExtraTags" class="badge pale-blue">
      <IconFile-Icons:kubernetes class="icon" />
      Kubernetes
    </div>
    <div
      v-if="showExtraTags"
      class="badge"
      @click="showExtraTags = !showExtraTags"
    >
      {{ $t('index.badges.less') }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => {
    return {
      showExtraTags: false,
    }
  },
})
</script>
