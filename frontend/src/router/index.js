/* eslint-disable */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import SignUp from '../views/Signup.vue';
import CreatePost from '../views/CreatePost.vue';
import Profil from '../views/Profil.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/', // URL correspondant au composant
    name: 'Home', // le nom de cette route pour l'étiquetage et ke débuggage
    component: Home, // le composant qui doit s'afficher lorsque le path est trouvé
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignUp,
  },
  {
    path: '/createpost',
    name: 'createPost',
    component: CreatePost,
  },
  {
    path: '/user/:name',
    name: 'Profil',
    component: Profil,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
