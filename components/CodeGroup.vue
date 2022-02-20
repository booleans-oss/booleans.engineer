<template>
  <div class="bloc">
    <div class="header">
      <div
        v-for="({ label }, i) in tabs"
        ref="tabs"
        :key="label"
        :class="[activeTabIndex === i && 'active']"
        @click="updateTabs(i)"
      >
        {{ label }}
      </div>
      <span ref="highlight-underline" class="highlight-underline" />
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [],
      activeTabIndex: 0,
    }
  },
  watch: {
    activeTabIndex(newValue) {
      this.switchTab(newValue)
    },
  },
  mounted() {
    this.tabs = this.$slots.default
      .filter((slot) => Boolean(slot.componentOptions))
      .map((slot) => {
        return {
          label: slot.componentOptions.propsData.label,
          elm: slot.elm,
        }
      })
    this.$nextTick(this.updateHighlighteUnderlinePosition)
  },
  methods: {
    switchTab(i) {
      this.tabs.map((tab) => tab.elm.classList.remove('active'))
      this.tabs[i].elm.classList.add('active')
    },
    updateTabs(i) {
      this.activeTabIndex = i
      this.updateHighlighteUnderlinePosition()
    },
    updateHighlighteUnderlinePosition() {
      const activeTab = this.$refs.tabs[this.activeTabIndex]
      if (!activeTab) {
        return
      }
      const highlightUnderline = this.$refs['highlight-underline']
      highlightUnderline.style.left = `${activeTab.offsetLeft}px`
      highlightUnderline.style.width = `${activeTab.clientWidth}px`
    },
  },
}
</script>

<style scoped lang="scss">
.bloc {
  width: 50%;
  margin-top: 2rem;
  background-color: rgba(45, 55, 72, 1);
  border-radius: 5px;
  .header {
    display: inline-flex;
    position: relative;
    color: rgb(203, 213, 224);
    font-size: 14px;
    font-weight: 500;
    width: 100%;
    border-bottom: rgba(74, 85, 104, 1) 2px solid;
    margin-bottom: -2px;
    transition: left 150ms, width 150ms;
    .active {
      z-index: 99;
    }
    & > div {
      cursor: pointer;
      margin: 0 1rem;
      margin-top: 0.5rem;
      padding-bottom: 1px;
    }

    .highlight-underline {
      position: absolute;
      background-color: green;
      bottom: -2px;
      height: 2px;
      transition: left 150ms, width 150ms;
    }
  }
}
</style>
