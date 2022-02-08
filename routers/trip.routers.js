const express = require('express');
const tripRouter = express.Router();
const {createTrip, getAllTrip, deleteTrip, updateTrip} = require("../controllers/trip.controller");

tripRouter.post('/', createTrip);
tripRouter.get('/', getAllTrip);
tripRouter.delete('/:id', deleteTrip);
tripRouter.put('/:id', updateTrip);

module.exports = {
    tripRouter
};
