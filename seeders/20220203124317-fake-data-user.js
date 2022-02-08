'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(
            'users',
            [
                {
                    name: "han",
                    email: "han@gmail.com",
                    password: "1111",
                    numberPhone: "0903331921",
                    type: 'MOD',
                    avatar: 'https://portal.staralliance.com/imagelibrary/aux-pictures/prototype-images/avatar-default.png/@@images/image.png',
                    createdAt: '2022-02-02 00:18:25',
                    updatedAt: '2022-02-02 00:18:25'
                },
                {
                    name: "hau",
                    email: "hau@gmail.com",
                    password: "1000",
                    numberPhone: "0903331921",
                    type: 'MOD',
                    avatar: 'https://portal.staralliance.com/imagelibrary/aux-pictures/prototype-images/avatar-default.png/@@images/image.png',
                    createdAt: '2022-02-02 00:18:25',
                    updatedAt: '2022-02-02 00:18:25'
                },
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('users', null, {});
    }
};
