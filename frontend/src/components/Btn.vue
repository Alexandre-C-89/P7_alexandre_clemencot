<template>
  <div class="btn">
    <button></button>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.btn {
  & button {
    width: 100px;
    height: 28px;
    margin: 10px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.541);
    border: 2px solid white;
    margin: 5px;
    &:hover {
      background-color: #62929e;
    }
  }
}
</style>
