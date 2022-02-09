<template>
  <div>
    <h1>Créer un compte</h1>
    <form v-on:submit.prevent="submit" class="form">
      <div class="form__firstname">
        <label for="firstname">Prénom :</label>
        <input type="firstname" name="firstname" v-model="firstname" />
      </div>
      <div class="form__lastname">
        <label for="lastname">Nom :</label>
        <input type="lastname" name="lastname" v-model="lastname" />
      </div>
      <div class="form__pseudo">
        <label for="pseudo">pseudo :</label>
        <input type="pseudo" name="pseudo" v-model="pseudo" />
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
        <button type="submit">Créer un compte</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // isAdmin: null,
      firstname: '',
      lastname: '',
      pseudo: '',
      email: '',
      password: '',
      user: {},
    };
  },
  methods: {
    submit() {
      const data = {
        // isAdmin = this.isAdmin,
        firstname: this.firstname,
        lastname: this.lastname,
        pseudo: this.pseudo,
        email: this.email,
        password: this.password,
      };
      // console.log(data);
      this.axios
        .post('http://localhost:3000/api/user/signup', data)
        .then((response) => {
          if (response) {
            console.log('Utilisateur créer !');
          } else {
            console.log("l'utilisateur n'a pas été créé !");
          }
        })
        .catch((error) => {
          if (error) {
            console.log('erreur lors de la création de compte !');
          }
        });
    },
  },
};
</script>

<style lang="scss">
.form {
  width: 320px;
  height: 300px;
  background-color: #62929e;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__firstname {
    margin: 10px;
  }
  &__lastname {
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
