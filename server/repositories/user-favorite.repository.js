const UserFavorites = require('../models/user-favorites.model');
class UserFavoriteRepository {
  static async getFavorites(userId) {
    return await UserFavorites.getFavorites(userId);
  }

  static async addFavorite(userId, movieId) {
    return await UserFavorites.addFavorite(userId, movieId);
  }

  static async removeFavorite(userId, movieId) {
    return await UserFavorites.removeFavorite(userId, movieId);
  }
}

module.exports = UserFavoriteRepository;
