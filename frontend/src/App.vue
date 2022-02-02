<template>
  <div id="app">
    <div id="nav" class="header">
      <div class="header__logo">
        <img src="./assets/logo.png" alt="logo groupomania" />
      </div>
      <div>
        <router-link to="/">Accueil</router-link> |
        <router-link to="/login">Connexion</router-link> |
        <router-link to="/signup">S'enregistré</router-link> |
        <router-link to="/profil">Profil</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: white;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1f2232;
  &__logo {
    & img {
      width: 80px;
      height: 80px;
    }
  }
}
</style>
