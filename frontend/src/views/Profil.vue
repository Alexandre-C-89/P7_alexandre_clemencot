<template>
  <div class="profil">
    <h1>Profil</h1>
    <div class="profil__card">
      <div class="profil__card__description">
        <p>pseudo : {{ pseudo }}</p>
        <p>email : {{ email }}</p>
        <button
          class="profil__card__button"
          @click.prevent="supp()"
          type="submit"
        >
          Supprimer le profil
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profil',
  data() {
    return {
      pseudo: localStorage.getItem('pseudo'),
      email: localStorage.getItem('email'),
      userId: localStorage.getItem('userId'),
    };
  },
  methods: {
    supp() {
      console.log(' --- je veux supprimé mon compte -----');
      this.axios
        .delete(`http://localhost:3000/api/user/deleteUser/${this.userId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          localStorage.clear();
          this.$router.push({ name: 'Signup' });
        });
    },
  },
};
</script>

<style scoped lang="scss">
.profil {
  width: 350px;
  height: auto;
  background-color: #afafb0;
  color: #fff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 10px 10px 10px;
  &__card {
    width: 280px;
    background-color: #d1515a;
    margin: 10px 10px 30px 10px;
    padding: 10px;
    border-radius: 5px;
    &__description {
      color: #fff;
    }
    &__button {
      width: 125px;
      height: 28px;
      margin: 10px;
      border-radius: 10px;
      background-color: rgba(255, 255, 255, 0.541);
      border: 2px solid white;
      margin: 5px;
      &:hover {
        background-color: #132542;
        color: #fff;
      }
    }
  }
  & h2 {
    font-family: 'Nunito', sans-serif;
    font-size: 1.5rem;
  }
}
</style>
