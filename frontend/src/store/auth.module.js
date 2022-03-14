// Ce fichier utilise auth.service pour
// les demandes d'authentification

// j'importe authService du fichier auth.service
import AuthService from '../services/auth.service';
// Je stock dans une constante user
// le parse et l'enregistrement dans le localeStorage de l'utilisateur
const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };
export const auth = {
  namespaced: true,
  state: initialState, // Etat, Utilisateur
  actions: {
    // Connexion, Déconnexion, inscription
    login({ commit }, user) {
      return AuthService.login(user).then(
        (user) => {
          commit('loginSuccess', user);
          return Promise.resolve(user);
        },
        (error) => {
          commit('loginFailure');
          return Promise.reject(error);
        },
      );
    },
    logout({ commit }) {
      AuthService.logout();
      commit('logout');
    },
    register({ commit }, user) {
      return AuthService.register(user).then(
        (response) => {
          commit('registerSuccess');
          return Promise.resolve(response.data);
        },
        (error) => {
          commit('registerFailure');
          return Promise.reject(error);
        },
      );
    },
  },
  mutations: {
    // Ici je déclare toute les situations
    // qui peuvent survenir lors de mes actions
    // connexion réussi et non réussi
    // Déconnexion
    // enregistrement réussi et non réussi
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    registerSuccess(state) {
      state.status.loggedIn = false;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    },
  },
};
