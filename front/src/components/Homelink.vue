// ./components/HomeLink.vue
<template>
  <div id="app">
    <nav>
      <a href="/about">A propos</a>
      <a href="/Contact">Contact</a>
    </nav>
    <p>Bienvenue Sur notre page d'<Homelink /></p>
  </div>
</template>


<script>
export default {
  name: "HomeLink",
};
</script>


<style>
a {
  text-decoration: none;
}
</style>