<template>
  <div class="user">
    <div class="user__title">
      <p>Voici les utilisateurs !!</p>
    </div>
    <div class="user__card" v-for="user in user" :key="user.card">
      <div class="user__card__name">
        <p>pseudo : {{ user.pseudo }}</p>
      </div>
      <div class="user__card__email">
        <p>email : {{ user.email }}</p>
      </div>
      <div class="user__card__button">
        <button @click="deleteUser(user)">Supprimer cet utilisateur</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Admin',
  data() {
    return {
      user: {
        email: '',
        password: '',
        id: '',
      },
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
        this.user = response.data.user;
        this.user.id = localStorage.getItem('userId');
        console.log('Je veux voir les utilisateurs !');
      })
      .catch((error) => {
        console.log(error);
        console.log('Erreur !!');
      });
  },
  methods: {
    deleteUser(user) {
      console.log(user.id);
      this.axios
        .delete(`http://localhost:3000/api/user/deleteUser/${user.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          data: {
            isAdmin: localStorage.getItem('isAdmin'),
            userId: this.userId,
          },
        })
        .then((response) => {
          console.log(response.data.user);
          console.log(this.isAdmin);
          console.log('Je supprime ce compte utilisateur !');
          window.location.reload();
          if (localStorage.getItem('userId') == null) {
            this.$router.push({ name: 'Signup' });
          }
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

@media all and (min-width: 350px) and (max-width: 700px) {
  .user {
    width: 300px;
    height: auto;
    padding: 20px;
    margin: 20px;
    font-size: 1rem;
    border-radius: 15px;
    &__card {
      width: 250px;
      height: 130px;
      background-color: #d1515a;
      border: 1px solid #fff;
      font-family: 'Merriweather Sans', sans-serif;
      padding: 10px;
      margin: 10px;
      border-radius: 8px;
      &__name {
      }
      &__email {
      }
      &__button {
        & button {
          width: 160px;
          height: 28px;
          margin: 10px;
          border-radius: 10px;
          border: 2px solid white;
          margin: 5px;
          &:hover {
          }
        }
      }
    }
  }
}
</style>
