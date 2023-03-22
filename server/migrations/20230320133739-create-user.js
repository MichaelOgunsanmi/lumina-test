'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('USERS', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      firstName: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false
      },
      lastName: {
        type: Sequelize.DataTypes.STRING(50),
        allowNull: false
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('USERS');
  }
};
