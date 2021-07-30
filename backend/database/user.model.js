const {DataTypes, Model} = require('sequelize');

const {database: {sequelize}} = require('../configs');

class User extends Model {
}

User.init({
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'user'
    });

module.exports = User
