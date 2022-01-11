<template>
  <div class="formulaire">
    <form action="http://localhost:3000/api/user/signup" method="post">
      <div class="firstName">
        <label for="firstName">Prénom :</label>
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
    </form>
  </div>
</template>

<script>
export default {
  name: "Index",
  props: {
    msg: String,
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
}
</style>
