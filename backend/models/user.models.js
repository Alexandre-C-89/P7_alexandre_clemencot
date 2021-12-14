const mysql = require("mysql2");
const { isEmail } = require("validator");
const bcrypt = require ("bcrypt");
const { Sequelize } = require("sequelize/dist");

const userSchema = new Sequelize.Schema(
    {
        pseudo: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 15,
            unique: true,
            trimp: true
        },
        email: {
            type: String,
            required: true,
            validate: [isEmail],
            lowercase: true,
            unique: true,
            trimp: true
        },
        password: {
            type: String,
            required: true,
            max: 1024,
            minlength: 6,
        },
        picture: {
            type: String,
            default: "./uploads/profils/random-user.png"
        },
        bio: { // ce qui décrit l'utilisateur
            type: String,
            max: 1024,
        },
        followers: { // Les utilisateurs qui suivent d'autres utilisateurs
            type: [String],
            max: 1024,
        },
        following: {
            type: [String]
        },
        likes: {
            type: [String]
        }
    },
    {
        timestamps: true, // Savoir quand l'utilisateur à réaliser une action 
    }
);

// play function before save into display: "block"
userSchema.pre("save", async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw Error("incorrect password");
    }
    throw Error("incorrect email");
};

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;