<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>{{  msg }}</h1>
    <counter></counter>
  </div>
</template>

<script>
  import Counter from './counter.vue';
  import HelloWorld from "./components/HelloWorld.vue";

export default {
  components:  { counter },
  data () {
    return {
      msg: "Hello Vue 2.01"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
