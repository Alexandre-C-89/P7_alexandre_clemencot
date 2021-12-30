const express = require("express");
const router = express.Router();

// Je récupère le controller pour les post
const postCtrl = require("../controllers/post");

router.get("/", postCtrl.getAllPost);
router.get("/", postCtrl.getOnePost);
router.post("/:id", postCtrl.createPost);
router.put("/:id", postCtrl.modifyPost);
router.delete("/:id", postCtrl.deleteOnePost);

module.exports = router;
