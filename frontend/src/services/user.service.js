// Création d'un service pour accéder aux données
//J'importe Axios
import axios from 'axios';
// j'importe authHeader qui ce trouve dans ce dossier
import authHeader from './auth-header';
// Je stock dans une constante l'URL
const API_URL = 'http://localhost:8080/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }
  getUserBoard() {
    // authHeader() est une fonction pour ajouter
    // un en-tête HTTP lors de la demande de ressource autorisée .
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }
  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }
  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}
export default new UserService();
