// je require le module http
const http = require("http");
// j'importe mon app (fichier app)
const app = require("./app");

// Connection à sequelize
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("database", "username", "password", {
    host: "localhost",
    dialect: "mysql",
});

// Je test la connection au server
try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully !");
} catch (err) {
    console.error("Unable to connect to the database:" + err);
}

// Je gère les erreurs 
const errorHandler = error => {
    if (error.syscall !== 'listen') {
      throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges.');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use.');
        process.exit(1);
        break;
      default:
        throw error;
    }
};


const server = http.createServer(app);

// le serveur écoute 
server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

server.listen(port);