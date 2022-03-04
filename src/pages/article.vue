<template>
  <div class="container">
    <div class="article-info">
      <h1 v-if="article" class="article-title">
        {{ article.frontmatter.title }}
      </h1>
      <div v-if="article" class="article-description">
        {{ article.frontmatter.title }}
      </div>
      <hr class="separator" />
      <span v-if="article" class="article-date"
        ><IconMdi:clock />{{
          format(new Date(article.frontmatter.date), 'LLL d, yyyy')
        }}
        - {{ article.frontmatter.duration }}</span
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
    <Test ref="article" />
  </div>
</template>

<script setup>
import { format } from 'date-fns'
import Prism from 'prismjs'
import { ref } from 'vue'
import '../styles/highlight.css'
import Test from '../content/test.md'

window.Prism = window.Prism || {}
window.Prism.manual = true
Prism.highlightAll()

const article = ref()
</script>

<style src="../styles/pages/article.scss" />
