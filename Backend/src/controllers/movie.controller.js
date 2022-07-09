const { json } = require('body-parser');
const Movie = require('../models/movie.model');

exports.CreateNewMovie = async (req, res) => {
    console.log(req.body);
    try {
        const isMovie = await Movie.find({ name: req.body.name });
         if (isMovie.length >= 1) {
             return res.status(200).json({message: "Filmes já cadastrado!"});
        }
    
        const newMovie = new Movie(req.body);
        const movie = await newMovie.save();
        return res.status(200).json({message: 'Filme criado com sucesso!', movie});
    }
    catch(err) {
        res.status(400).json({err: err});
    }

};

exports.GetAllMovie = async (req, res) => {
    try {
        const movies = await Movie.find();
        return res.status(200).json(movies);
    }
    catch(err) {
        res.status(400).json({message: 'Erro ao pegar todos os filmes'});
    }
};

exports.GetMovieByName = async (req, res) => {
    try {
        const isMovie = await Movie.find({ name: req.body.name });
        console.log(isMovie[0].id)
        if (isMovie.length >= 1) {
             return res.status(200).json({isMovie});
        }

        return res.status(200).json({message: "Filme não encontrado!"})
    }
    catch(err) {
        res.status(400).json({message: 'Erro ao pegar todos os filmes'});
    }
};

exports.DeleteMovie = async (req, res) => {
    try {
        const movie = await Movie.find({ name: req.body.name });
        if (movie.empty()) {
            await Movie.find({ name: req.body.name }).remove();
            return res.status(200).json({message: "Filme apagado com sucesso!"});
        }
        return res.status(400).json({message: "Filme não encontrado"});
    }
    catch(err) {
        res.status(400).json({message: "Erro ao apagar filme!"});
    }
};
