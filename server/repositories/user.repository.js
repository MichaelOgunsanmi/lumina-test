const User = require('../models/user.model');

class UserRepository {
  static async getAllUsers() {
    return await User.getAllUsers();
  }
}

module.exports = UserRepository;
