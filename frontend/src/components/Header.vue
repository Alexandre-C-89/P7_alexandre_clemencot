<template>
  <div id="nav" class="header">
    <div class="header__logo">
      <img src="../assets/logo_blanc_recadre.png" alt="logo groupomania" />
    </div>
    <div class="header__link">
      <router-link to="/signup">S'enregistrer</router-link> |
      <router-link to="/login">Connexion</router-link> |
      <span v-if="this.userId">
        <router-link to="/">Accueil</router-link> |
        <router-link :to="`/user/profil`">Profil</router-link> |
        <button @click="logout()">Déconnexion</button> |
      </span>
      <span v-if="this.isAdmin == 1">
        <router-link to="/admin">Admin</router-link>
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
      isAdmin: localStorage.getItem('isAdmin'),
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: 'Signup' });
      window.location.reload();
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
      margin: 0px 20px 0px 15px;
      &.router-link-exact-active {
        color: #d1515a;
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
  & button {
    background-color: #d1515a;
    color: #fff;
    border-radius: 5px;
    border: 1.7px solid #fff;
    margin: 20px;
  }
}

@media all and (min-width: 700px) and (max-width: 900px) {
  .header {
    font-size: 0.8rem;
  }
}

@media all and (min-width: 350px) and (max-width: 700px) {
  .header {
    height: 150px;
    font-size: 0.6rem;
    &__link {
      width: 220px;
      height: 50px;
      & a {
        width: 80px;
        height: 80px;
        margin: 15px;
      }
      & button {
        background-color: #d1515a;
        color: #fff;
        border-radius: 5px;
        border: 1.7px solid #fff;
        margin: 5px;
      }
    }
    &__logo {
      margin-left: 15px;
      & img {
        width: 120px;
        height: 50px;
      }
    }
  }
}
</style>
