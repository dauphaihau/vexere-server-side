const express = require('express');
const rootRouter = express.Router();
const {stationRouter} = require("./station.routers");
const {userRouter} = require("./user.routers");
const {tripRouter} = require("./trip.routers");
const {fingerPrintRouter} = require("./finger-printer.router");

rootRouter.use('/stations', stationRouter);
rootRouter.use('/users', userRouter);
rootRouter.use('/trips', tripRouter);
rootRouter.use('/finger-print', fingerPrintRouter);

module.exports = {
    rootRouter
};
