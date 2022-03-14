// Nous avons également des méthodes
// pour récupérer les données du serveur.
//Dans le cas où nous accédons à des ressources protégées,
// la requête HTTP nécessite l'en-tête d'autorisation.

export default function authHeader() {
  //Il vérifie le stockage local pour l'élément utilisateur.
  //S'il existe un utilisateur connecté avec
  // accessToken (JWT), renvoyez l'en-tête d'autorisation HTTP.
  // Sinon, renvoie un objet vide.
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.accessToken) {
    return { Authorization: 'Bearer ' + user.accessToken };
  }
  return {};
}

// Si j'utilise dans mon back-end Node.js Express,
// il faut que je face attention à utilisé
// l'en-tête x-access-token comme ceci :

// export default function authHeader() {
//   let user = JSON.parse(localStorage.getItem('user'));
//   if (user && user.accessToken) {
//     return { 'x-access-token': user.accessToken };
//   } else {
//     return {};
//   }
// }
