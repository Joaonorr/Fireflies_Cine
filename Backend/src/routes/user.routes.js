// Responsável por fazer as rotas do User

const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')
const userController = require('../controllers/user.controllers');

// Rota responsável por criar um novo User: (POST) localhost:8081/api/v1/register
// body {
//     name: String,
//     email: String,
//     password: String
// }
router.post('/register', userController.registerNewUser);

// Rota responsável pro realizar um novo login 'User': (POST) localhost:8081/api/v1/login
// body {
//     email: String,
//     password: String
// }
router.post('/login', userController.loginUser);

// Rota responsável por retornar o perfil/profile do usuário 'User' (GET) localhost:8081/api/v1/userProfile
router.get('/userProfile', auth, userController.returnUserProfile);


module.exports = router;