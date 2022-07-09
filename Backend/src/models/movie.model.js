// Reponsável pelo modelo da classe Movie

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    name: {type: String, maxlength: 50, required: true},
    description: {type: String, maxlength: 50, required: true},
    img: {type: String, require: false},
    runTime: {type: Number, require: true},
    },
    {
        timestamps: true,
        collection: 'movies',    
    }
);

movieSchema.statics.findByMovie = async (name) => {
    const movie = await Movie.findOne({name});
    console.log(movie);
    if (!movie) {
        throw new Error({error: 'unfunded Movie'})
    }
    return movie;
};

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;