<template>
  <div class="formulaire">
    <form @submit.prevent="submitComment">
      <div class="firstName">
        <label for="firstName" v-model:="comment">Prénom :</label>
        <input type="text" id="firstName" name="first_name" />
      </div>
      <div class="lastName">
        <label for="lastName">Nom :</label>
        <input type="text" id="lastName" name="last_name" />
      </div>
      <div class="email">
        <label for="mail">e-mail:</label>
        <input type="email" id="mail" name="user_mail" />
      </div>
      <div class="password">
        <label for="Password">Mot de passe :</label>
        <input type="text" id="Password" name="password" />
      </div>
      <button type="submit">Inscription</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      comment: "",
    };
  },
  methods: {
    submitComment() {
      console.log(this.comment);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.formulaire {
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: cadetblue;
}

.firstName {
  margin: 5px;
}
.lasstName {
  margin: 5px;
}
.email {
  margin: 5px;
}
.password {
  margin: 5px;
}

.formulaire input {
  margin-left: 10px;
  border-radius: 5px;
  border: solid 1px rgb(171, 213, 214);
}
</style>
