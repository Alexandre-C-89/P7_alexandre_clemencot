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
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      user: {},
    };
  },
  methods: {
    submit() {
      const data = {
        email: this.email,
        password: this.password,
      };
      this.axios
        .post('http://localhost:3000/api/user/login', data)
        .then((response) => {
          if (response) {
            console.log('Utilisateur connecté !');
            console.log(response.data.token);
            // window.location.href('http://localhost:8080/');
            this.$router.push({ name: 'Home' });
          }
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
