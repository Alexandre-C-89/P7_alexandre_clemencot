<template>
  <div class="home">
    <div class="home__card" v-for="post in posts" :key="post.card" :post="post">
      <div class="home__card__title">
        {{ post.title }}
      </div>
      <div class="home__card__img">
        {{ post.media }}
      </div>
      <div class="home__card__text">
        {{ post.description }}
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
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error));
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
    background-color: beige;
    width: 500px;
    height: 300px;
    margin: 10px;
    &__title {
      font-size: 1.2rem;
      font-weight: bold;
    }
    &__img {
      width: 100%;
      & img {
        width: 50px;
      }
    }
  }
}
</style>
