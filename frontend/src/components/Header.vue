<template>
  <div id="nav" class="header">
    <div class="header__logo">
      <img src="../assets/logo_blanc_recadre.png" alt="logo groupomania" />
    </div>
    <div class="header__connected">
      <li><router-link to="/">Accueil</router-link> |</li>
      <li v-if="showAdminBoard">
        <router-link to="/admin">Admin Board</router-link> |
      </li>
      <li v-if="showModeratorBoard">
        <router-link to="/mod">Moderator Board</router-link>
      </li>
      <li>
        <router-link v-if="currentUser" to="/user">User</router-link>
      </li>
    </div>

    <!-- Si l'utilisateur n'arrive pas à ce connecté -->

    <div v-if="!currentUser" class="home__notconnected">
      <li>
        <router-link to="/register">Sign Up</router-link>
      </li>
      <li to="/login"><router-link to="/login">Login</router-link> |</li>
    </div>

    <div v-if="currentUser" class="home__profil">
      <li>
        <router-link to="/profile">{{ currentUser.username }}</router-link>
      </li>
      <a class="nav-link" href @click.prevent="logOut">
        <font-awesome-icon icon="sign-out-alt" />LogOut
      </a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_ADMIN');
      }
      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_MODERATOR');
      }
      return false;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
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
