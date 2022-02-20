<template>
  <div class="container">
    <article>
      <h1>{{ page.title }}</h1>
      <nuxt-content :document="page" />
    </article>
  </div>
</template>

<script>
export default {
  layout: 'PageLayout',
  async asyncData({ $content }) {
    const page = await $content('hello').fetch()

    return {
      page,
    }
  },
}
</script>

<style lang="scss">
@import '~/assets/styles/highlights.scss';
.container {
  width: 100%;
  margin-top: 2rem;
  background-color: rgba(26, 32, 44, 1);

  .code-bloc {
    white-space: pre-line;
    font-family: DM Mono;
    font-weight: 300;
    padding: 1rem 2rem;
    display: none;

    &.active {
      display: block;
    }
  }
}
</style>
