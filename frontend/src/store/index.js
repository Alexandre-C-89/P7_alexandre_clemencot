import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import auth from './auth.module';

Vue.use(Vuex);
Vue.use(VueRouter);

export default new Vuex.Store({
  // state est l'état de mon application, on peut stocké des objets par ex. .
  state: {
    userToken: '',
    userId: '',
  },
  // mutations sert à mettre à jour la partie "state" juste au dessus
  // et on pourra aussi faire des actions comme des requêtes API
  mutations: {
    setToken(state, t) {
      state.token = t;
    },
  },

  actions: {
    //
  },
  modules: {
    //
    auth, // J'importe le fichier auth pour utilisé l'authentification
  },
});
