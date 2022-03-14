// j'importe Axios
import axios from 'axios';
// je stock dans une const l'URL
// que j'utiliserais pour la suite
// pour les appels API
const API_URL = 'http://localhost:8080/api/auth/';
// Ici ce trouve les méthodes register, login et logout
class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'signin', {
        username: user.username,
        password: user.password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem('user');
  }
  register(user) {
    return axios.post(API_URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password,
    });
  }
}
export default new AuthService();
