<template>
  <div class="home">
    <button @click="showPosts()">Affiche les posts !</button>
    <div class="home__card" v-for="post in posts[0]" :key="post.id">
      {{ post.id }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      posts: '',
    };
  },
  methods: {
    showPosts() {
      this.axios
        .get('http://localhost:3000/api/post')
        .then((response) => {
          this.posts = response.data;
        })
        // eslint-disable-next-line no-console
        .then((error) => console.log(error));
    },
  },
};
</script>
