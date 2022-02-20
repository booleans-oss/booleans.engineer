<template>
  <div class="container">
    <div class="header">
      <nuxt-img src="/assets/images/logo.png" alt="logo" />
    </div>
    <div class="title">
      Hey, I'm <span style="color: #ffb84c">&nbsp;Clement</span>
      <IconIc:baseline-verified
        style="font-size: 15pt; margin-left: 0.5rem; color: #643aea"
      />
    </div>
    <div class="profile-details">
      <ul class="list-inline">
        <li>@booleans-oss</li>
        <li>19 y.o.</li>
        <li>Full Stack Developer</li>
        <li>he/him</li>
      </ul>
    </div>
    <div class="profile-badges">
      <div class="profile-badges-panel">
        <div class="badge sky-blue">
          <IconPh:code-bold class="icon" />
          Fullstack Developer
        </div>
        <div class="badge pink">
          <IconIc:baseline-school class="icon" />
          Self-Taught
        </div>
        <div class="badge lime-green">
          <IconMdi:book-open-page-variant class="icon" />
          Student
        </div>
        <div class="badge orange">
          <IconMdi:bag-personal class="icon" />
          Freelancer
        </div>
        <div class="badge yellow">
          <IconMdi:palette class="icon" />
          Visual Design
        </div>
        <div class="badge green">
          <IconPh:terminal-bold class="icon" />
          Developer Experience
        </div>
        <div class="badge red">
          <IconMdi:account-group class="icon" />
          Leader
        </div>
        <div class="badge pale-blue">
          <IconMdi:coffee class="icon" />
          Mentor
        </div>
        <div class="badge purple">
          <IconMdi:microsoft-azure-devops class="icon" />
          DevOps Engineer
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
          Open Source Contributor
        </div>
        <div v-if="showExtraTags" class="badge sky-blue">
          <IconMdi:emoticon-tongue class="icon" />
          /> Memer
        </div>
        <div v-if="showExtraTags" class="badge dark-purple">
          <IconMdi:format-paint class="icon" />
          /> UI/UX Designer
        </div>
        <div v-if="showExtraTags" class="badge pink">
          <IconMdi:piano class="icon" />
          /> Pianist
        </div>
        <div v-if="showExtraTags" class="badge purple">
          <IconMdi:map-outline class="icon" /> Remote Worker
        </div>
        <div v-if="showExtraTags" class="badge sky-blue">
          <IconMdi:chess-king class="icon" />
          Chess Player
        </div>
        <div v-if="showExtraTags" class="badge yellow">
          <IconMdi:apple class="icon" />
          OS X User
        </div>
        <div v-if="showExtraTags" class="badge sky-blue">
          <IconMdi:microsoft-visual-studio-code class="icon" />
          Visual Studio Code User
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
          Show less
        </div>
      </div>
    </div>
    <div class="profile-description">
      <p>Hello there!</p>
      <p>
        I am a self-taught fullstack developer who is always looking for
        knowledge. I started coding in 2017 but I really got into it during the
        first lockdown (<em>thanks covid for that!</em>). Since then, I've been
        climbing the learning curve to the role of fullstack developer.
      </p>
      <p>
        I'm currently freelancing as a fullstack developer, offering my
        services. But I am still learning on the side: at the moment, I'm
        mastering Kubernetes and Docker to finish the road to DevOps Engineering
        (<em>it's a long road though</em>).
      </p>
      <p>
        <IconMdi:emoticon-lol
          class="icon"
          style="font-size: 12px; margin-right: 0.6rem"
        />
        love memes so feel free to send me memes and jokes. I believed strong
        friendship can only start with a good meme.
      </p>
      <p>
        <IconIc:twotone-waving-hand
          style="font-size: 12px; margin-right: 0.6rem"
        />
        I'm open to <span class="blue">Jobs</span>,
        <span class="orange">Interships</span>,
        <span class="yellow">Tutoring</span>,
        <span class="purple">Live Streaming</span>,
        <span class="green">Content Creation</span> and
        <span class="red">Open Source Contribution</span>.
      </p>
    </div>
    <div class="socials">
      <a href="https://twitter.com/BooleansO" target="_blank"
        ><IconMdi:twitter
      /></a>
      <a href="https://github.com/booleans-oss" target="_blank"
        ><IconMdi:github
      /></a>
      <a href="https://booleans.engineer" target="_blank"
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
