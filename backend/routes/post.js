const express = require("express");
const router = express.Router();
const multer = require("../middleware/multer-config");

// Je récupère le controller pour les post
const postCtrl = require("../controllers/post");

router.get("/", postCtrl.getAllPost);
router.get("/", postCtrl.getOnePost);
router.post("/:id", multer, postCtrl.createPost);
router.put("/:id", postCtrl.modifyPost);
router.delete("/:id", postCtrl.deleteOnePost);

module.exports = router;
