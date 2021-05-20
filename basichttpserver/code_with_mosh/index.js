const express = require('express');
const path = require('path');


const db =  require('./config/mongoose');
const Movie = require('./models/movie');
const app = express();
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));


// app.get();
// app.post();
// app.put();
// app.delete();


app.get('/', (req,res) => {
    return res.render('home');
});

app.post('/add-movie', (req,res) =>{
    Movie.create({
        movie_name: req.body.movie_name,
        movie_year: req.body.movie_year,
        language: req.body.language
    }, (err, newMovie)=>{
        if(err){console.log('error in adding movie')
         return;}
        console.log("****",newMovie);
        return res.redirect('/');
    });
});




app.post('/api/courses', (req,res)=>{
    const course = {
        id: courses.length+1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});





const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}...`));