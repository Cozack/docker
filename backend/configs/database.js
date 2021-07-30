const {Sequelize} = require('sequelize');

const {SEQUELIZE_URI} = require('./config');


const sequelize = new Sequelize(SEQUELIZE_URI);

module.exports = {
    sequelize
}
