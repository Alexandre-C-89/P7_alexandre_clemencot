/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import CreatePost from '../views/CreatePost.vue';
import ModifyPost from '../views/ModifyPost.vue';
import DeletePost from '../views/DeletePost.vue';
import Profil from '../views/Profil.vue';
import store from '../store';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/profile',
      name: 'profile',
      // lazy-loaded
      component: () => import('../views/Profil.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      // lazy-loaded
      component: () => import('../views/BoardAdmin.vue'),
    },
    {
      path: '/mod',
      name: 'moderator',
      // lazy-loaded
      component: () => import('../views/BoardModerator'),
    },
    {
      path: '/user',
      name: 'user',
      // lazy-loaded
      component: () => import('../views/BoardUser.vue'),
    },
    {
      path: '/createpost',
      name: 'createPost',
      component: CreatePost,
    },
    {
      path: '/modifyPost',
      name: 'ModifyPost',
      component: ModifyPost,
    },
    {
      path: '/deletePost',
      name: 'DeletePost',
      component: DeletePost,
    },
  ],
});

// const routes = [
//   {
//     path: '/', // URL correspondant au composant
//     name: 'Home', // le nom de cette route pour l'étiquetage et le débuggage
//     component: Home, // le composant qui doit s'afficher lorsque le path est trouvé
//     beforeEnter: (to, from, next) => {
//       if (!store.state.token) {
//         next('/');
//       }
//       next();
//     },
//   },
//   {
//     path: '/login',
//     name: 'Login',
//     component: Login,
//   },
//   {
//     path: '/register',
//     name: 'Register',
//     component: Register,
//   },
//   {
//     path: '/createpost',
//     name: 'createPost',
//     component: CreatePost,
//   },
//   {
//     path: '/modifyPost',
//     name: 'ModifyPost',
//     component: ModifyPost,
//   },
//   {
//     path: '/deletePost',
//     name: 'DeletePost',
//     component: DeletePost,
//   },
//   {
//     path: '/user/:name',
//     name: 'Profil',
//     component: Profil,
//   },
// ];

// const router = new VueRouter({
//   mode: 'history',
//   routes,
// });

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/home'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');
  // essai de connection à une page
  // + non connecté
  // Je redirige vers la page de connexion
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router;
