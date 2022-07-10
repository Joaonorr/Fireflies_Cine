const express = require('express');
const routerSession = express.Router();
const sessionController = require('../controllers/session.controllers');

// Rota responsável por criar uma nova sessão 'Session' (POST): localhost:8081/api/v1/CreateSession
// Body {
//     sessionMovie: String,
//     time: Number,
//     capacity: Number,
//     currentCapacity: Number,
//     bought: String
//     room: 
//     img: String,
//     runTime: Number
// }
routerSession.post('/CreateNewSession', sessionController.CreateNewSession);

module.exports = routerSession;
