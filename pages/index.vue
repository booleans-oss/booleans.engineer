<template>
  <div class="container">
    <div class="header">
      <nuxt-img src="/assets/images/logo.png" alt="logo" />
    </div>
    <div class="title">
      {{ $t('index.header.title') }}
      <span style="color: #ffb84c">&nbsp;Clement</span>
      <IconIc:baseline-verified
        style="font-size: 15pt; margin-left: 0.5rem; color: #643aea"
      />
    </div>
    <div class="profile-details">
      <ul class="list-inline">
        <li>@booleans-oss</li>
        <li>{{ $t('index.header.age') }}</li>
        <li>{{ $t('index.header.job') }}</li>
        <li>{{ $t('index.header.pronouns') }}</li>
      </ul>
    </div>
    <div class="profile-badges">
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
    </div>
    <div class="profile-description">
      <p>{{ $t('index.about.title') }}</p>
      <p v-html="$t('index.about.first')"></p>
      <p v-html="$t('index.about.second')"></p>
      <p>
        <IconMdi:emoticon-lol
          class="icon"
          style="font-size: 12px; margin-right: 0.6rem"
        />
        {{ $t('index.about.third') }}
      </p>
      <p>
        <IconIc:twotone-waving-hand
          style="font-size: 12px; margin-right: 0.6rem"
        />
        {{ $t('index.about.fourth') }}
        <span class="blue">{{ $t('index.about.links.jobs') }} </span>,
        <span class="orange">{{ $t('index.about.links.internships') }} </span>,
        <span class="yellow">{{ $t('index.about.links.tutoring') }} </span>,
        <span class="purple">{{ $t('index.about.links.live') }}</span
        >, <span class="green">{{ $t('index.about.links.content') }}</span>
        {{ $t('separator') }}
        <span class="red">{{ $t('index.about.links["open-source"]') }}</span
        >.
      </p>
    </div>
    <div class="socials">
      <a
        href="https://twitter.com/BooleansO"
        target="_blank"
        rel="noopener noreferrer"
        ><IconMdi:twitter
      /></a>
      <a
        href="https://github.com/booleans-oss"
        target="_blank"
        rel="noopener noreferrer"
        ><IconMdi:github
      /></a>
      <a
        href="https://booleans.engineer"
        target="_blank"
        rel="noopener noreferrer"
        ><IconUil:external-link-alt
      /></a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  layout: 'PageLayout',
  data: () => ({
    showExtraTags: false,
  }),
}
</script>

<style scoped lang="scss">
@import '~/assets/styles/pages/index.scss';
</style>
