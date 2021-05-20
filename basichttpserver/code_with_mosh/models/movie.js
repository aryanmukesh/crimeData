const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    movie_name:{
        type:String,
        required:true
    },
    movie_year:{
        type:String
    },
    language:{
        type:String
    }
});

const Movie = mongoose.model('Movie',movieSchema);
module.exports = Movie;