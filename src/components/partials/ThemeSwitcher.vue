<template>
  <label class="switch">
    <input v-model="isActive" type="checkbox" @click="handleSwitch" />
    <span class="track">
      <span class="handle"
        ><IconBx:bxs-moon v-if="isActive" /><IconMdi:white-balance-sunny
          v-if="!isActive"
      /></span>
    </span>
  </label>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ThemeSwitcher',
  data() {
    return {
      isActive: false,
    }
  },
  mounted() {
    const theme = localStorage.getItem('theme')
    const html = document.getElementsByTagName('html')[0]
    if (theme) {
      this.isActive = theme === 'dark'
      if (theme === 'dark') {
        html.classList.add('dark-mode')
        html.style.backgroundColor = 'var(--gray-9)'
      }
    } else {
      html.classList.remove('dark-mode')
      html.style.backgroundColor = 'white'
      this.isActive = false
      localStorage.setItem('theme', 'light')
    }
  },
  methods: {
    handleSwitch() {
      const theme = localStorage.getItem('theme')
      const html = document.getElementsByTagName('html')[0]
      if (theme === 'dark') {
        localStorage.setItem('theme', 'light')
        html.classList.remove('dark-mode')
        html.style.backgroundColor = 'white'
        this.isActive = false
      } else {
        localStorage.setItem('theme', 'dark')
        html.classList.add('dark-mode')
        html.style.backgroundColor = 'var(--gray-9)'
        this.isActive = true
      }
    },
  },
})
</script>

<style lang="scss">
.switch {
  position: relative;
  display: inline-block;
  align-items: center;
  width: 60px;
  height: 30px;
  input {
    display: none;
  }
  .track {
    display: flex;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    cursor: pointer;
    border-radius: 30px;
    padding: 0 0.3rem;
    transition: 0.4s;
    .handle {
      display: flex;
      align-items: center;
      width: 50px;
      height: 50px;
      color: rgba(36, 37, 45, 1);
      border-radius: 10px;
      transition: 0.4s;
    }
  }
  input:checked + .track {
    background-color: rgba(36, 37, 45, 1);
    border: 2px solid rgba(36, 37, 45, 1);
    .handle {
      color: white;
    }
  }
  .track {
    box-shadow: var(--inner-shadow-1);
  }
  input:checked + .track > .handle {
    transform: translateX(30px);
  }
}
</style>
