const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('User', 'root','',{
    dialect: 'mysql',
    host: 'localhost'
})
module.exports = sequelize;




