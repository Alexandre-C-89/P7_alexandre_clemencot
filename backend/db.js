const Sequelize = require('sequelize')

// Creating new Object of Sequelize
const sequelize = new Sequelize(
    'groupomania',
    'root',
    '', {

        // Explicitly specifying
        // mysql database
        dialect: 'mysql',

        // By default host is 'localhost'        
        host: 'localhost'
    }
);

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }