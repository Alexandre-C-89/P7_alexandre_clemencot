// Je définie un modèle utilisateur
// que je pourrais réutilisé dans mes méthodes et functions

export default class User {
  constructor(title, description, media, pseudo) {
    this.title = title;
    this.description = description;
    this.media = media;
    this.pseudo = pseudo;
  }
}
