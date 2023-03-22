const UserRepository = require('../repositories/user.repository');

class UserController {
  static async getAllUsers(req, res) {
    try {
      const users = await UserRepository.getAllUsers();

      return res.status(200).json({
        data: users
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: error.message
      });
    }
  }
}

module.exports = UserController;
