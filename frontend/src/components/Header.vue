<template>
  <div id="nav" class="header">
    <div class="header__logo">
      <img src="../assets/logo_blanc_recadre.png" alt="logo groupomania" />
    </div>
    <div class="header__link">
      <router-link to="/signup">S'enregistrer</router-link> |
      <router-link to="/login">Connexion</router-link>
      <span v-if="this.userId === null">
        <router-link to="/">Accueil</router-link> |
        <router-link :to="`/user/${userId}`">Profil</router-link>
        <a @click="logout()">Déconnexion</a>
      </span>
      <span v-else> </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      userId: localStorage.getItem('userId'),
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: 'Signup' });
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
