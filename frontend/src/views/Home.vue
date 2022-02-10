<template>
  <div class="home">
    <div class="home__icone">
      <button @click.prevent="goToCreatePost()">Créér un post</button>
    </div>
    <div class="home__card" v-for="post in posts" :key="post.card" :post="post">
      <div class="home__card__img">
        <img :src="post.media" alt="" />
      </div>
      <div class="home__card__content">
        <div class="home__card__title">
          {{ post.title }}
        </div>
        <div class="home__card__content__name">
          {{ post.pseudo }}
        </div>
        <div class="home__card__content__description">
          {{ post.description }}
        </div>
      </div>
      <div class="home__btn">
        <button>modifier</button>
        <button>Supprimer</button>
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
      posts: '',
    };
  },
  mounted() {
    this.axios
      .get('http://localhost:3000/api/post')
      .then((response) => {
        this.posts = response.data.post;
        console.log(response.data.post);
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error));
  },
  methods: {
    goToCreatePost() {
      this.$router.push({ name: 'createPost' });
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
  background-color: #62929e;
  margin: 40px 10px 10px 10px;
  border-radius: 18px;
  padding: 20px 10px 10px 10px;
  &__card {
    background-color: black;
    box-sizing: content-box;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 700px;
    height: auto;
    margin: 20px;
    &__img {
      background-color: #fff;
      width: auto;
      & img {
        width: 400px;
        height: 370px;
      }
    }
    &__icone {
      background-color: none;
      background: none;
      & button {
        width: 100px;
        height: 30px;
        border-radius: 10px;
        background-color: #ef8354;
        // position: absolute;
        // top: 150px;
        // right: 300px;
      }
    }
    &__title {
      color: #ef8354;
      font-size: 1.3rem;
      font-weight: bolder;
      font-family: 'Nunito', sans-serif;
      position: absolute;
    }
    .home__card__content {
      border-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 250px;
      height: 280px;
      &__name {
        background-color: aqua;
        font-family: 'Nunito', sans-serif;
        font-size: 1rem;
        font-weight: bold;
      }
      &__description {
        width: 200px;
        height: 300px;
        background-color: #fff;
        font-family: 'Merriweather Sans', sans-serif;
        font-size: 0.7rem;
        margin-top: 30px;
      }
    }
  }
  &__btn button {
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
