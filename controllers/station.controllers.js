const {Station} = require('../models');
const {Op} = require("sequelize");

const createStation = async (req, res) => {
    const {name, address, province} = req.body;
    try {
        const newStation = await Station.create({name, address, province});
        res.status(201).send(newStation);
    } catch (err) {
        res.status(500).send(err)
    }
}

const getAllStation = async (req, res) => {
    const {name} = req.query;
    try {
        if (name) {
            const allStation = await Station.findAll({
                where: {
                    name: {
                        [Op.like]: `%${name}%`
                    }
                }
            });
            res.status(200).send(allStation)
        } else {
            const allStation = await Station.findAll();
            res.status(200).send(allStation)
        }
    } catch (err) {
        res.status(500).send(err)
    }
}

const getDetailStation = async (req, res) => {
    const {id} = req.params;

    try {
        const detailStation = await Station.findOne({
            where: {
                id
            }
        });
        res.status(200).send(detailStation)
    } catch (err) {
        res.status(500).send(err)
    }
}

const updateStation = async (req, res) => {
    const {id} = req.params;
    const {name, address, province} = req.body;

    try {
        const detailStation = await Station.findOne({
            where: {
                id
            }
        });
        detailStation.name = name;
        detailStation.address = address;
        detailStation.province = province;
        await detailStation.save();
        res.status(200).send(detailStation)
    } catch (err) {
        res.status(500).send(err)
    }
}

const deleteStation = async (req, res) => {
    const {id} = req.params;
    try {
        await Station.destroy({
            where: {
                id
            }
        });
        res.status(200).send(`station ${id} has been deleted`)
    } catch (err) {
        res.status(500).send(err)
    }
}


module.exports = {
    createStation,
    getAllStation,
    getDetailStation,
    updateStation,
    deleteStation
};
