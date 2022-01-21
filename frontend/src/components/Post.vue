<template>
  <div class="hello">
    <div :key="index" v-for="(pays, index) in pays"></div>
    <h1>{{ pays.name }}</h1>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Post',
  data() {
    return {
      pays: null,
    };
  },
  mounted() {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      this.pays = response;
      console.log(this.pays);
    });
  },
};
</script>

<style scoped></style>
