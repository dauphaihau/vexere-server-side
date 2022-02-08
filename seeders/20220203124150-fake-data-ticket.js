'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
          'Tickets',
          [
            {
              trip_id: 1,
              user_id: 2,
              createdAt: '2022-02-02 00:18:25',
              updatedAt: '2022-02-02 00:18:25'
            },
            {
              trip_id: 2,
              user_id: 2,
              createdAt: '2022-02-02 00:18:25',
              updatedAt: '2022-02-02 00:18:25'
            },
            {
              trip_id: 3,
              user_id: 2,
              createdAt: '2022-02-02 00:18:25',
              updatedAt: '2022-02-02 00:18:25'
            },
          ],
          {}
      );
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Tickets', null, {});
  }
};
