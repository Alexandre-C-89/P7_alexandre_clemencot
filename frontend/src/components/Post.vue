<template>
  <div id="posts">
    {{ message }} /* Je veux injecté dans cette balise mes posts */
  </div>
</template>

<script>
export default {
  name: 'Post',
  components: {},
};
// J'aimerais afficher tous mes posts de ma BDD
// eslint-disable-next-line no-unused-vars
// const posts = new Vue({
//   el: '#posts',
//   data: {
//     message: 'Hello Vue !',
//   },
// });
</script>

<style scoped></style>
