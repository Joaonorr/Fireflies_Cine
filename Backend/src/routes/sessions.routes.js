const express = require('express');
const routerSession = express.Router();
const sessionController = require('../controllers/session.controller');

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

// Rota responsável por resgatar dados de todos os filmes 'Movies' (GET): localhost:8081/api/v1/GetAllMovies
routerMovie.get('/GetAllMovies', movieController.GetAllMovie);

// Rota responsável por resgatar dados de um filme 'Movie' (GET): localhost:8081/api/v1/GetMovieByName
routerMovie.get('/GetMovieByName', movieController.GetMovieByName);    

// // Rota responsável por editar dados de um filme 'Movie' ()
// router.put('/EditMovie', movieController.EditMovie);

// Rota responsável por deletar dados de um filme 'Movie' (DELETE): localhost:8081/api/v1/DeleteMovie
routerMovie.delete('/DeleteMovie', movieController.DeleteMovie);

module.exports = routerMovie;
