<template>
  <div class="container">
    <code-group>
      <code-block label="Yarn" active>
        ```bash yarn add @jsilva-pt/nuxt-content-theme-blog \```
      </code-block>
      <code-block label="NPM">
        ```bash npm install @jsilva-pt/nuxt-content-theme-blog \```
      </code-block>
    </code-group>
  </div>
</template>

<script>
export default {
  layout: 'PageLayout',
}
</script>

<style lang="scss">
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
