<template>
  <div>
    <h1>Créer un compte</h1>
    <form v-on:submit.prevent="onSubmit" class="form">
      <div class="form__firstName">
        <label for="firstname">Prénom :</label>
        <input type="firstname" name="firstname" />
      </div>
      <div class="form__lastName">
        <label for="lastname">Nom :</label>
        <input type="lastname" name="lastname" />
      </div>
      <div class="form__email">
        <label for="email">Email :</label>
        <input type="email" name="email" />
      </div>
      <div class="form__password">
        <label for="password">Mot de passe :</label>
        <input type="password" name="password" v-model="password" />
      </div>
      <div class="form__button">
        <button>Créer un compte</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      user: {},
    };
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
