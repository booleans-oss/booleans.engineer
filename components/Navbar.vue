<template>
  <div class="navbar">
    <div class="contact">
      <button>
        <IconMdi:hand-peace style="margin-right: 5px" />Contact me
      </button>
    </div>
  </div>
</template>

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
</style>
