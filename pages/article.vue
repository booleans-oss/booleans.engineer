<template>
  <div class="container">
    <article>
      <h1 class="title">{{ page.title }}</h1>
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

<style scoped lang="scss">
@import '~/assets/styles/markdown.scss';
</style>
