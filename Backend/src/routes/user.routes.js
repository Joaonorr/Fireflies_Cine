// Responsável por fazer as rotas do User

const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controllers');

// Rota responsável por criar um novo User: (POST) localhost:8081/api/v1/register
router.post('/register', userController.registerNewUser);

router.post('/login', userController.loginUser);

router.get('/userProfile', userController.returnUserProfile);


module.exports = router;