<template>
  <div class="profil">
    <h2>{{ user }}</h2>
    <div class="profil__description">
      <p>email</p>
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
      user: {},
    };
  },
  methods: {
    supp() {
      console.log('localeStorage');
      alert('Salut !!');
    },
    //   getUser() {
    //     this.axios
    //       .get('http://localhost:3000/api/user/')
    //       .then((result) => {
    //         console.log(result);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   },
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
