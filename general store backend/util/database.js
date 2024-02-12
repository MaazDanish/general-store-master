const Sequelize = require('sequelize');

const sequelize = new Sequelize('generalstore','root','maazdanish',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;