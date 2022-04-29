<template>
  <div class="home">
    <div class="home__hello">Bonjour {{ pseudo }} !</div>
    <div class="home__icone">
      <button @click.prevent="goToCreatePost()">Créér un post</button>
    </div>
    <div class="home__card" v-for="post in post" :key="post.card">
      <div class="home__card__img">
        <img :src="post.media" alt="image du post" />
      </div>
      <div class="home__card__content">
        <div class="home__card__content__title">
          {{ post.title }}
        </div>
        <div class="home__card__content__description">
          {{ post.description }}
        </div>
        <div class="home__card__content__id">pseudo : {{ post.pseudo }}</div>
        <div class="home__card__content__date">{{ post.createdAt }}</div>
      </div>
      <div class="home__card__btn">
        <div
          class="home__card__btn__delete"
          v-if="post.pseudo == pseudo || isAdmin == 1"
        >
          <button @click.prevent="goDelete(post)">Supprimer ce post</button>
        </div>
        <button :postId="post.postId" @click.prevent="goComment()">
          Commentez
        </button>
      </div>
      <div class="home__card__comment" :key="comment.card">
        <p>{{ comment.userId }}</p>
        <p>{{ comment.pseudo }}</p>
        <p>Commentaire : {{ comment.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      post: {
        postId: '',
        userId: '',
        title: '',
        description: '',
        media: '',
        pseudo: '',
        createdAt: '',
      },
      comment: {
        userId: '',
        pseudo: '',
        description: '',
        createdAt: '',
      },
      userId: localStorage.getItem('userId'),
      token: localStorage.getItem('token'),
      pseudo: localStorage.getItem('pseudo'),
      isAdmin: JSON.parse(localStorage.getItem('isAdmin')),
    };
  },
  mounted() {
    if (this.token == null) {
      this.$router.push({ name: 'Login' });
    } else {
      this.axios
        .get('http://localhost:3000/api/post/', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((response) => {
          this.post = response.data.post;
          this.isAdmin = localStorage.getItem('isAdmin');
          if (localStorage.getItem('userId') === null) {
            this.$router.push({ name: 'Signup' });
          }
        })
        // eslint-disable-next-line no-console
        .catch((error) => console.log(error));
      this.axios
        .get('http://localhost:3000/api/comment/', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((response) => {
          console.log(response.data.comment);
          this.comment = response.data.comment;
        });
    }
  },
  methods: {
    goToCreatePost() {
      this.$router.push({ name: 'createPost' });
    },
    goDelete(post) {
      this.axios
        .delete(`http://localhost:3000/api/post/deletePost/${post.postId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          data: {
            isAdmin: JSON.parse(localStorage.getItem('isAdmin')),
            userId: this.post.userId,
          },
        })
        .then(() => {
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    goComment() {
      this.$router.push({ name: 'createComment' });
    },
  },
};
</script>

<style lang="scss">
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 600px;
  height: auto;
  background-color: #afafb0;
  color: #132542;
  margin: 40px 10px 10px 10px;
  border-radius: 18px;
  padding: 20px;
  &__hello {
    font-size: 2.5rem;
    color: #fff;
    margin: 20px;
  }
  &__icone {
    & button {
      width: 100px;
      height: 28px;
      margin: 10px;
      border-radius: 10px;
      background-color: rgba(255, 255, 255, 0.541);
      border: 2px solid white;
      margin: 5px;
      &:hover {
        background-color: #132542;
        color: #fff;
      }
    }
  }
  &__card {
    width: 530px;
    height: auto;
    background-color: #d1515a;
    margin: 10px 0px 10px 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    border: 1px solid #fff;
    border-radius: 5px;
    &__img {
      width: 330px;
      height: 220px;
      margin: 10px;
      & img {
        width: 330px;
        height: 220px;
      }
    }
    &__content {
      width: 160px;
      height: 220px;
      margin: 10px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      &__title {
        font-family: 'Nunito Sans', sans-serif;
        font-weight: bold;
        font-size: 1.5rem;
        margin: 2px;
        color: #fff;
      }
      &__description {
        font-size: 0.8rem;
        color: #fff;
        width: 150px;
        height: 150px;
        margin: 5px 0px 5px 0px;
      }
      &__id {
        color: #fff;
      }
      &__name {
        color: #fff;
        font-size: 0.8rem;
        font-family: 'Merriweather Sans', sans-serif;
      }
      &__date {
        color: #fff;
        font-size: 0.7rem;
      }
    }
    &__btn {
      margin: 0px 0px 10px 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      & button {
        width: 150px;
        height: 28px;
        margin: 10px;
        border-radius: 10px;
        background-color: #afafb0;
        border: 2px solid white;
        margin: 5px;
        &:hover {
          background-color: #132542;
          color: #fff;
        }
      }
    }
    &__comment {
      width: 200px;
      height: auto;
      background-color: #fff;
      margin: 10px 0px 10px 0px;
    }
  }
}

@media all and (min-width: 700px) and (max-width: 900px) {
  .home {
    font-size: 0.8rem;
    width: 550px;
    &__card {
      width: 470px;
      height: 260px;
      background-color: #d1515a;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      border: 1px solid #fff;
      border-radius: 5px;
      &__img {
        background-color: #fff;
        width: 220px;
        height: 160px;
        & img {
          width: 220px;
          height: 180px;
        }
      }
      &__content {
        width: 160px;
        height: 180px;
        margin: 10px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        &__title {
          font-family: 'nunito', sans-serif;
          font-weight: bold;
          font-size: 1rem;
          margin: 2px;
          color: #fff;
        }
        &__description {
          font-size: 0.6rem;
          color: #fff;
          width: 80px;
          height: 120px;
          margin: 5px 0px 5px 0px;
        }
        &__name {
          font-size: 0.6rem;
          font-family: 'Merriweather Sans', sans-serif;
        }
        &__date {
          font-size: 0.6rem;
        }
      }
    }
  }
}

@media all and (min-width: 350px) and (max-width: 700px) {
  .home {
    font-size: 0.8rem;
    width: 300px;
    &__card {
      align-items: center;
      flex-direction: column;
      width: 280px;
      height: 300px;
      &__img {
        width: 200px;
        height: 130px;
        & img {
          width: 200px;
          height: 130px;
        }
      }
      &__content {
        width: 200px;
        height: 80px;
        margin: 10px;
        &__title {
          font-size: 0.6rem;
          margin: 2px;
          color: #fff;
        }
        &__description {
          font-size: 0.5rem;
          color: #fff;
          width: 80px;
          height: 100px;
          margin: 5px 0px 5px 0px;
        }
        &__date {
          font-size: 0.6rem;
        }
        &__id {
          font-size: 0.6rem;
        }
      }
    }
  }
}
</style>
