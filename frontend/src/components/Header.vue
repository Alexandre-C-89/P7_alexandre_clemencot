<template>
  <div id="nav" class="header">
    <div class="header__logo">
      <img src="../assets/logo_blanc_recadre.png" alt="logo groupomania" />
    </div>
    <div><router-link to="/signin">Connexion</router-link></div>
    <template v-if="authenticated">
      {{ user }}
      <router-link to="/home">Home</router-link> |
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to="/signout" @click.prevent="signOut"
        >Déconnecté</router-link
      >
    </template>
    <template v-else>
      <router-link to="/signup">S'enregistré</router-link> |
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated', // je vérifie authenticated qui vient
      // de "auth/authenticated"
      user: 'auth/user', // Je saisie les informations de l'utilisateur
      // qui viennent de "auth/user"
    }),
  },

  methods: {
    ...mapActions({
      signOutAction: 'auth/signOut',
    }),

    signOut() {
      this.signOutAction().then(() => {
        this.$router.replace({
          name: 'home',
        });
      });
    },
  },
};
</script>

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
