const UserModel = require("../models/user.model");
const ObjectID = require("mongoose").Types.ObjectID;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const MaskData = require("maskdata");
const passwordValidator = require("password-validator");
const emailValidator = require("email-validator");
require('dotenv').config();

// Je masque l'email pour éviter les intrusions 
const maskEmail2Options = {
    maskWidth: "X",
    unmaskedStartCharacters: 3, // à partir du 4ème charactère je masque l'email
    unmaskedEndCharacters: 20 // je masque jusqu'au 9ème charactère 
};

var passwordSchema = new passwordValidator();

passwordSchema
.is().min(8)                                    // Minimum length 8
.is().max(100)                                  // Maximum length 100
.has().uppercase()                              // Must have uppercase letters
.has().lowercase()                              // Must have lowercase letters
.has().digits(1)                                // Must have at least 2 digits
.has().not().spaces()                           // Should not have spaces
.is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values


exports.signup = (req, res, next) => {
    if ((!passwordSchema.validate(req.body.password) || !emailValidator.validate(req.body.email))) {
        return res.status(400).json({ message: "Password et/ou email n'a pas le format requis"});
    }
    const maskedEmail = MaskData.maskEmail2(req.body.email, maskEmail2Options);
    // Output: TESTXXXXXXXXXXX:CLIENT-A
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        console.log(req.body.email);
        bcrypt.hash(req.body.email, process.env.SECRET_HASH_EMAIL_KEY)
        .then(hashEmail => {
            console.log(hashEmail);
            const user = new User({
                email: maskedEmail,
                hashEmail: hashEmail,
                password: hash
            });
            user.save()
                .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                .catch(error => res.status(400).json({ error }));
        })
        })
        .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
// console.log(req.body.email);
bcrypt.hash(req.body.email, process.env.SECRET_HASH_EMAIL_KEY)
    .then(hashEmail => {
    // console.log(hashEmail);
    User.findOne({ hashEmail })
        .then(user => {
        if (!user) {
            return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        bcrypt.compare(req.body.password, user.password) // compare le MDP entrer par l'utilisateur avec le MDP qui est haché et enregistré dans la BDD
            .then(valid => {
            if (!valid) {
                return res.status(401).json({ error: 'Mot de passe et/ou email incorrect !' });
            }
            res.status(200).json({
                userId: user._id,
                token: jwt.sign(
                { userId: user._id },
                process.env.SECRET_KEY,
                { expiresIn: '24h' }
                )
            });
            })
            .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
    })
};
  

module.exports.getAllUsers = async (req, res) => {
    const users = await UserModel.find().select("-password");
    res.status(200).json(users);
};

module.exports.userInfo = (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID unknown : " + req.params.id)

        UserModel.findById(req.params.id, (err, docs) => {
            if (!err) res.send(docs);
            else console.log("ID unknown : " + err);
        }).select("-password");
    };
    
    module.exports.updateUser = async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID unknown : " + req.params.id)

    try {
        await UserModel.findOneAndUpdate(
           {_id: req.params.id},
           {
               $set: {
                   bio: req.body.bio
               }
           },
           { new: true, upsert: true, setDefaultsOnInsert: true },
           (err, docs) => {
               if (!err) return res.send(docs);
               if (err) return res.status(500).send({ message: err });
           }
        )
    } catch (err) {
        return res.status(500).json({ message: err });
    }
};

module.exports.deleteUser = async (req, res) => {
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send("ID unknown : " + req.params.id)

    try {
        await UserModel.remove({ _id: req.params.id }).exec();
        res.status(200).json({ message: "Successfully deleted. " })
    } catch (err) {
        return res.status(500).json({ message: err });
    }
};

module.exports.follow = async (req, res) => {
    if (!ObjectID.isValid(req.params.id) || !ObjectID.isValid(req.body.idToFollow))
        return res.status(400).send("ID unknown : " + req.params.id)

    try {
        // add to the follower list
        await UserModel.findByIdAndUpdate(
            req.params.id,
            { $addToSet: { following: req.body.idToFollow }},
            { new: true, upsert: true },
            (err, docs) => {
                if (!err) res.status(201).json(docs);
                else return res.status(400).json(err);
            }
        );
        // add to the follower list
        await UserModel.findByIdAndUpdate(
            req.params.id,
            { $addToSet: { following: req.body.idToFollow }},
            { new: true, upsert: true },
            (err, docs) => {
                // if (!err) res.status(201).json(docs);
                if (err) return res.status(400).json(err);
            }
        );
    } catch (err) {
        return res.status(500).json({ message: err });
    }
};

module.exports.unfollow = async (req, res) => {
    if (!ObjectID.isValid(req.params.id) || !ObjectID.isValid(req.body.idToUnfollow))
        return res.status(400).send("ID unknown : " + req.params.id)

    try {
        // add to the follower list
        await UserModel.findByIdAndUpdate(
            req.params.id,
            { $pull: { following: req.body.idToUnfollow }},
            { new: true, upsert: true },
            (err, docs) => {
                if (!err) res.status(201).json(docs);
                else return res.status(400).json(err);
            }
        );
        // add to the follower list
        await UserModel.findByIdAndUpdate(
            req.params.id,
            { $pull: { following: req.body.id }},
            { new: true, upsert: true },
            (err, docs) => {
                // if (!err) res.status(201).json(docs);
                if (err) return res.status(400).json(err);
            }
        );
    } catch (err) {
        return res.status(500).json({ message: err });
    }
};
