<template>
  <div class="home">
    <div class="home__hello">Bonjour {{ pseudo }} !</div>
    <div class="home__icone">
      <button @click.prevent="goToCreatePost()">Créér un post</button>
    </div>
    <div class="home__card" v-for="post in posts" :key="post.card">
      <div class="home__card__img">
        <img :src="post.media" alt="image du post" />
      </div>
      <div class="home__card__content">
        <div class="home__card__content__title">
          {{ post.title }}
        </div>
        <div class="home__card__content__description">
          {{ post.description }}
        </div>
        <div class="home__card__content__id">pseudo : {{ post.pseudo }}</div>
        <div class="home__card__content__date">{{ post.createdAt }}</div>
      </div>
      <div class="home__card__btn" v-if="post.pseudo == pseudo || isAdmin == 1">
        <button @click.prevent="goDelete(post)">Supprimer</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      posts: [],
      token: localStorage.getItem('token'),
      pseudo: localStorage.getItem('pseudo'),
      isAdmin: localStorage.getItem('isAdmin'),
    };
  },
  mounted() {
    this.axios
      .get('http://localhost:3000/api/post')
      .then((response) => {
        this.posts = response.data.post;
        this.isAdmin = localStorage.getItem('isAdmin');
        if (localStorage.getItem('userId') === null) {
          this.$router.push({ name: 'Signup' });
        }
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error));
  },
  methods: {
    goToCreatePost() {
      this.$router.push({ name: 'createPost' });
    },
    goDelete(post) {
      console.log('Je veux supprimé le post !');
      this.axios
        .delete('http://localhost:3000/api/post/deletePost', this.isAdmin, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          data: {
            userId: post.userId,
            postId: post.postId,
          },
        })
        .then(() => {
          window.location.reload();
          console.log(post);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss">
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 600px;
  height: auto;
  background-color: #afafb0;
  margin: 40px 10px 10px 10px;
  border-radius: 18px;
  padding: 20px;
  &__hello {
    font-size: 2.5rem;
    color: #fff;
    margin: 20px;
  }
  &__icone {
    & button {
      width: 100px;
      height: 28px;
      margin: 10px;
      border-radius: 10px;
      background-color: rgba(255, 255, 255, 0.541);
      border: 2px solid white;
      margin: 5px;
      &:hover {
        background-color: #62929e;
      }
    }
  }
  &__card {
    width: 530px;
    height: 280px;
    background-color: #d1515a;
    margin: 10px 0px 10px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border: 1px solid #fff;
    border-radius: 5px;
    &__img {
      width: 330px;
      height: 220px;
      margin: 10px;
      & img {
        width: 330px;
        height: 220px;
      }
    }
    &__content {
      width: 160px;
      height: 220px;
      margin: 10px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      &__title {
        font-family: 'nunito', sans-serif;
        font-weight: bold;
        font-size: 1.5rem;
        margin: 2px;
        color: #fff;
      }
      &__description {
        font-size: 0.8rem;
        color: #fff;
        width: 150px;
        height: 150px;
        margin: 5px 0px 5px 0px;
      }
      &__id {
        color: #fff;
      }
      &__name {
        color: #fff;
        font-size: 0.8rem;
        font-family: 'Merriweather Sans', sans-serif;
      }
      &__date {
        color: #fff;
        font-size: 0.7rem;
      }
    }
    &__btn {
      margin: 0px 0px 10px 0px;
      & button {
        width: 100px;
        height: 28px;
        margin: 10px;
        border-radius: 10px;
        color: #fff;
        background-color: #afafb0;
        border: 2px solid white;
        margin: 5px;
        &:hover {
          background-color: #132542;
        }
      }
    }
  }
}
</style>
