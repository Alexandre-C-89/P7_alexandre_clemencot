<template>
  <div>
    <h1>Créer un compte</h1>
    <form v-on:submit.prevent="submit" class="form">
      <div class="form__firstName">
        <label for="firstname">Prénom :</label>
        <input type="firstname" name="firstname" v-model="firstname" />
      </div>
      <div class="form__lastName">
        <label for="lastname">Nom :</label>
        <input type="lastname" name="lastname" v-model="lastname" />
      </div>
      <div class="form__email">
        <label for="email">Email :</label>
        <input type="email" name="email" v-model="email" />
      </div>
      <div class="form__password">
        <label for="password">Mot de passe :</label>
        <input type="password" name="password" v-model="password" />
      </div>
      <div class="form__button">
        <button @click="submit()" type="submit">Créer un compte</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      user: {},
    };
  },
  methods: {
    submit() {
      const data = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
      };
      console.log(data);
      this.axios
        .post('http://localhost:3000/api/user/signup', data)
        .then((response) => console.log(response))
        .then((result) => {
          if (result) {
            console.log('Utilisateur créé !');
          }
        })
        .catch((error) => {
          console.log(error);
          console.log('erreur lors de la création de compte !');
        });
    },
  },
};
</script>

<style lang="scss">
.form {
  width: 300px;
  height: 200px;
  background-color: #62929e;
  display: flex;
  flex-direction: column;
  &__firstName {
    margin: 10px;
  }
  &__lastName {
    margin: 10px;
  }
  &__email {
    margin: 10px;
  }
  &__password {
    margin: 10px;
  }
  &__button {
    width: 200px;
    height: 10px;
  }
}
</style>
