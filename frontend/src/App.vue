<template>
  <div id="app">
    <img
      src="/assets/logo/icon-left-font-monochrome-white"
      alt="logo Groupomania"
    />
    <div id="nav">
      <router-link to="/">Accueil</router-link> |
      <router-link to="/signup">Inscription</router-link> |
      <router-link to="/login">Connexion</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: #35495e;
  a {
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
