<template>
  <div class="profil">
    <Signup />
    <Login />
  </div>
</template>

<script>
import Login from '@/components/Login.vue';
import Signup from '@/components/Signup.vue';

export default {
  name: 'Profil',
  components: {
    Signup,
    Login,
  },
};
</script>

<style lang="scss">
.profil {
  display: flex;
  justify-content: center;
  align-items: center;
  &__page {
    width: 450px;
    height: 100vh;
    background-color: #35495e;
    border-radius: 8px;
    box-shadow: 2px 2px 2px -8px rgba(255, 255, 255, 1);
    padding: 5px;
    margin-top: 80px;
  }
}
</style>
