'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'USERS',
      [
        {
          id: 1,
          firstName: 'Anona',
          lastName: 'Cruz'
        },
        {
          id: 2,
          firstName: 'Camilla',
          lastName: 'Sayer'
        },
        {
          id: 3,
          firstName: 'Ganesh',
          lastName: 'Zentai'
        },
        {
          id: 4,
          firstName: 'Vivien',
          lastName: 'Straub'
        },
        {
          id: 5,
          firstName: 'Bernardita',
          lastName: 'Bishop'
        }
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('USERS', null, {});
  }
};
