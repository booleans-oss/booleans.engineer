<template>
  <div class="container">
    <ArticleHeader v-if="frontmatter" :article="frontmatter" />
    <component :is="post" ref="article" />
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

export default {
  setup() {
    return {
      article: ref(),
      route: useRoute(),
      post: ref(),
      err: ref(),
      frontmatter: ref(),
      loadgin: ref(true),
    }
  },
  created() {
    watch(
      () => this.route.params.slug,
      () => {
        this.fetchData()
      },
      { immediate: true }
    )
  },
  methods: {
    fetchData() {
      import(`../content/${this.route.params.slug}.md`)
        .then((post) => {
          this.loading = false
          this.post = post.default
          this.frontmatter = post
        })
        .catch((e) => {
          this.loading = false
          if (e) error = e
        })
    },
  },
}
</script>
