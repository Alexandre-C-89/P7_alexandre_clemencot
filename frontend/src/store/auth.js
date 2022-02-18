import axios from 'axios';

export default {
  namespaced: true,
  // state est l'état de mon application, on peut stocké des objets par ex. .
  state: {
    // Ici je stocke le token et user pour les
    // conservé et les réutilisé plus tard
    token: null,
    user: null,
  },
  getters: {
    authenticated(state) {
      return state.token && state.user;
    },
    user(state) {
      return state.user;
    },
  },
  // mutations sert à mettre à jour la partie "state" juste au dessus
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_USER(state, data) {
      state.user = data;
    },
  },

  actions: {
    // action asynchrone pour la connection de l'utilisateur
    async signIn({ dispatch }, credentials) {
      const response = axios.post('auth/signin', credentials);
      return dispatch('attempt', response.data.token);
    },
    async attempt({ commit, state }, token) {
      if (token) {
        commit('SET_TOKEN', token);
      }
      if (!state.token) {
        return;
      }
      try {
        // Je fais une demande pour vérifié si je suis authentifiés
        const response = await axios.get('auth/me');
        commit('SET_USER', response.data);
      } catch (e) {
        // Si je ne suis pas authentifié alors je supprime les
        // token et user ou plutôt je les définis à "null"
        commit('SET_TOKEN', null);
        commit('SET_USER', null);
      }
    },

    signOut({ commit }) {
      return axios.post('auth/signout').then(() => {
        commit('SET_TOKEN', null);
        commit('SET_USER', null);
      });
    },
  },
};
