const express = require('express');
const routerMovie = express.Router();
const movieController = require('../controllers/movie.controller');

// Rota responsável por criar um novo filme 'Movie' (POST): localhost:8081/api/v1/CreateMovie
// Body {
//     name: String,
//     description: String,
//     img: String,
//     runTime: Number
// }
routerMovie.post('/CreateNewMovie', movieController.CreateNewMovie);

// Rota responsável por resgatar dados de todos os filmes 'Movies' (GET): localhost:8081/api/v1/GetAllMovies
routerMovie.get('/GetAllMovies', movieController.GetAllMovie);

// Rota responsável por resgatar dados de um filme 'Movie' (GET): localhost:8081/api/v1/GetMovieByName
routerMovie.get('/GetMovieByName', movieController.GetMovieByName);    

// // Rota responsável por editar dados de um filme 'Movie' ()
// router.put('/EditMovie', movieController.EditMovie);

// Rota responsável por deletar dados de um filme 'Movie' (DELETE): localhost:8081/api/v1/DeleteMovie
routerMovie.delete('/DeleteMovie', movieController.DeleteMovie);

module.exports = routerMovie;