const UserFavoriteRepository = require('../repositories/user-favorite.repository');

class UserFavoriteController {
  static async getFavorites(req, res) {
    const { userId } = req.params;
    try {
      const userFavorites = await UserFavoriteRepository.getFavorites(userId);

      return res.status(200).json({
        data: userFavorites
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message
      });
    }
  }

  static async addFavorite(req, res) {
    const { userId } = req.params;
    const { movieId } = req.body;

    try {
      const createdFavorite = await UserFavoriteRepository.addFavorite(userId, movieId);

      if (!createdFavorite[1]) {
        return res.status(400).json({
          message: 'User Favourite already exists'
        });
      }

      return res.status(201).json({
        data: createdFavorite[0]
      });
    } catch (err) {
      return res.status(500).json({
        message: err.message
      });
    }
  }

  static async removeFavorite(req, res) {
    const { userId, movieId } = req.params;

    try {
      const deletedFavorite = await UserFavoriteRepository.removeFavorite(userId, movieId);

      if (deletedFavorite === 0) {
        return res.status(404).json({
          message: 'User Favourite does not exists'
        });
      }

      return res.status(204).send();
    } catch (err) {
      return res.status(500).json({
        message: err.message
      });
    }
  }
}

module.exports = UserFavoriteController;
