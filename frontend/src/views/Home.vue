<template>
  <div class="home">
    <div class="home__icone">
      <button @click.prevent="goToCreatePost()">Créér un post</button>
    </div>
    <div
      class="home__card"
      v-for="post in posts"
      :key="post.card"
      :post="post"
      data-id="${post.postId}"
    >
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
        <!-- <div class="home__card__content__name">
          {{ post.pseudo }}
        </div> -->
        <div class="home__card__content__id">pseudo : {{ post.pseudo }}</div>
        <!-- <div class="home__card__content__id">postId : {{ post.postId }}</div> -->
      </div>
      <div class="home__card__btn">
        <!-- <button @click.prevent="goModify()">modifier</button> -->
        <button @click.prevent="goDelete()">Supprimer</button>
      </div>
    </div>
  </div>
</template>

<script>
import Posts from '../models/post';

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      posts: Posts,
      // postId: '',
    };
  },
  mounted() {
    this.axios
      .get('http://localhost:3000/api/post')
      .then((response) => {
        this.posts = response.data.post;
        // console.log(response.data.post.postId);
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error));
  },
  methods: {
    goToCreatePost() {
      this.$router.push({ name: 'createPost' });
    },
    goDelete() {
      const el = document.querySelector('.home__card');
      console.log(el);
      console.log('Je veux supprimé le post !');
      $;
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
  background-color: #41b883;
  margin: 40px 10px 10px 10px;
  border-radius: 18px;
  padding: 20px;
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
    background-color: #4c86a8;
    margin: 10px 0px 10px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    &__img {
      background-color: #fff;
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
        font-size: 1.2rem;
        margin: 2px;
        color: #ef8354;
      }
      &__description {
        // background-color: #fff;
        color: #fff;
        width: 150px;
        height: 150px;
        margin: 5px 0px 5px 0px;
      }
      &__name {
        color: #fff;
        font-size: 0.8rem;
        font-family: 'Merriweather Sans', sans-serif;
      }
    }
    &__btn {
      margin: 0px 0px 10px 0px;
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
  }
}
</style>
