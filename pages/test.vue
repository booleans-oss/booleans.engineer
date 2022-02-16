<template>
<div class="container">
    <CodeGroup>
        <div class="code-bloc active" label="Yarn" active>
           {{ "yarn \n yarn dev \n yarn build"}} 
        </div>
        <div class="code-bloc" label="NPM">
           {{ "npm install \n npm run dev \n npm run build" }} 
        </div>
    </CodeGroup>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'page',
})
</script>

<script lang="ts">
import hljs from 'highlight.js';

export default {
    mounted() {
        document.querySelectorAll('pre code')
            .forEach((block) => {
                block.innerHTML = hljs.highlight('bash', block.innerHTML).value;
        })
    }
}</script>

<style lang="scss">
@import '~/assets/styles/highlights.scss';
.container {
    width: 100%;
    margin-top: 2rem;
    background-color: rgba(26, 32, 44, 1.00);

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