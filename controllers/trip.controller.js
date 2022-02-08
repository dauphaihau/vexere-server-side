const {Trip, Station} = require('../models');

const createTrip = async (req, res) => {
    const {fromStation, toStation, startTime, price} = req.body;
    const newTrip = await Trip.create({
        fromStation,
        toStation,
        startTime,
        price
    });
    res.status(201).send(newTrip);
}

const getAllTrip = async (req, res) => {
    try {
        const allTrip = await Trip.findAll({
            include: [
                {
                    model: Station,
                    as: 'from'
                },
                {
                    model: Station,
                    as: 'to'
                },
            ]
        });
        res.status(200).send(allTrip)
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteTrip = async (req, res) => {
    const {id} = req.params;
    try {
        await Trip.destroy({
            where: {id}
        });
        res.status(200).send(`trip ${id} has been deleted`)
    } catch (error) {
        res.status(500).send(`trip ${id} has been deleted`);
    }
};

const updateTrip = async (req, res) => {
    const {id} = req.params;
    const {fromStation, toStation, startTime, price} = req.body;
    try {
        await Trip.update(
            {fromStation, toStation, startTime, price},
            {where: {id}}
        );
        res.status(200).send(`trip ${id} has been updated`)
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    createTrip,
    getAllTrip,
    deleteTrip,
    updateTrip,
};
