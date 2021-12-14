<template>
  <div id="app">
    <Header></Header>
    <Button><Button>
    <!-- <Body></Body> -->
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import Header from "./components/header.vue";
// import Body from "./components/body.vue";
// import Footer from "./components/footer.vuse";
import Button from "./components/button.vue";
export default {
  components: {
    Header,
    // Body,
    // Footer,
    Button,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");

html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
  text-decoration: none;
  list-style: none;
}

#app {
  margin: 0;
  padding: 0;
}
</style>
