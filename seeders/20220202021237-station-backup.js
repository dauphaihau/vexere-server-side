'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert(
            'Stations',
            [
                {
                    name: 'ben xe mien dong',
                    address: '1 Paster Q1',
                    province: 'SG',
                    createdAt: '2022-02-02 00:18:25',
                    updatedAt: '2022-02-02 00:18:25'
                },
                {
                    name: 'ben xe mien tay',
                    address: '3 Nguyen Van Linh, Q.Binh Chanh',
                    province: 'SG',
                    createdAt: '2022-02-02 00:18:25',
                    updatedAt: '2022-02-02 00:18:25'
                },
                {
                    name: 'ben xe mien tay',
                    address: '1 Tay Ho Q3',
                    province: 'SG',
                    createdAt: '2022-02-02 00:18:25',
                    updatedAt: '2022-02-02 00:18:25'
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('Stations', null, {});
    }
};
