"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Station extends Model {
        static associate({Trip}) {
            // define association here
            this.hasMany(Trip, {foreignKey: "fromStation"})
            this.hasMany(Trip, {foreignKey: "toStation"})
        }
    }

    Station.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                    len: [4, 20],
                }
            },
            address: {
                type: DataTypes.STRING,
                validate: {
                    checkLen(value) {
                        if (value.length >= 5 && value.length <= 50) {
                            return true;
                        } else {
                            throw new Error('address must from 5 - 30');
                        }
                    }
                }
            },
            province: {
                type: DataTypes.STRING,
                validate: {
                    isIn: [['SG', 'Q1', 'BRVT', 'CT']]
                }
            },
        },
        {
            sequelize,
            modelName: "Station",
        }
    );
    return Station;
};
