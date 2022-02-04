<template>
  <div id="nav" class="header">
    <div class="header__logo">
      <img src="../assets/logo_blanc_recadre.png" alt="logo groupomania" />
    </div>
    <div>
      <router-link to="/login">Connexion</router-link> |
      <router-link to="/signup">S'enregistré</router-link>
    </div>
  </div>
</template>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1f2232;
  &__logo {
    & img {
      width: 150px;
      height: 35px;
    }
  }
}
</style>
