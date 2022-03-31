<template>
  <div class="post">
    <div class="post__title">
      <p>Création de post :</p>
    </div>
    <form class="post__form" enctype="multipart/form-data">
      <div class="post__form__title">
        <label for="">Titre : </label>
        <input
          type="text"
          placeholder="Choisissez un titre à votre post !"
          v-model="title"
        />
      </div>
      <div class="post__form__description">
        <label for="">Description : </label>
        <textarea
          type="text"
          placeholder="Décrivez votre post !"
          v-model="description"
        />
      </div>
      <div class="post__form__img">
        <label for="">image : </label>
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
        <button @click.prevent="createPost()">Créer</button>
      </div>
    </form>
  </div>
</template>

<script>
// import Post from '../models/post';

export default {
  name: 'Login',
  data() {
    return {
      title: '',
      description: '',
      media: '',
      pseudo: '',
      UserId: '',
      postId: '',
    };
  },
  methods: {
    handleFileUpload(event) {
      this.media = event.target.files[0];
    },
    createPost() {
      // const newPost = {
      //   title: this.title,
      //   description: this.description,
      //   // media: (this.media = this.$refs.file.files[0]),
      //   media: this.media,
      //   UserId: (this.UserId = localStorage.getItem('userId')),
      //   // postId: this.postId,
      //   pseudo: (this.pseudo = localStorage.getItem('pseudo')),
      //   userToken: (this.userToken = localStorage.getItem('userToken')),
      // };
      const fd = new FormData();
      fd.append('title', this.title);
      fd.append('description', this.description);
      fd.append('media', this.media);
      fd.append('userId', (this.UserId = localStorage.getItem('userId')));
      fd.append('pseudo', (this.pseudo = localStorage.getItem('pseudo')));
      fd.append('postId', (this.postId = localStorage.getItem('postId')));
      console.log(localStorage.getItem('userId'));

      this.axios
        .post('http://localhost:3000/api/post/createpost', fd, {
          headers: {
            'Content-Type': 'multipart/from-data',
          },
        })
        .then((response) => {
          console.log('Post créer !'); // J'indique dans la console que le post est créé
          // console.log(response.data);
          console.log(response);
          console.log(
            "Condition vérifié, je suis redirigé vers la page d'accueil !!",
          );
          this.$router.push({ name: 'Home' });
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style lang="scss">
.post {
  height: 400px;
  background-color: #62929e;
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
    &:hover {
      background-color: #62929e;
    }
  }
}
</style>
