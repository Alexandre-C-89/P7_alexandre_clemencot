<template>
  <div class="container">
    <form @submit.prevent="submit" class="container__form">
      <p>Bienvenue</p>
      <label>Prénom</label>
      <input
        type="text"
        name="firstName"
        placeholder="Prénom"
        v-model="Prénom"
      />
      <label>Nom</label>
      <input type="text" name="lastName" placeholder="Nom" v-model="Nom" />
      <label>Identifiant</label>
      <input type="text" name="email" placeholder="Email" v-model="email" />
      <label>Mot de passe</label>
      <input
        type="password"
        name="password"
        placeholder="Mot de passe"
        v-model="password"
      />
      <input
        name="submit"
        type="submit"
        placeholder="Inscription"
        id="button"
      />
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
      fetch('http://localhost:3000/api/user/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          this.user = JSON.stringify(data);
          localStorage.setItem('token', data.token);
        });
    },
  },
  props: {
    msg: String,
  },
};
</script>

<style lang="scss">
.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  &__form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    font-family: arial, sans-serif;
    background: rgba(255, 255, 255, 0.4);
    padding: 1.5rem;
    border-radius: 16px;
  }
  & p {
    color: #2c3e50;
    font-weight: 500;
    opacity: 0.7;
    font-size: 1.4rem;
  }
  & input {
    width: 200px;
    height: 20px;
    margin: 10px;
    outline: none;
  }
}
</style>
