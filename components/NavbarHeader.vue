<template>
  <div class="navbar">
    <label class="switch">
      <input v-model="isActive" type="checkbox" @click="handleSwitch" />
      <span class="track">
        <span class="handle"
          ><IconBx:bxs-moon v-if="isActive" /><IconMdi:white-balance-sunny
            v-if="!isActive"
        /></span>
      </span>
    </label>
    <div class="contact">
      <button>
        <IconMdi:hand-peace style="margin-right: 5px" />Contact me
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: this.$colorMode.preference === 'dark',
    }
  },
  methods: {
    handleSwitch() {
      this.$colorMode.preference = this.isActive ? 'light' : 'dark'
    },
  },
}
</script>

<style scoped lang="scss">
.navbar {
  position: absolute;
  display: flex;
  width: 100vw;
  padding: 0.7rem 4rem;
  z-index: 100;
}

.contact {
  font-family: 'Inter';
  margin-left: auto;
  order: 2;

  button {
    font-size: 14px;
    font-weight: 500;
    padding: 1rem 1rem;
    background-color: rgb(100, 58, 234);
    color: white;
    border: none;
    border-radius: 10px;
    display: flex;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
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
    border: 2px solid white;
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
  input:focus + .track {
    box-shadow: 0 0 1px orange;
  }
  input:checked + .track > .handle {
    transform: translateX(30px);
  }
}
</style>
