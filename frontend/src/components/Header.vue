<template>
  <div id="nav" class="header">
    <div class="header__logo">
      <img src="../assets/logo_blanc_recadre.png" alt="logo groupomania" />
    </div>
    <div class="header__link">
      <a @click="logout()">Déconnexion</a>
      <router-link to="/api/user/:id">Profil</router-link> |
      <router-link to="/">Accueil</router-link> |
      <router-link to="/signup">S'enregistrer</router-link> |
      <router-link to="/login">Connexion</router-link> |
      <!--<span v-if="isLoggedIn">
      </span>-->
      <!--<span v-else>
      </span>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  // computed: {
  //   isLoggedIn() {
  //     return this.$store.getters.isAuthenticated;
  //   },
  // },
  methods: {
    async logout() {
      await this.$store.dispatch('LogOut');
      this.$router.push('/login');
    },
  },
};
</script>

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
      margin: 0px 15px 0px 15px;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  &__logo {
    margin-left: 20px;
    & img {
      width: 200px;
      height: 50px;
    }
  }
  & router-link {
    width: 50px;
    height: 50px;
    background-color: white;
  }
}
</style>
