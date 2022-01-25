<template>
  <div class="home">
    <div class="home__page">
      <h2>Nouveaux posts !</h2>
      <Post />
    </div>
  </div>
</template>

<script>
import Post from '@/components/Post.vue';

export default {
  name: 'Accueil',
  components: {
    Post,
  },
};
</script>

<style lang="scss"></style>
