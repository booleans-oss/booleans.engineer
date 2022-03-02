<template>
  <div class="navbar">
    <div class="config">
      <ThemeSwitcher />
      <LanguageSwitcher />
    </div>
    <div class="contact">
      <button class="btn">
        <IconMdi:hand-peace style="margin-right: 5px" />
        {{ $t('navbar.contact') }}
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import LanguageSwitcher from './partials/LanguageSwitcher.vue'
import ThemeSwitcher from './partials/ThemeSwitcher.vue'

export default defineComponent({
  components: {
    LanguageSwitcher,
    ThemeSwitcher,
  },
})
</script>

<style scoped lang="scss">
.config {
  display: flex;
  gap: 3rem;
}
.navbar {
  position: absolute;
  display: flex;
  align-items: center;
  width: 100vw;
  padding: 0.7rem 4rem;
  z-index: 100;
}
.contact {
  font-family: 'Inter';
  display: flex;
  gap: 2rem;
  margin-left: auto;
  order: 2;
  .btn {
    font-size: 14px;
    font-weight: 500;
    padding: 1rem 1rem;
    background-color: var(--violet-7);
    color: white;
    border: none;
    border-radius: 10px;
    display: flex;
    align-items: center;
    box-shadow: var(--shadow-2);
  }
}
@media only screen and (min-width: 320px) and (max-width: 480px) {
  .navbar {
    justify-content: center;
  }
  .contact {
    margin: 0;
    order: 0;
  }
}
</style>
