<template>
  <div class="container">
    <ArticleHeader v-if="article" :article="article" />
    <Test ref="article" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Test from '../content/test.md'

const article = ref()
</script>

<style src="../styles/pages/article.scss" />
