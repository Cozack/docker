const HOST_DB = process.env.HOST_DB
const MYSQL_DATABASE = process.env.MYSQL_DATABASE
const MYSQL_USER = process.env.MYSQL_USER
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD

module.exports = {
    SEQUELIZE_URI: `mysql://${MYSQL_USER}:${MYSQL_PASSWORD}@${HOST_DB}:3306/${MYSQL_DATABASE}`,
    HOST: process.env.HOST,
    PORT: process.env.PORT
}
