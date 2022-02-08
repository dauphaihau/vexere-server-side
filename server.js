const express = require('express');
const path = require('path');
const fingerprint = require('express-fingerprint');
const {sequelize} = require('./models');
const {rootRouter} = require('./routers');

const app = express();

app.use(express.json());

app.use(fingerprint());

// set static file
const publicPathDirectory = path.join(__dirname, './public');
app.use('/public', express.static(publicPathDirectory))

// use router
app.use('/api/v1', rootRouter);

app.listen(1111, async () => {
    console.log('app listen on port http://localhost:1111');
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});
