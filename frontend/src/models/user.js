// Je définie un modèle utilisateur
// que je pourrais réutilisé dans mes méthodes et functions

export default class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
}
