/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import axios from 'axios';

const state = {
  user: null,
  posts: null,
};

const getters = {
  isAuthenticated: (state) => !!state.user,
  StatePosts: (state) => state.posts,
  StateUser: (state) => state.user,
};

const actions = {
  async Signup({ dispatch }, form) {
    await axios.post('user/signup', form);
    const UserForm = new FormData();
    UserForm.append('pseudo', form.pseudo);
    UserForm.append('email', form.email);
    UserForm.append('password', form.password);
    await dispatch('LogIn', UserForm);
  },
  async LogIn({ commit }, User) {
    await axios.post('/user/login', User);
    await commit('setUser', User.get('pseudo'));
  },
  async CreatePost({ dispatch }, post) {
    await axios.post('/post/createpost', post);
    await dispatch('GetHome');
  },
  async GetHome({ commit }) {
    const response = await axios.get('/');
    commit('setHome', response.data);
  },
  async LogOut({ commit }) {
    const user = null;
    commit('logout', user);
  },
};

const mutations = {
  setUser(state, pseudo) {
    state.user = pseudo;
  },
  setHome(state, posts) {
    state.posts = posts;
  },
  LogOut(state) {
    state.user = null;
    state.posts = null;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
