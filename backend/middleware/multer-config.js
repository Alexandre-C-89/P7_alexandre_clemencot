const multer = require('multer');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};

const storage = multer.diskStorage({
    // j'indique à multer ou enregistré le fichier entrant
  destination: (req, file, callback) => {
    console.log(file);
    callback(null, 'images');
  },
  // il faut utilisé le nom d'origine et remplacé 
  // les espaces par des underscores  
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
    console.log(name + Date.now() + '.' + extension);
    callback(null, name + Date.now() + '.' + extension);
  }
});

module.exports = multer({storage: storage}).single('media');