<template>
  <div>
    <h1>Connexion</h1>
    <form v-on:submit.prevent="onSubmit" class="form">
      <div>
        <label for="email">Email</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label for="password">Mot de passe</label>
        <input type="password" name="password" v-model="password" />
      </div>
      <button>Connexion</button>
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
      user: '',
      errorLogin: '',
      info: null,
      posts: ['post 1', 'post 2', 'post 3'],
    };
  },
  methods: {
    updatePost() {
      this.posts = ['post 5', 'post 6'];
    },
  },
};
</script>

<style lang="scss">
.form {
  width: 300px;
  height: 200px;
  background-color: #62929e;
}
</style>
