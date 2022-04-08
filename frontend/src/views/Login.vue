<template>
  <div>
    <h1>Connexion</h1>
    <form v-on:submit.prevent="Submit" class="form">
      <div class="form__email">
        <label for="email">Email : </label>
        <input type="email" name="email" v-model="email" placeholder="Email" />
      </div>
      <div class="form__password">
        <label for="password">Mot de passe : </label>
        <input
          type="password"
          name="password"
          v-model="password"
          placeholder="mot de passe"
        />
      </div>
      <button @click.prevent="submit()" type="submit">Connexion</button>
    </form>
    <!--<p v-if="showError" id="error">Username or Password is incorrect</p>-->
  </div>
</template>

<script>
// j'importe mapActions pour l'utilisé
// et importé l'action "login"
// import Btn from '../components/Btn.vue';
// import User from '../models/user';

export default {
  name: 'Login',
  // components: {
  //   Btn,
  // },
  data() {
    return {
      // user: User,
      email: '',
      password: '',
    };
  },
  methods: {
    submit() {
      const user = {
        // email: User.email,
        // password: User.passwords,
        email: this.email,
        password: this.password,
      };
      this.axios
        .post('http://localhost:3000/api/user/login', user, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((response) => {
          console.log('Utilisateur connecté !', response.data);
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('userId', response.data.userId);
          localStorage.setItem('pseudo', response.data.pseudo);
          this.$router.push({ name: 'Home' });
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style lang="scss">
.form {
  width: 320px;
  height: 160px;
  background-color: #62929e;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__email {
    margin: 10px;
  }
  &__password {
    margin: 10px;
  }
  & button {
    width: 100px;
    height: 28px;
    margin: 10px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.541);
    border: 2px solid white;
    &:hover {
      background-color: #62929e;
    }
  }
}
</style>
