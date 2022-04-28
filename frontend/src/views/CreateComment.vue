<template>
  <div class="post">
    <div class="post__title">
      <p>Création de commentaire :</p>
    </div>
    <form class="post__form" enctype="multipart/form-data">
      <div class="post__form__description">
        <label>Description : </label>
        <textarea
          type="description"
          placeholder="Décrivez votre post !"
          v-model="description"
        />
      </div>
      <div class="post__form__btn">
        <button @click.prevent="CreateComment()">Créer</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'createComment',
  data() {
    return {
      pseudo: '',
      description: '',
      // postId: '',
      userId: '',
    };
  },
  methods: {
    CreateComment() {
      console.log('Je vais créé un post !');
      const fd = new FormData();
      fd.append('pseudo', this.pseudo);
      fd.append('description', this.description);
      // fd.append('postId', this.postId);
      fd.append('userId', (this.userId = localStorage.getItem('userId')));
      console.log(this.userId);
      this.axios
        .post('http://localhost:3000/api/comment/createcomment', fd, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token', 'userId')}`,
          },
          data: {
            userId: this.userId,
          },
        })
        .then((response) => {
          console.log('commentaire posté !');
          console.log(response);
          this.$router.push({ name: 'Home' });
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style lang="scss" scoped>
.post {
  height: auto;
  width: auto;
  background-color: #afafb0;
  color: #132542;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  &__title {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 1.5rem;
    margin: 10px 10px 0px 10px;
  }
  &__form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 20px;
    &__title {
      margin: 10px;
    }
    &__description {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px;
      & label {
        margin: 10px 10px 5px 10px;
      }
      & textarea {
        width: 200px;
        height: 80px;
      }
    }
  }
  & button {
    width: 100px;
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
</style>
