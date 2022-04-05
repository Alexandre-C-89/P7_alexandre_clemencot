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
          placeholder="Choisissez un titre à votre post !"
          v-model="form.title"
        />
      </div>
      <div class="post__form__description">
        <label>Description : </label>
        <textarea
          type="text"
          placeholder="Décrivez votre post !"
          v-model="form.description"
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
        <button @click.prevent="CreatePost()">Créer</button>
      </div>
    </form>
  </div>
</template>

<script>
// Code tuto
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Posts',
  components: {},
  data() {
    return {
      form: {
        title: '',
        description: '',
        media: '',
      },
    };
  },
  CreatePost: function () {
    // a function to call getposts action
    this.GetPosts();
  },
  computed: {
    ...mapGetters({ Posts: 'StatePosts', User: 'StateUser' }),
  },
  methods: {
    ...mapActions(['CreatePost', 'GetPosts']),
    async submit() {
      try {
        await this.CreatePost(this.form);
      } catch (error) {
        console.log("Sorry you can't make a post now!");
      }
    },
  },
};

// Ancien code
// import Post from '../models/post';

// export default {
//   name: 'Login',
//   data() {
//     return {
//       title: '',
//       description: '',
//       media: '',
//       pseudo: '',
//       userId: '',
//       postId: '',
//     };
//   },
//   methods: {
//     handleFileUpload(event) {
//       this.media = event.target.files[0];
//     },
//     createPost() {
//       const fd = new FormData();
//       fd.append('title', this.title);
//       fd.append('description', this.description);
//       fd.append('media', this.media);
//       fd.append('userId', (this.userId = localStorage.getItem('userId')));
//       fd.append('pseudo', (this.pseudo = localStorage.getItem('pseudo')));
//       fd.append('postId', (this.postId = localStorage.getItem('postId')));
//       console.log(localStorage.getItem('userId'));

//       this.axios
//         .post('http://localhost:3000/api/post/createpost', fd, {
//           headers: {
//             'Content-Type': 'multipart/from-data',
//           },
//         })
//         .then((response) => {
//           console.log('Post créer !'); // J'indique dans la console que le post est créé
//           // console.log(response.data);
//           console.log(response);
//           console.log(
//             "Condition vérifié, je suis redirigé vers la page d'accueil !!",
//           );
//           this.$router.push({ name: 'Home' });
//         })
//         .catch((error) => console.log(error));
//     },
//   },
// };
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
