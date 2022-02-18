<template>
  <div>
    <h1>Connexion</h1>
    {{ form }}
    <form v-on:submit.prevent="Submit" class="form">
      <div class="form__email">
        <label for="email">Email : </label>
        <input
          type="email"
          name="email"
          v-model="form.email"
          placeholder="Email"
        />
      </div>
      <div class="form__password">
        <label for="password">Mot de passe : </label>
        <input
          type="password"
          name="password"
          v-model="form.password"
          placeholder="mot de passe"
        />
      </div>
      <button @click.prevent="submit()" type="submit">Connexion</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Signin',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    submit() {
      // const form = {
      //   email: this.email,
      //   password: this.password,
      // };
      // this.axios
      //   .post('http://localhost:3000/api/user/login', form)
      //   .then((response) => {
      //     if (response) {
      //       console.log('Utilisateur connecté !');
      //       console.log(response.data.token);
      //       localStorage.setItem('userToken', response.data.token);
      //       this.$router.push({ name: 'Home' });
      //     }
      //   })
      //   .catch((error) => console.log(error));
      this.signIn(this.form).then(() => {
        this.$router.replace({
          name: 'dashboard',
        });
      });
    },
    ...mapActions({
      signIn: 'auth/signIn',
    }),
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
