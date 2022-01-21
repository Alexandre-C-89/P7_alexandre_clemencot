<template>
  <div class="container">
    <form action="" class="container__form">
      <p>Bienvenue</p>
      <label>Identifiant</label>
      <input type="text" name="email" placeholder="Email" v-model="password" />
      <label>Mot de passe</label>
      <input
        type="text"
        name="password"
        placeholder="Mot de passe"
        v-model="Identifiant"
      />
      <button type="submit" placeholder="Inscription">S'inscrire</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Formulaire',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    submit() {
      fetch('https://localhost:3000/api/user/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      }).then((response) => response.json);
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
    border-left: 1px solid rgba(255, 255, 255, 0.3);
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    /* effet sympa à ajouté */
    box-shadow: 20px 20px 40px -6px rgb(0, 0, 0, 0.2);
    text-align: center;
  }
  & p {
    color: #2c3e50;
    font-weight: 500;
    opacity: 0.7;
    font-size: 1.4rem;
    margin-bottom: 60px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
  }
  & a {
    color: #ddd;
    text-decoration: none;
    font-size: 12px;
    &:hover {
      text-shadow: 2px 2px 6px rgb(0, 0, 0);
    }
  }
  & input {
    padding: 1rem;
    width: 200px;
    border-radius: 20px;
    box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
    color: #2c3e50;
    font-weight: 500;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
    margin-bottom: 10px;
  }
  & label {
    margin-bottom: 10px;
  }
  & button {
    width: 100px;
    border-radius: 8px;
    padding: 5px;
    color: #2c3e50;
  }
  & ::placeholder {
    color: #2c3e50;
  }
}
</style>
