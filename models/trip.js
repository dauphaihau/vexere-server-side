'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Trip extends Model {
        static associate({Station, Ticket}) {
            this.belongsTo(Station, {foreignKey: "fromStation", as: "from"});
            this.belongsTo(Station, {foreignKey: "toStation", as: "to"});
            this.hasMany(Ticket, {foreignKey: 'trip_id'})
        }
    }

    Trip.init({
        startTime: DataTypes.DATE,
        price: DataTypes.FLOAT
    }, {
        sequelize,
        modelName: 'Trip',
    });
    return Trip;
};