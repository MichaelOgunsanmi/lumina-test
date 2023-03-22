const Sequelize = require('sequelize');

class User extends Sequelize.Model {
  static associate(models) {
    this.hasMany(models.UserFavorites, { foreignKey: 'userId' });
  }
  static modelInit(sequelize) {
    return this.init(this.modelFields, {
      sequelize,
      tableName: this.tablename,
      timestamps: false
    });
  }

  static async getAllUsers() {
    return await this.findAll();
  }
}

User.tablename = 'USERS';
User.modelFields = {
  id: {
    type: Sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: Sequelize.DataTypes.STRING(50),
    allowNull: false
  },
  lastName: {
    type: Sequelize.DataTypes.STRING(50),
    allowNull: false
  }
};

module.exports = User;
