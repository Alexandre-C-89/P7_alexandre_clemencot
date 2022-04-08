// Je définie un modèle de post
// que je pourrais réutilisé dans mes méthodes et functions

export default class Post {
  constructor(postId, title, description, media, pseudo, userId) {
    this.postId = postId;
    this.title = title;
    this.description = description;
    this.media = media;
    this.pseudo = pseudo;
    this.userId = userId;
  }
}
