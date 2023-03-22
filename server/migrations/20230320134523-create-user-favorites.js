'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('USER_FAVORITES', {
      userId: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        foreignKey: true,
        references: {
          model: 'USERS',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        OnDelete: 'CASCADE'
      },
      movieId: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING,
        primaryKey: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('USER_FAVORITES');
  }
};
