<template>
  <div class="card">
      <div class="card__in">
        <div class="card__in__post">
          <img src="../assets/fiasco_ldc.webp" alt="post de l'utilisateur">
        </div>
        <div class="card__in__info">
          <div class="card__in__info__img"></div>
          <h1>Prénom</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Vel repudiandae provident ducimus voluptas exercitationem 
          quam cumque sit adipisci at harum nemo necessitatibus
          ab vero, iure nesciunt sapiente. Rerum, accusantium iusto.</p>
        </div>
      </div>
  </div>
</template>

<script></script>

<style>

.card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  /* background-color: rgb(42, 103, 173); */
  background-color: #2852a0;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, .2);
}

.card__in{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
}

.card__in__post {
  width: 100%;
  height: 100%;
  margin: 5px 5px 15px 5px;
}

.card__in__post img {
  width: 95%;
  height: 100%;
}

.card__in__info {
  width: 100%;
  height: 100%;
  margin: 10px;
  color: white;
}

.card__in__info__img {
  width: 75px;
  height: 75px;
  float: left;
  background: url(https://i-mom.unimedias.fr/2020/09/16/l-extraterrestre-alf-bientot-de-retour.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=453&w=806);
  border-radius: 50%;
  background-size: 100% 100%;
  margin: 30px;
  color: white;
}



</style>
