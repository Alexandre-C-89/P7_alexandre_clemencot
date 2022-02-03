<template>
  <div>
    <h1>Connexion</h1>
    <form v-on:submit.prevent="Submit" class="form">
      <div>
        <label for="email">Email</label>
        <input type="email" name="email" v-model="email" placeholder="Email" />
      </div>
      <div>
        <label for="password">Mot de passe</label>
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
        .then((response) => console.log(response))
        .then((response) => {
          if (response) {
            console.log('Utilisateur connecté !');
            console.log(response.data.token);
          }
        });
    },
  },
  // mounted() {
  //   if (localStorage.email) this.email = localStorage.email;
  //   if (localStorage.password) this.password = localStorage.password;
  // },
  // watch: {
  //   email(newEmail) {
  //     localStorage.email = newEmail;
  //   },
  //   password(newPassword) {
  //     localStorage.password = newPassword;
  //   },
  // },
};
</script>

<style lang="scss">
.form {
  width: 300px;
  height: 200px;
  background-color: #62929e;
}
</style>
