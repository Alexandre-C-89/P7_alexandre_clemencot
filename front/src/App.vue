<template>
  <div id="app">
    <Index />
    <!-- <Comment /> -->
  </div>
</template>

<script>
// import axios from "axios";
import Index from "./components/Index.vue";
// import Comment from "./components/Comment.vue";

export default {
  name: "App",
  components: {
    Index,
    // Comment,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
