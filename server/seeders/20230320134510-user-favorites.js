'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'USER_FAVORITES',
      [
        {
          userId: 1,
          movieId: 'tt0848228',
          createdAt: '2023-03-17 08:01:36',
          updatedAt: '2023-03-17 08:01:36'
        },
        {
          userId: 1,
          movieId: 'tt4154756',
          createdAt: '2023-03-17 08:01:36',
          updatedAt: '2023-03-17 08:01:36'
        },
        {
          userId: 1,
          movieId: 'tt2395427',
          createdAt: '2023-03-17 08:01:36',
          updatedAt: '2023-03-17 08:01:36'
        },
        {
          userId: 1,
          movieId: 'tt4154796',
          createdAt: '2023-03-17 08:01:36',
          updatedAt: '2023-03-17 08:01:36'
        },
        {
          userId: 2,
          movieId: 'tt4154756',
          createdAt: '2023-03-17 08:01:36',
          updatedAt: '2023-03-17 08:01:36'
        },
        {
          userId: 2,
          movieId: 'tt10515848',
          createdAt: '2023-03-17 08:01:36',
          updatedAt: '2023-03-17 08:01:36'
        },
        {
          userId: 2,
          movieId: 'tt0120575',
          createdAt: '2023-03-17 08:01:36',
          updatedAt: '2023-03-17 08:01:36'
        },
        {
          userId: 3,
          movieId: 'tt0287871',
          createdAt: '2023-03-17 08:01:36',
          updatedAt: '2023-03-17 08:01:36'
        },
        {
          userId: 3,
          movieId: 'tt2975590',
          createdAt: '2023-03-17 08:01:36',
          updatedAt: '2023-03-17 08:01:36'
        },
        {
          userId: 3,
          movieId: 'tt0103776',
          createdAt: '2023-03-17 08:01:36',
          updatedAt: '2023-03-17 08:01:36'
        },
        {
          userId: 3,
          movieId: 'tt4116284',
          createdAt: '2023-03-17 08:01:36',
          updatedAt: '2023-03-17 08:01:36'
        },
        {
          userId: 3,
          movieId: 'tt2313197',
          createdAt: '2023-03-17 08:01:36',
          updatedAt: '2023-03-17 08:01:36'
        },
        {
          userId: 4,
          movieId: 'tt0926084',
          createdAt: '2023-03-17 08:01:36',
          updatedAt: '2023-03-17 08:01:36'
        },
        {
          userId: 4,
          movieId: 'tt0417741',
          createdAt: '2023-03-17 08:01:36',
          updatedAt: '2023-03-17 08:01:36'
        },
        {
          userId: 5,
          movieId: 'tt0389860',
          createdAt: '2023-03-17 08:01:36',
          updatedAt: '2023-03-17 08:01:36'
        }
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('USER_FAVORITES', null, {});
  }
};
