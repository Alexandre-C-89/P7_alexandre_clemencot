<template>
  <div>
    <h1>Créer un compte</h1>
    <form class="form">
      <div class="form__pseudo">
        <label for="pseudo">Pseudo : </label>
        <input type="pseudo" name="pseudo" v-model="pseudo" />
      </div>
      <div class="form__email">
        <label for="email">Email : </label>
        <input type="email" name="email" v-model="email" />
      </div>
      <div class="form__password">
        <label for="password">Mot de passe : </label>
        <input type="password" name="password" v-model="password" />
      </div>
      <div class="form__button">
        <button @click.prevent="submit()" type="submit">Créer un compte</button>
      </div>
    </form>
    <!--<p id="error">L'utilisateur existe déjà !</p>-->
  </div>
</template>

<script>
// Ancien code
// import User from '../models/user';

export default {
  data() {
    return {
      // user: User,
      pseudo: '',
      email: '',
      password: '',
      // logged: false,
    };
  },
  methods: {
    submit() {
      const user = {
        pseudo: this.pseudo,
        email: this.email,
        password: this.password,
      };
      this.axios
        .post('http://localhost:3000/api/user/signup', user)
        .then((response) => {
          console.log(response.data);
          console.log('Utilisateur enregistré ! ');
          this.$router.push({ name: 'Login' });
        })
        .catch((error) => {
          console.log(error, 'Erreur');
        });
    },
  },
  // logged() {
  //   const logged = localStorage.getItem('');
  //   if (logged) {
  //     return true;
  //   }
  // },
};
</script>

<style lang="scss">
.form {
  width: 320px;
  height: 265px;
  background-color: #62929e;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // &__firstname {
  //   margin: 10px;
  // }
  // &__lastname {
  //   margin: 10px;
  // }
  &__pseudo {
    margin: 10px;
  }
  &__email {
    margin: 10px;
  }
  &__password {
    margin: 10px;
  }
  & button {
    width: 130px;
    height: 28px;
    margin: 10px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.541);
    font-weight: bold;
    color: black;
    border: 2px solid white;
    &:hover {
      background-color: #084b5c;
    }
  }
}
</style>
