const Sequelize = require('sequelize');

class UserFavorites extends Sequelize.Model {
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'userId' });
  }
  static modelInit(sequelize) {
    return this.init(this.modelFields, {
      sequelize,
      tableName: this.tablename
    });
  }

  static async getFavorites(userId) {
    return await this.findAll({
      where: {
        userId
      }
    });
  }

  static async addFavorite(userId, movieId) {
    return await this.findOrCreate({
      where: {
        userId,
        movieId
      }
    });
  }

  static async removeFavorite(userId, movieId) {
    return await this.destroy({
      where: {
        userId,
        movieId
      }
    });
  }
}

UserFavorites.tablename = 'USER_FAVORITES';
UserFavorites.modelFields = {
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
};

module.exports = UserFavorites;
