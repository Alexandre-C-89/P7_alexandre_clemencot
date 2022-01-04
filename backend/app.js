// J'importe express
const express = require("express");
// J'importe path (à voir si je garde path)
// const path = require("path");
// J'importe 


// Je stocke express dans une variable "app"
const app = express();

// Ici, ce sont les headers (requêtes)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Permet d'accéder à l'API depuis n'importe quelle origine
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); // chaque requête qui peuvent être effectué 
    next();
});

// J'indique ou les images seront 
// stocké (à voir si je garde pour le P7)
// app.use("/images", express.static(path.join(__dirname, "images")));

// app.use("/api/", limiter);
app.use(helmet());
app.use(express.json());

// app.use('/api/sauces', sauceRoutes);
// app.use('/api/auth', userRoutes);

module.exports = app;