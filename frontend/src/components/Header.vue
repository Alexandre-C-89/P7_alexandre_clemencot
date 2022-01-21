<template>
  <nav class="nav">
    <div class="nav__logo">
      <img
        src="../assets/logo/icon-left-font-monochrome-white.png"
        alt="logo Groupomania"
      />
    </div>
    <ul class="nav__link">
      <!-- {{
        link
      }} -->
      <router-link to="/">Accueil</router-link>
      <router-link to="/signup">Inscription</router-link>
      <router-link to="/login">Connexion</router-link>
      <router-link to="/user">Profil</router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  components: {},
};

// new Vue({
//   el: '.nav',
//   data: {
//     links: ['Inscription', 'Connexion', 'Profil'],
//   },
// });
</script>

<style lang="scss">
.nav {
  background-color: #35495e;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__logo {
    margin-left: 20px;
    & img {
      width: 100px;
      height: 100px;
    }
  }
  &__link {
    & a {
      margin: 0px 10px 0px 10px;
      text-decoration: none;
      color: white;
    }
    &.router-link:active {
      color: #41b883;
    }
  }
}
</style>
