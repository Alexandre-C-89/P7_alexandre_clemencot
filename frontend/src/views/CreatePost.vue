<template>
  <div class="post">
    <form action="" class="post__form">
      <div class="post__form__info">
        <label for="">Titre : </label>
        <input type="text" />
        <label for="">Description : </label>
        <input type="text" />
      </div>
      <div class="post__form__name">
        <label for="">Nom : </label>
        <input type="text" />
      </div>
      <div class="post__form__password">
        <label for=""></label>
        <input type="text" />
      </div>
    </form>
  </div>
</template>

<script></script>

<style lang="scss">
.post {
  width: 320px;
  height: 160px;
  background-color: #62929e;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & button {
    width: 100px;
    height: 28px;
    margin: 10px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.541);
    border: 2px solid white;
    &:hover {
      background-color: #62929e;
    }
  }
}
</style>
