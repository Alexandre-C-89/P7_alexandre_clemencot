// Je définie un modèle de post
// que je pourrais réutilisé dans mes méthodes et functions

export default class Post {
  constructor(title, description, media, pseudo) {
    this.title = title;
    this.description = description;
    this.media = media;
    this.pseudo = pseudo;
  }
}
