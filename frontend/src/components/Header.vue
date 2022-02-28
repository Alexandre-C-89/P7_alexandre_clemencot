<template>
  <div id="nav" class="header">
    <div class="header__logo">
      <img src="../assets/logo_blanc_recadre.png" alt="logo groupomania" />
    </div>
    <div class="header__link">
      <router-link to="/signin">Connexion</router-link> |
      <router-link to="/home">Accueil</router-link> |
      <router-link to="/dashboard">Profil</router-link> |
      <router-link to="/signup">S'enregistré</router-link> |
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  background-color: #1f2232;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  &__link {
    & a {
      font-weight: bold;
      color: white;
      text-decoration: none;
      width: 100px;
      height: 20px;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  &__logo {
    margin-left: 15px;
    & img {
      width: 150px;
      height: 35px;
    }
  }
  & router-link {
    width: 50px;
    height: 50px;
    background-color: white;
  }
}

#nav {
}
</style>
