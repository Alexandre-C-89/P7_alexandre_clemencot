import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store';

// J'indique mon URL de base que je pourrais réutilisé
// sur mes appels API
axios.defaults.baseURL = 'http://localhost:3000/api/';
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

// tant que je suis pas authentifié l'application n'a pas de rendu
// ou n'apparaît pas
store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount('#app');
});
