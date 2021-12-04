<template>
  <div class="counter">
   {{ count }}
    <div class="counter__button" @click:"increment">+</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  methods: {
      increment () {
          this.count++
      }
  }
}

</script>

<style>
.counter {
  font-weight: bold;
  width: 50px;
  height: 50px;
  text-align: center;
  background-color: #fff;
}
.counter__button {
  border: 1px solid #000;
  padding: 2px 10px;
}
</style>
