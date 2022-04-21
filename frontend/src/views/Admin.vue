<template>
  <div class="user">
    <div class="user__title">
      <p>Voici les utilisateurs !!</p>
    </div>
    <div class="user__card" v-for="user in users" :key="user.card">
      <div class="user__card__name">
        <p>pseudo : {{ user.pseudo }}</p>
      </div>
      <div class="user__card__email">
        <p>email : {{ user.email }}</p>
      </div>
      <div class="user__card__button">
        <button @click="deleteUser()">Supprimer cet utilisateur</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Admin',
  data() {
    return {
      users: [],
      isAdmin: localStorage.getItem('isAdmin'),
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
        // console.log(response.data.user);
        this.users = response.data.user;
        console.log('Je veux voir les utilisateurs !');
      })
      .catch((error) => {
        console.log(error);
        console.log('Erreur !!');
      });
  },
  methods: {
    deleteUser() {
      this.axios
        .delete(`http://localhost:3000/api/user/deleteUser/${this.userId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          data: {
            isAdmin: localStorage.getItem('isAdmin'),
            userId: this.users.userId,
          },
        })
        .then((response) => {
          console.log(response.data.user);
          console.log(this.isAdmin);
          console.log('Je supprime ce compte utilisateur !');
        });
    },
  },
};
</script>

<style scoped lang="scss">
.user {
  width: 500px;
  height: auto;
  background-color: #afafb0;
  color: #132542;
  padding: 20px;
  margin: 20px;
  font-family: 'Nunito', sans-serif;
  font-size: 1.5rem;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__card {
    width: 350px;
    height: 200px;
    background-color: #d1515a;
    border: 1px solid #fff;
    font-family: 'Merriweather Sans', sans-serif;
    padding: 10px;
    margin: 10px;
    border-radius: 8px;
    &__name {
      font-family: 'Merriweather Sans', sans-serif;
      color: #fff;
    }
    &__email {
      font-family: 'Merriweather Sans', sans-serif;
      color: #fff;
    }
    &__button {
      & button {
        width: 160px;
        height: 28px;
        margin: 10px;
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 0.541);
        border: 2px solid white;
        margin: 5px;
        &:hover {
          background-color: #132542;
          color: #fff;
        }
      }
    }
  }
}
</style>
