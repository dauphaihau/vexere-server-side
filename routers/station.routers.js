const express = require('express');
const stationRouter = express.Router();
const {
    createStation,
    getAllStation,
    getDetailStation,
    updateStation,
    deleteStation
} = require("../controllers/station.controllers");
const {Station} = require('../models');
const {checkExist} = require("../middlewares/validations/checkExist");
const {authenticate} = require("../middlewares/auth/authenticate");
const {authorize} = require("../middlewares/auth/authorize");

stationRouter.post('/', authenticate, authorize(['ADMIN', "MOD"]), createStation);
stationRouter.get('/', getAllStation);
stationRouter.get('/:id', getDetailStation);
stationRouter.put('/:id', checkExist(Station), updateStation);
stationRouter.delete('/:id', authenticate, checkExist(Station), deleteStation);

module.exports = {
    stationRouter,
};
