<template>
  <div class="header">
    <h1>Groupomania</h1>
    <ul>
      <li>S'incrire</li>
      <li>Créer un compte</li>
    </ul>
  </div>
</template>

<script>
  
</script>

<style>
.header {
  width: 100%;
  background-color: #3885b1;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* border-radius: 0px 0px 60px 60px; */
}

img {
  width: 5%;
  height: 5%;
}
h1 {
  margin: 5px 10px 10px 60px;
  border: 2px solid white;
  border-radius: 15px;
  padding: 10px;
}
ul {
  text-decoration: none;
  list-style: none;
  color: black;
  display: flex;
  flex-direction: row;
}
li {
  margin: 10px;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  font-weight: 700;
}
</style>
