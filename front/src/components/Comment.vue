<template>
  <form>
    <textarea></textarea>
    <button type="submit">Commenter</button>
  </form>
</template>

<script>
export default {
  name: "Comment",
  props: {
    msg: String,
  },
};
</script>

<style>
</style>