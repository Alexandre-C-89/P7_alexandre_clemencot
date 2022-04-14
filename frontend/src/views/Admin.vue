<template>
  <div class="user">
    <div class="user__title">
      <p>Voici les utilisateurs !!</p>
    </div>
    <div class="user__card" v-for="user in users" :key="user.card" :user="user">
      <div class="user__card__name">
        <p>pseudo : {{ user.pseudo }}</p>
      </div>
      <div class="user__card__email">
        <p>email : {{ user.email }}</p>
      </div>
      <div class="user__card__button">
        <button>Supprimer cette utilisateur</button>
      </div>
    </div>
  </div>
</template>

<script>
import User from '../models/user';

export default {
  name: 'Admin',
  data() {
    return {
      users: User,
    };
  },
  mounted() {
    this.axios
      .get('http://localhost:3000/api/user/allUsers', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        console.log(response.data.user);
        console.log('Je veux voir les utilisateurs !');
      })
      .catch((error) => {
        console.log(error);
        console.log('Erreur !!');
      });
  },
};
</script>

<style scoped lang="scss">
.user {
  width: 400px;
  height: auto;
  background-color: #41b883;
  padding: 20px;
  margin: 20px;
  font-family: 'Nunito', sans-serif;
  font-size: 1.5rem;
  border-radius: 18px;
  &__card {
    width: 350px;
    height: 280px;
    background-color: #ef8354;
    border: 1px solid #fff;
    font-family: 'Merriweather Sans', sans-serif;
    &__name {
      background-color: #fff;
      font-family: 'Merriweather Sans', sans-serif;
    }
    &__email {
      font-family: 'Merriweather Sans', sans-serif;
      background-color: #fff;
    }
  }
}
</style>
