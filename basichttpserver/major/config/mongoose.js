//import the library
const mongoose = require('mongoose');

//connect to the db
mongoose.connect('mongodb://localhost/major_db'); 

//acquire connection to db
const db = mongoose.connection;

//checking connection
db.on('error', console.error.bind(console,'error connecting to DB'));

db.once('open',function(){
    console.log('Successfully Connected to the database');
});

