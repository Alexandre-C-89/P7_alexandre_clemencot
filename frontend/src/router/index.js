import Vue from 'vue';
import VueRouter from 'vue-router';
import Accueil from '../views/Accueil.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil,
  },
  {
    path: '/signup',
    name: 'Inscription',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Inscription.vue'),
  },
  {
    path: '/login',
    name: 'Connexion',
    component: () => import('../views/Connexion.vue'),
  },
  {
    path: '/user',
    name: 'Profil',
    component: () => import('../views/Profil.vue'),
  },
];

// const User = {
//   template: `<div>User {{ $route.params.id }}</div>`,
// };

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
