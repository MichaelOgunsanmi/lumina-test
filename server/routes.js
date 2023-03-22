const express = require('express');
const router = express.Router();
const FavoriteController = require('./controllers/user-favorite.controller');
const UserController = require('./controllers/user.controller');

const { getFavorites, addFavorite, removeFavorite } = FavoriteController;

const { getAllUsers } = UserController;

router.get('/api/v1/users', getAllUsers);

router.get('/api/v1/users/:userId/favorites', getFavorites);
router.post('/api/v1/users/:userId/favorites', addFavorite);
router.delete('/api/v1/users/:userId/favorites/:movieId', removeFavorite);

module.exports = router;
