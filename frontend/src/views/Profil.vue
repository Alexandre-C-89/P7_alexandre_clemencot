<template>
  <div class="profil">
    <h2>Profil</h2>
    <div class="profil__description">
      <p>pseudo : {{ pseudo }}</p>
      <p>email : {{ email }}</p>
    </div>
    <button class="profil__button" @click.prevent="supp()" type="submit">
      Supprimer le profil
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pseudo: localStorage.getItem('pseudo'),
      email: localStorage.getItem('email'),
    };
  },
  methods: {
    supp() {
      console.log('localeStorage');
      alert('Salut !!');
    },
    getUser() {},
  },
};
</script>

<style scoped lang="scss">
.profil {
  &__description {
    width: 320px;
    height: 160px;
    background-color: #62929e;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
