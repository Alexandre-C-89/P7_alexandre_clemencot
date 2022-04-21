<template>
  <div class="post">
    <div class="post__title">
      <p>Création de post :</p>
    </div>
    <form class="post__form" enctype="multipart/form-data">
      <div class="post__form__title">
        <label>Titre : </label>
        <input
          type="text"
          placeholder="Choisissez un titre !"
          v-model="title"
        />
      </div>
      <div class="post__form__description">
        <label>Description : </label>
        <textarea
          type="text"
          placeholder="Décrivez votre post !"
          v-model="description"
        />
      </div>
      <div class="post__form__img">
        <label>image : </label>
        <input
          type="file"
          placeholder="Vous pouvez importez une image !"
          ref="file"
          name="file"
          id="file"
          class="media"
          @change="handleFileUpload($event)"
        />
      </div>
      <div class="post__form__btn">
        <button @click.prevent="CreatePost()">Créer</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'createPost',
  data() {
    return {
      title: '',
      description: '',
      media: '',
      pseudo: '',
      userId: '',
    };
  },
  methods: {
    handleFileUpload(event) {
      this.media = event.target.files[0];
    },
    CreatePost() {
      console.log('Je vais créé un post !');
      const fd = new FormData();
      fd.append('title', this.title);
      fd.append('description', this.description);
      fd.append('media', this.media);
      fd.append('userId', (this.userId = localStorage.getItem('userId')));
      fd.append('pseudo', (this.pseudo = localStorage.getItem('pseudo')));
      console.log(
        this.title,
        ':',
        this.description,
        ':',
        this.media,
        ':',
        this.pseudo,
        ':',
        Number(this.userId),
      );
      this.axios
        .post('http://localhost:3000/api/post/createpost', fd, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token', 'userId')}`,
          },
          data: {
            userId: this.userId,
            // postId: this.postId,
            // token: localStorage.getItem('token'),
          },
        })
        .then((response) => {
          console.log('Post créer !');
          console.log(response);
          console.log("Post créer, je suis redirigé vers la page d'accueil !!");
          this.$router.push({ name: 'Home' });
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style lang="scss" scoped>
.post {
  height: 400px;
  background-color: #afafb0;
  color: #132542;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  &__title {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 1.5rem;
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
      margin: 10px;
      & label {
        margin-bottom: 5px;
      }
    }
    &__img {
      margin: 10px;
    }
    &__name {
      margin: 10px;
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
