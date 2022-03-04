<template>
  <div class="article-info">
    <h1 v-if="article" class="article-title">
      {{ article.frontmatter.title }}
    </h1>
    <div v-if="article" class="article-description">
      {{ article.frontmatter.title }}
    </div>
    <hr class="separator" />
    <span v-if="article" class="article-date"
      ><IconMdi:clock />{{ formatDate(article.frontmatter.date) }} -
      {{ article.frontmatter.duration }}</span
    >
    <div v-if="article" class="article-tags">
      <span
        v-for="tag in article.frontmatter.tags"
        :key="tag"
        class="article-tag"
      >
        <IconMdi:account-circle />{{ tag }}</span
      >
    </div>
  </div>
</template>

<script>
import { formatDate } from '@/scripts/date'
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate,
  },
}
</script>
