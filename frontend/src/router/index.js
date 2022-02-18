/* eslint-disable implicit-arrow-linebreak */
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import Home from '../views/Home.vue';
import SignIn from '../views/SignIn.vue';
import Dashboard from '../views/Dashboard.vue';
import SignUp from '../views/Signup.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIn,
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignUp,
  },
  {
    path: '/signin',
    redirect: '/',
  },
  // {
  //   path: '/createPost',
  //   name: 'createPost',
  //   component: () => import('../views/CreatePost.vue'),
  // },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      if (!store.getters['auth/authenticated']) {
        return next({
          name: 'signin',
        });
      }
      next();
      return false;
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
