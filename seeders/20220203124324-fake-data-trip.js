'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'trips',
            [
                {
                    fromStation: 2,
                    toStation: 4,
                    startTime: '2021-11-30 08:30:30',
                    price: '100000',
                    createdAt: '2022-02-03 08:26:37',
                    updatedAt: '2022-02-03 08:26:37',
                },
                {
                    fromStation: 3,
                    toStation: 4,
                    startTime: '2021-11-30 08:30:30',
                    price: '200000',
                    createdAt: '2022-02-03 08:26:37',
                    updatedAt: '2022-02-03 08:26:37',
                },
                {
                    fromStation: 1,
                    toStation: 4,
                    startTime: '2021-11-30 08:30:30',
                    price: '300000',
                    createdAt: '2022-02-03 08:26:37',
                    updatedAt: '2022-02-03 08:26:37',
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Trips', null, {});
    }
};
