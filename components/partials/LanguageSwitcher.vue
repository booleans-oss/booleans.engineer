<template>
  <div class="lang">
    <div class="dropdown">
      <span class="nav-link">
        <IconIon:language />
        <span class="actual">
          {{
            $i18n.locales.find((locale) => locale.code === $i18n.locale).name
          }}
        </span>
      </span>

      <div class="dropdown-menu dropdown-menu-start">
        <NuxtLink
          v-for="locale in availableLocales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          class="dropdown-item"
          :class="{ active: locale.code === $i18n.locale }"
        >
          {{ locale.name }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales
    },
  },
}
</script>
<style lang="scss">
.lang {
  display: flex;
  align-items: center;
}
.dropdown {
  display: flex;
  align-items: center;
  &:hover > .dropdown-menu {
    opacity: 1;
    transform: translateY(0);
    visibility: visible;
  }
  .nav-link {
    color: inherit;
    cursor: pointer;
    font-weight: 500;
    padding: 1px 5px;
    transition: all 200ms;
    font-size: 18px;
    color: #f5f5f5;

    .actual {
      display: none;
    }
  }
  .dropdown-menu {
    background: #fff;
    border: 0;
    border-radius: 0.25rem;
    box-shadow: -1px 2px 19px 3px rgba(14, 0, 40, 0.1);
    display: block;
    margin: 0;
    opacity: 0;
    padding: 0.25rem 0;
    transform: translateY(20px);
    transition: all 0.3s ease-in;
    visibility: hidden;
    .dropdown-item {
      color: #8b959e;
      display: inline-block;
      font-size: 0.875rem;
      font-weight: 500;
      margin: 0.125rem 0;
      text-decoration: none;
      padding: 0 0.75rem;
      transition: color 0.2s linear;
      white-space: nowrap;
      &:focus,
      &:hover,
      &.active {
        background-color: transparent;
        color: #1b1b1b;
      }
    }
  }
}
.dark-mode {
  .dropdown-menu {
    background: #2d2d2d;
    .dropdown-item {
      color: #a7a7a7;
      &:focus,
      &:hover,
      &.active {
        background-color: transparent;
        color: #fff;
      }
    }
  }
}
</style>
