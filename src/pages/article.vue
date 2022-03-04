<template>
    <div class="container">
       <Test ref="article" /> 
       <div v-if="article">{{ article.frontmatter }}</div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Test from '../content/test.md'

const article = ref();
</script>

<style src="../styles/pages/article.scss"/>
