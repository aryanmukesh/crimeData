const mongoose = require('mongoose');

//connect to db
mongoose.connect('mongodb://localhost/movies_db');

//acquire connection to db
const db = mongoose.connection;

//checking connection
db.on('error', console.error.bind(console,'error while connection to DB'));

db.once('open', () =>{
    console.log('Sucessfully Connectd to DB');
});