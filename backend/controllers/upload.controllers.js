const userModel = require("../models/user.model");
const fs = require("fs");
const { promisify } = require("util");
const { uploadErrors } = require("../utils/error.utils");
const pipeline = promisify(require("stream").pipeline);

module.exports.uploadProfil = async (req, res) => {
    try {
        if(
            req.file.detectedMimeType !== "image/jpg" && 
            req.file.detectedMimeType !== "image/png" && 
            req.file.detectedMimeType !== "image/jpeg"
        )
            throw Error("invalid file");
        if (req.file.size > 500000) throw("max size");
    } catch (err) {
        const errors = uploadErrors(err);
        return res.status(201).json({ errors });
    }

    const fileName = req.body.name + ".jpg";

    await pipeline(
        req.file.stream,
        fs.createReadStream(
            `${_dirname}/../client/public/uploads/profil/${fileName}`
        )
    );

    try {
        await userModel.findByIdAndUpdate(
            req.body.userId,
            { $set : {picture: "./upload/profil/" + fileName}},
            { new: true, upsert: true, setDefaultsOnInsert: true},
            (err, docs) => {
                if (!err) return res.send(docs);
                else return res.status(500).send({ message: err })
            }
        );
    } catch (err) {
        return res.status(500).send({ message: err });
    }
};