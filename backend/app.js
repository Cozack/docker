const express = require('express');
require('dotenv').config({ path: '../.env' });

const {database: {sequelize}, config: {HOST, PORT}} = require('./configs');
const apiRouter = require('./router/api.router');

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', apiRouter)

const start = async () => {
    await sequelize.sync();
    app.listen(PORT, HOST, () => {
        console.log(`App listen 5000`);
    })
}

try {
    start()
} catch (e) {
    console.log('db error')
}
